// إدارة استقطاب الكفاءات — Talent Acquisition Department
// PostgreSQL-backed API server.
//
// Built for scale: unlike the file-based version, a single change
// updates one row instead of rewriting the whole database, searching
// and filtering happen in SQL (not in the browser), and lists are
// paginated so the client never downloads the entire candidate set.

const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const { Pool } = require('pg');

const app = express();
app.use(express.json({ limit: '25mb' }));

// ---------------------------------------------------------------
// Database
// ---------------------------------------------------------------
if (!process.env.DATABASE_URL) {
  console.error('');
  console.error('FATAL: DATABASE_URL is not set.');
  console.error('Set it to your PostgreSQL connection string, e.g.');
  console.error('  postgres://user:password@host:5432/dbname');
  console.error('See README.md "Setup".');
  console.error('');
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Managed Postgres (Render, Azure, AWS RDS) normally requires TLS.
  // Disable by setting PGSSL=off for a local dev database.
  ssl: process.env.PGSSL === 'off' ? false : { rejectUnauthorized: false },
  max: Number(process.env.PG_POOL_MAX || 10)
});

async function initSchema() {
  const sql = fs.readFileSync(path.join(__dirname, 'db', 'schema.sql'), 'utf8');
  await pool.query(sql);
  console.log('Database schema is ready.');

  // Stage rename migration (idempotent). Older data used a different
  // stage structure; map it onto the current one so existing rows
  // keep working: "تم الترشيح" merges into "الفرز", and "العرض"
  // becomes "العرض الوظيفي".
  await pool.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS email TEXT');
  for (const col of ['date_of_birth','specialization','degree','city','address','current_salary']) {
    await pool.query(`ALTER TABLE candidates ADD COLUMN IF NOT EXISTS ${col} TEXT`);
  }
  await pool.query('ALTER TABLE assessments ADD COLUMN IF NOT EXISTS file_name TEXT');
  await pool.query('ALTER TABLE assessments ADD COLUMN IF NOT EXISTS mime_type TEXT');
  await pool.query('ALTER TABLE assessments ADD COLUMN IF NOT EXISTS file_bytes BYTEA');
  await pool.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS totp_secret TEXT');
  await pool.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS totp_enabled BOOLEAN NOT NULL DEFAULT FALSE');
  const renames = [["تم الترشيح","الفرز"],["العرض","العرض الوظيفي"]];
  for (const [from,to] of renames) {
    await pool.query('UPDATE candidates SET stage=$2 WHERE stage=$1', [from,to]);
    await pool.query('UPDATE candidates SET previous_stage=$2 WHERE previous_stage=$1', [from,to]);
    await pool.query('UPDATE stage_history SET stage=$2 WHERE stage=$1', [from,to]);
  }

  // Trigram indexes need the pg_trgm extension, which some managed
  // Postgres services only allow a superuser to create. Applied
  // separately so a permissions failure degrades performance rather
  // than preventing the app from starting.
  try {
    const opt = fs.readFileSync(path.join(__dirname, 'db', 'optional-indexes.sql'), 'utf8');
    await pool.query(opt);
    console.log('Optional search indexes are in place.');
  } catch (e) {
    console.warn('Note: could not create optional trigram search indexes ' +
      '(' + e.message + '). The app works normally; text search will be ' +
      'slower on very large candidate sets.');
  }
}

// ---------------------------------------------------------------
// Auth — username/password accounts with session cookies.
// Passwords: scrypt (built into Node) with a per-user random salt.
// Sessions: random 256-bit tokens in the DB, 7-day expiry, HttpOnly
// cookie so page scripts can never read them.
// ---------------------------------------------------------------
const wrapEarly = fn => (req, res) => fn(req, res).catch(e => {
  console.error(`${req.method} ${req.path} failed:`, e);
  res.status(500).json({ error: 'server error' });
});
const SESSION_COOKIE = 'tad_session';
// Sessions are short-lived by design: the cookie is a browser-session
// cookie (dies when the browser closes) and the server-side session
// expires after 12 hours regardless.
const SESSION_HOURS = 12;

function hashPassword(pw){
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(pw, salt, 64).toString('hex');
  return salt + ':' + hash;
}
function verifyPassword(pw, stored){
  const [salt, hash] = String(stored || '').split(':');
  if (!salt || !hash) return false;
  const calc = crypto.scryptSync(pw, salt, 64);
  const ref = Buffer.from(hash, 'hex');
  return calc.length === ref.length && crypto.timingSafeEqual(calc, ref);
}
// ---------------------------------------------------------------
// Two-factor authentication — standard TOTP (RFC 6238), compatible
// with Google/Microsoft Authenticator and similar apps. Implemented
// with Node's built-in crypto; no external service or dependency.
// ---------------------------------------------------------------
const B32 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
function base32Encode(buf){
  let bits = 0, val = 0, out = '';
  for (const b of buf){ val = (val << 8) | b; bits += 8;
    while (bits >= 5){ out += B32[(val >>> (bits - 5)) & 31]; bits -= 5; } }
  if (bits > 0) out += B32[(val << (5 - bits)) & 31];
  return out;
}
function base32Decode(s){
  let bits = 0, val = 0; const out = [];
  for (const ch of String(s).replace(/=+$/, '').toUpperCase()){
    const idx = B32.indexOf(ch); if (idx < 0) continue;
    val = (val << 5) | idx; bits += 5;
    if (bits >= 8){ out.push((val >>> (bits - 8)) & 255); bits -= 8; } }
  return Buffer.from(out);
}
function hotp(secretBuf, counter){
  const b = Buffer.alloc(8);
  b.writeBigUInt64BE(BigInt(counter));
  const h = crypto.createHmac('sha1', secretBuf).update(b).digest();
  const o = h[h.length - 1] & 0xf;
  const code = (((h[o] & 0x7f) << 24) | (h[o + 1] << 16) | (h[o + 2] << 8) | h[o + 3]) % 1000000;
  return String(code).padStart(6, '0');
}
function verifyTotp(secretB32, code){
  const s = base32Decode(secretB32);
  if (!s.length) return false;
  const t = Math.floor(Date.now() / 30000);
  const c = String(code || '').replace(/\D/g, '');
  if (c.length !== 6) return false;
  // Accept the previous/next 30s window for clock drift.
  for (const d of [-1, 0, 1]) if (c === hotp(s, t + d)) return true;
  return false;
}

function parseCookies(req){
  const out = {};
  (req.headers.cookie || '').split(';').forEach(p => {
    const i = p.indexOf('=');
    if (i > 0) out[p.slice(0, i).trim()] = decodeURIComponent(p.slice(i + 1).trim());
  });
  return out;
}
function setSessionCookie(req, res, token, maxAgeSec){
  const secure = (req.headers['x-forwarded-proto'] === 'https') ? '; Secure' : '';
  // maxAgeSec === null → a browser-session cookie (no Max-Age): the
  // browser discards it when it closes, forcing a fresh login.
  const age = (maxAgeSec === null) ? '' : `; Max-Age=${maxAgeSec}`;
  res.setHeader('Set-Cookie',
    `${SESSION_COOKIE}=${token}; HttpOnly; Path=/${age}; SameSite=Lax${secure}`);
}

// Ensure at least one account exists so the first person can log in.
async function seedAdmin(){
  // RECOVERY PATH: locked out? Set ADMIN_RESET=yes together with
  // ADMIN_USER + ADMIN_PASSWORD and redeploy — that account is
  // created (or its password overwritten) as an admin at startup.
  // Remove ADMIN_RESET afterwards, or every deploy resets it again.
  if (process.env.ADMIN_RESET === 'yes' && process.env.ADMIN_PASSWORD) {
    const ru = (process.env.ADMIN_USER || 'admin').trim();
    const hash = hashPassword(process.env.ADMIN_PASSWORD);
    const upd = await pool.query(
      'UPDATE users SET password_hash=$2, is_admin=TRUE WHERE username=$1', [ru, hash]);
    if (upd.rowCount === 0) {
      await pool.query(
        'INSERT INTO users (id, username, display_name, password_hash, is_admin) VALUES ($1,$2,$3,$4,TRUE)',
        [uid('usr'), ru, ru, hash]);
    }
    console.warn('');
    console.warn('⚠️  ADMIN_RESET applied: account "' + ru + '" now uses ADMIN_PASSWORD and is an admin.');
    console.warn('   REMOVE the ADMIN_RESET variable now — otherwise every deploy resets this account.');
    console.warn('');
    return;
  }
  const { rows } = await pool.query('SELECT COUNT(*) FROM users');
  if (Number(rows[0].count) > 0) return;
  const user = process.env.ADMIN_USER || 'admin';
  const pass = process.env.ADMIN_PASSWORD || 'admin123';
  await pool.query(
    'INSERT INTO users (id, username, display_name, password_hash, is_admin) VALUES ($1,$2,$3,$4,TRUE)',
    [uid('usr'), user, user, hashPassword(pass)]);
  console.warn('');
  console.warn('⚠️  Created the first admin account:  username "' + user + '"' +
    (process.env.ADMIN_PASSWORD ? ' (password from ADMIN_PASSWORD)' : '  password "admin123"'));
  console.warn('   Log in and CHANGE THIS PASSWORD IMMEDIATELY from the sidebar.');
  console.warn('');
}

// Session middleware: attaches req.user for valid sessions; rejects
// API calls without one. Static files stay open (they contain no
// data — everything sensitive flows through /api).
app.use(async (req, res, next) => {
  const OPEN = ['/healthz', '/api/login', '/api/forgot-password', '/api/reset-password',
                '/api/public/jobs', '/api/public/apply'];
  if (OPEN.includes(req.path)) return next();
  const token = parseCookies(req)[SESSION_COOKIE];
  if (token) {
    try {
      const { rows } = await pool.query(`
        SELECT u.id, u.username, u.display_name, u.is_admin
        FROM sessions s JOIN users u ON u.id = s.user_id
        WHERE s.token = $1 AND s.expires_at > NOW()`, [token]);
      if (rows.length) {
        req.user = { id: rows[0].id, username: rows[0].username,
          displayName: rows[0].display_name, isAdmin: rows[0].is_admin };
      }
    } catch (e) { console.error('session lookup failed:', e.message); }
  }
  if (!req.user && req.path.startsWith('/api/')) {
    return res.status(401).json({ error: 'auth required' });
  }
  next();
});

app.post('/api/login', wrapEarly(async (req, res) => {
  const { username, password } = req.body || {};
  const { rows } = await pool.query('SELECT * FROM users WHERE username = $1', [String(username || '').trim()]);
  const u = rows[0];
  if (!u || !verifyPassword(String(password || ''), u.password_hash)) {
    await new Promise(r => setTimeout(r, 400)); // blunt brute-force damper
    return res.status(401).json({ error: 'اسم المستخدم أو كلمة المرور غير صحيحة' });
  }
  if (u.totp_enabled) {
    const code = String((req.body || {}).totpCode || '').trim();
    if (!code) return res.json({ twoFactorRequired: true });
    if (!verifyTotp(u.totp_secret, code)) {
      await new Promise(r => setTimeout(r, 400));
      return res.status(401).json({ error: 'رمز التحقق غير صحيح — تأكد من الرمز الحالي في تطبيق المصادقة' });
    }
  }
  await pool.query('DELETE FROM sessions WHERE expires_at < NOW()');
  const token = crypto.randomBytes(32).toString('hex');
  await pool.query(
    `INSERT INTO sessions (token, user_id, expires_at)
     VALUES ($1, $2, NOW() + INTERVAL '${SESSION_HOURS} hours')`, [token, u.id]);
  setSessionCookie(req, res, token, null);
  res.json({ username: u.username, displayName: u.display_name, isAdmin: u.is_admin });
}));

const wrap = fn => (req, res) => fn(req, res).catch(e => {
  console.error(`${req.method} ${req.path} failed:`, e);
  res.status(500).json({ error: 'server error' });
});

const uid = p => p + '_' + crypto.randomBytes(5).toString('hex');
const ALT_STAGE = 'مناسب لشاغر آخر';

// Who is making this change — the logged-in account.
function getActor(req){
  return (req.user && (req.user.displayName || req.user.username)) || 'غير معروف';
}
// q = pool or an open transaction client, so audit rows commit (or
// roll back) atomically with the change they describe.
async function audit(q, actor, action, candidateId, candidateName, details){
  await q.query(
    'INSERT INTO audit_log (actor,action,candidate_id,candidate_name,details) VALUES ($1,$2,$3,$4,$5)',
    [actor, action, candidateId || null, candidateName || null, details || null]);
}

// Map a DB row to the shape the frontend expects.
function rowToCandidate(r) {
  return {
    id: r.id, name: r.name, email: r.email || '', phone: r.phone || '',
    currentTitle: r.current_title || '', source: r.source || '',
    experienceYears: r.experience_years, appliedFor: r.applied_for,
    alternativeJobId: r.alternative_job_id, skills: r.skills || [],
    resumeText: r.resume_text || '', stage: r.stage,
    previousStage: r.previous_stage, stageChangedAt: r.stage_changed_at,
    hasOriginalFile: r.has_original_file, resumeFileName: r.resume_file_name,
    resumeFileType: r.resume_file_type, notes: r.notes || '',
    dateOfBirth: r.date_of_birth || '', specialization: r.specialization || '',
    degree: r.degree || '', city: r.city || '', address: r.address || '',
    currentSalary: r.current_salary || '',
    createdAt: r.created_at,
    assessCount: r.assess_count !== undefined ? Number(r.assess_count) : undefined,
    assessAvg: r.assess_avg !== null && r.assess_avg !== undefined ? Number(r.assess_avg) : null,
    assessMax: r.assess_max !== null && r.assess_max !== undefined ? Number(r.assess_max) : null
  };
}
function rowToJob(r) {
  return {
    id: r.id, title: r.title, department: r.department || '',
    seniority: r.seniority || '', headcount: r.headcount,
    postDate: r.post_date ? new Date(r.post_date).toISOString().slice(0, 10) : '',
    approved: r.approved, requiredSkills: r.required_skills || [],
    niceSkills: r.nice_skills || [], description: r.description || '',
    candidateCount: r.candidate_count !== undefined ? Number(r.candidate_count) : undefined,
    hiredCount: r.hired_count !== undefined ? Number(r.hired_count) : undefined
  };
}

// ---------------------------------------------------------------
// Password recovery by email.
// Activates only when SMTP_* env vars are configured (see README);
// without them the login screen simply doesn't offer the link, and
// admins reset passwords from the Users tab instead.
// ---------------------------------------------------------------
function mailerConfigured(){ return !!process.env.SMTP_HOST; }
function getMailer(){
  const nodemailer = require('nodemailer');
  const port = Number(process.env.SMTP_PORT || 587);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined
  });
}

app.post('/api/forgot-password', wrapEarly(async (req, res) => {
  if (!mailerConfigured()) {
    return res.status(503).json({ error: 'استعادة كلمة المرور عبر البريد غير مفعّلة — تواصل مع المشرف ليعيد تعيينها لك.' });
  }
  const un = String((req.body || {}).username || '').trim();
  // Always answer the same way, so usernames can't be probed.
  const generic = { ok: true, message: 'إن وُجد حساب بهذا الاسم وله بريد مسجل، فسيصله رابط إعادة التعيين خلال دقائق.' };
  const { rows } = await pool.query('SELECT id, email, display_name FROM users WHERE username = $1', [un]);
  const u = rows[0];
  if (!u || !u.email) return res.json(generic);
  const token = crypto.randomBytes(32).toString('hex');
  await pool.query(
    `INSERT INTO password_resets (token, user_id, expires_at)
     VALUES ($1, $2, NOW() + INTERVAL '1 hour')`, [token, u.id]);
  const base = process.env.APP_URL || (req.headers['x-forwarded-proto'] || 'https') + '://' + req.headers.host;
  const link = base.replace(/\/+$/, '') + '/?reset=' + token;
  try {
    await getMailer().sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: u.email,
      subject: 'إعادة تعيين كلمة المرور — إدارة استقطاب الكفاءات',
      text: 'مرحبًا ' + u.display_name + '،\n\n' +
        'وصلنا طلب لإعادة تعيين كلمة مرورك. افتح الرابط التالي (صالح لمدة ساعة واحدة):\n\n' +
        link + '\n\n' +
        'إن لم تطلب ذلك فتجاهل هذه الرسالة ولن يتغير شيء.'
    });
  } catch (e) {
    console.error('password-reset email failed:', e.message);
    return res.status(500).json({ error: 'تعذّر إرسال البريد — تحقق من إعدادات SMTP أو تواصل مع المشرف.' });
  }
  res.json(generic);
}));

app.post('/api/reset-password', wrapEarly(async (req, res) => {
  const { token, newPassword } = req.body || {};
  if (!newPassword || String(newPassword).length < 8) {
    return res.status(400).json({ error: 'كلمة المرور الجديدة يجب ألا تقل عن 8 أحرف' });
  }
  const { rows } = await pool.query(
    `SELECT r.token, r.user_id, u.display_name FROM password_resets r
     JOIN users u ON u.id = r.user_id
     WHERE r.token = $1 AND r.used = FALSE AND r.expires_at > NOW()`, [String(token || '')]);
  if (!rows.length) return res.status(400).json({ error: 'الرابط غير صالح أو منتهي الصلاحية — اطلب رابطًا جديدًا.' });
  await pool.query('UPDATE users SET password_hash = $2 WHERE id = $1',
    [rows[0].user_id, hashPassword(String(newPassword))]);
  await pool.query('UPDATE password_resets SET used = TRUE WHERE token = $1', [rows[0].token]);
  await pool.query('DELETE FROM sessions WHERE user_id = $1', [rows[0].user_id]);
  await audit(pool, rows[0].display_name, 'إعادة تعيين كلمة المرور (عبر البريد)', null, null, null);
  res.json({ ok: true });
}));

// ---------------------------------------------------------------
// Public application endpoints — no login required. These power the
// "قدّم الآن" page on the landing screen; submissions become
// candidates in the same database the team already works in.
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// CV-derived fields for exports: LinkedIn URL, experience estimate,
// and a heuristic summary of previous employers. All read straight
// from the stored résumé text at export time — no migration needed.
// ---------------------------------------------------------------
function arabicDigitsToLatin(s){
  return String(s || '').replace(/[\u0660-\u0669]/g, d => String(d.charCodeAt(0) - 0x0660));
}
function extractLinkedIn(text){
  const m = String(text || '').match(/(?:https?:\/\/)?(?:[a-z]{2,3}\.)?linkedin\.com\/(?:in|pub|company)\/[A-Za-z0-9\-_%.]+/i);
  if (!m) return '';
  return m[0].startsWith('http') ? m[0] : 'https://' + m[0];
}
function estimateExperienceYears(text){
  const t = arabicDigitsToLatin(text);
  let best = 0;
  const pats = [
    /(\d{1,2})\s*\+?\s*(?:years?|yrs?)\s+(?:of\s+)?experience/gi,
    /experience\s*[:\-]?\s*(\d{1,2})\s*\+?\s*(?:years?|yrs?)/gi,
    /خبرة\s*(?:عملية\s*)?(?:لا تقل عن|أكثر من|تزيد عن|تفوق)?\s*(\d{1,2})\s*(?:سنة|سنوات|عام|أعوام)/g,
    /(\d{1,2})\s*(?:سنة|سنوات|عام|أعوام)\s*(?:من\s*)?(?:الخبرة|خبرة)/g
  ];
  for (const p of pats) { let m; while ((m = p.exec(t))) best = Math.max(best, Number(m[1]) || 0); }
  return Math.min(best, 45);
}
function extractEmployers(text){
  const t = String(text || '');
  const found = [];
  const seen = new Set();
  const push = (name) => {
    const clean = name.trim().replace(/\s+/g, ' ').replace(/[.،,;:]+$/, '');
    if (clean.length < 3 || clean.length > 60) return;
    const key = clean.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key); found.push(clean);
  };
  // Education context is detected just BEHIND the mention (e.g.
  // "بكالوريوس من جامعة X") — looking far ahead would wrongly swallow
  // employers that merely precede an education line.
  const eduNear = (idx) => {
    const behind = t.slice(Math.max(0, idx - 45), idx + 10);
    return /بكالوريوس|ماجستير|دكتوراه|دبلوم|درجة|تخرج|Bachelor|Master|PhD|Degree|GPA|المعدل/i.test(behind);
  };
  let m;
  const ar = /(?:شركة|مؤسسة|مجموعة|بنك|مستشفى|هيئة|وزارة|مصنع|مركز|مدينة)\s+([^\n،,.؛:()\-]{2,45})/g;
  while ((m = ar.exec(t))) { if (!eduNear(m.index)) push(m[0]); }
  const arUni = /جامعة\s+([^\n،,.؛:()\-]{2,40})/g;
  while ((m = arUni.exec(t))) { if (!eduNear(m.index)) push(m[0]); }
  const enAt = /\b(?:at|with)\s+([A-Z][A-Za-z0-9&.'\-]*(?:\s+[A-Z][A-Za-z0-9&.'\-]*){0,4})/g;
  while ((m = enAt.exec(t))) { if (!eduNear(m.index)) push(m[1]); }
  const enSuffix = /^\s*([A-Z][A-Za-z0-9&.'\- ]{2,50}?\s(?:Inc|LLC|Ltd|Co|Corp|Company|Group|Bank|Hospital|Solutions|Technologies)\.?)\s*$/gm;
  while ((m = enSuffix.exec(t))) push(m[1]);
  return found.slice(0, 6).join('، ');
}

// ---------------------------------------------------------------
// JD ↔ CV matching engine. Scores a candidate against a job using
// required skills (weight 3), nice-to-have skills (1.5), and the
// significant words of the title/department/description (1 each).
// Used by: auto-categorizing external applications, and the ranked
// matches endpoint below.
// ---------------------------------------------------------------
const MATCH_STOP = new Set(('في من على إلى عن مع هذا هذه ذلك التي الذي أن إن كان كما لدى بعد قبل عند أو ثم لا ما هو هي نحن خبرة سنوات سنة العمل عمل شركة قسم إدارة and or the of in to with for a an on at is are be we you will can all any'
).split(' '));
// Normalize Arabic tokens: strip leading conjunctions (و/ف) and the
// definite article (ال), unify hamza forms and ta-marbuta — so
// "والتوظيف" matches "توظيف".
function normalizeArabic(w){
  let x = String(w).replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
  if (x.length > 3 && (x[0] === 'و' || x[0] === 'ف')) x = x.slice(1);
  if (x.length > 4 && x.startsWith('ال')) x = x.slice(2);
  if (x.length > 4 && x.startsWith('لل')) x = x.slice(2);
  return x;
}
function significantWords(text){
  return [...new Set(String(text || '').toLowerCase()
    .replace(/[^\u0600-\u06FFa-z0-9+#\s]/g, ' ')
    .split(/\s+/)
    .map(normalizeArabic)
    .filter(w => w.length > 2 && !MATCH_STOP.has(w)))];
}
function jobKeywords(jobRow){
  // The job TITLE's words are separated out and weighted double:
  // finding them anywhere in the CV — current role OR past job
  // history — is the strongest signal after explicit skills.
  const titleWords = significantWords(jobRow.title);
  return {
    req:  (jobRow.required_skills || []).map(s => String(s).toLowerCase()).filter(Boolean),
    nice: (jobRow.nice_skills || []).map(s => String(s).toLowerCase()).filter(Boolean),
    titleWords,
    text: significantWords((jobRow.department || '') + ' ' + (jobRow.description || ''))
      .filter(w => !titleWords.includes(w)).slice(0, 30)
  };
}
function scoreCandidateForJob(jk, cand){
  const raw = ((cand.skills || []).join(' ') + ' ' + (cand.current_title || '') + ' ' +
    (cand.specialization || '') + ' ' + (cand.degree || '') + ' ' + (cand.resume_text || ''))
    .toLowerCase();
  if (!raw.trim()) return 0;
  const tokens = new Set(significantWords(raw));
  let score = 0, max = 0;
  // skills: substring match on raw text (handles multi-word / English)
  jk.req.forEach(s => { max += 3;   if (raw.includes(s)) score += 3; });
  jk.nice.forEach(s => { max += 1.5; if (raw.includes(s)) score += 1.5; });
  // job-title words ×2 — the whole CV counts, so past roles in the
  // employment history score just like the current title does
  (jk.titleWords || []).forEach(w => { max += 2; if (tokens.has(w) || raw.includes(w)) score += 2; });
  // remaining JD words: normalized-token match (handles Arabic prefixes)
  jk.text.forEach(w => { max += 1;   if (tokens.has(w) || raw.includes(w)) score += 1; });
  return max ? Math.round(100 * score / max) : 0;
}

// The canonical candidate set for a job everywhere in the platform:
// manually linked (applied_for) PLUS anyone matching the JD at ≥40%.
// Used by the pipeline, the assessments tab, and the rankings.
async function candidateIdsForJob(jobId){
  const jr = await pool.query('SELECT * FROM jobs WHERE id = $1', [jobId]);
  if (!jr.rows.length) return [];
  const jk = jobKeywords(jr.rows[0]);
  const { rows } = await pool.query(`
    SELECT id, applied_for, skills, current_title, specialization, degree, resume_text
    FROM candidates`);
  return rows
    .filter(r => r.applied_for === jobId || scoreCandidateForJob(jk, r) >= 40)
    .map(r => r.id);
}

// Ranked matches: every CV in the database scored against one job's
// JD, highest first — no need to attach CVs to the job manually.
app.get('/api/jobs/:id/matches', wrap(async (req, res) => {
  const jr = await pool.query('SELECT * FROM jobs WHERE id = $1', [req.params.id]);
  if (!jr.rows.length) return res.status(404).json({ error: 'job not found' });
  const jk = jobKeywords(jr.rows[0]);
  const { rows } = await pool.query(`
    SELECT id, name, email, phone, current_title, source, experience_years, applied_for,
           skills, stage, specialization, degree, city, resume_text
    FROM candidates`);
  // Quality bar: below 40% the candidate is noise for this JD and is
  // hidden — UNLESS the recruiter manually linked them to the job,
  // in which case they always appear (marked as linked).
  const MATCH_MIN = 40;
  const scored = rows.map(r => {
    const pct = scoreCandidateForJob(jk, r);
    const c = rowToCandidate({ ...r, resume_text: null });
    c.matchPercent = pct;
    c.linkedToJob = (r.applied_for === req.params.id);
    return c;
  }).filter(c => c.matchPercent >= MATCH_MIN || c.linkedToJob)
    .sort((a, b) => b.matchPercent - a.matchPercent).slice(0, 200);
  res.json({ jobTitle: jr.rows[0].title, matches: scored, minMatch: MATCH_MIN });
}));

// Blunt per-IP throttle so the open endpoint can't be flooded.
const applyHits = new Map();
function applyAllowed(ip){
  const now = Date.now();
  const hits = (applyHits.get(ip) || []).filter(t => now - t < 3600000);
  if (hits.length >= 5) return false;
  hits.push(now);
  applyHits.set(ip, hits);
  if (applyHits.size > 5000) applyHits.clear(); // memory guard
  return true;
}

app.get('/api/public/jobs', wrapEarly(async (req, res) => {
  const { rows } = await pool.query(
    `SELECT id, title, department FROM jobs WHERE approved = TRUE ORDER BY created_at DESC`);
  res.json(rows.map(r => ({ id: r.id, title: r.title, department: r.department || '' })));
}));

app.post('/api/public/apply', wrapEarly(async (req, res) => {
  const ip = req.headers['cf-connecting-ip']
    || req.headers['x-forwarded-for']?.split(',')[0]?.trim()
    || req.socket.remoteAddress || '?';
  if (!applyAllowed(ip)) {
    return res.status(429).json({ error: 'تم استلام عدة طلبات من جهازك — حاول مجددًا بعد ساعة.' });
  }
  const b = req.body || {};
  const name = String(b.name || '').trim().slice(0, 120);
  const email = String(b.email || '').trim().toLowerCase().slice(0, 160);
  if (!name || name.length < 3) return res.status(400).json({ error: 'الاسم الكامل مطلوب' });
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'بريد إلكتروني صحيح مطلوب' });
  }
  const clean = (x, n) => String(x || '').trim().slice(0, n) || null;
  const cand = {
    phone: clean(b.phone, 40),
    date_of_birth: clean(b.dateOfBirth, 20),
    specialization: clean(b.specialization, 120),
    degree: clean(b.degree, 60),
    city: clean(b.city, 80),
    address: clean(b.address, 240),
    current_salary: clean(b.currentSalary, 40),
    current_title: clean(b.currentTitle, 120),
    experience_years: Math.max(0, Math.min(45, Number(b.experienceYears) || 0)),
    skills: Array.isArray(b.skills) ? b.skills.slice(0, 40).map(s => String(s).slice(0, 40)) : [],
    resume_text: String(b.resumeText || '').slice(0, 200000) || null
  };

  // Auto-categorize: score this application against every approved
  // job's JD. A strong match (≥45%) files it under that job; anything
  // weaker stays in the general external pool.
  let matchedJob = null, matchedPct = 0;
  const jobsRes = await pool.query('SELECT * FROM jobs WHERE approved = TRUE');
  for (const j of jobsRes.rows) {
    const pct = scoreCandidateForJob(jobKeywords(j), cand);
    if (pct > matchedPct) { matchedPct = pct; matchedJob = j; }
  }
  const appliedFor = (matchedJob && matchedPct >= 45) ? matchedJob.id : null;

  const id = uid('cand');
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query(
      `INSERT INTO candidates (id,name,email,phone,current_title,source,experience_years,
        applied_for,skills,resume_text,stage,has_original_file,resume_file_name,resume_file_type,
        date_of_birth,specialization,degree,city,address,current_salary)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)`,
      [id, name, email, cand.phone, cand.current_title,
       'تقديم خارجي',
       cand.experience_years, appliedFor, cand.skills, cand.resume_text,
       'الفرز', !!b.fileBase64,
       b.resumeFileName ? String(b.resumeFileName).slice(0, 200) : null,
       b.resumeFileType ? String(b.resumeFileType).slice(0, 10) : null,
       cand.date_of_birth, cand.specialization, cand.degree, cand.city, cand.address, cand.current_salary]);
    await client.query('INSERT INTO stage_history (candidate_id,stage) VALUES ($1,$2)', [id, 'الفرز']);
    if (b.fileBase64) {
      const bytes = Buffer.from(String(b.fileBase64), 'base64');
      if (bytes.length > 10 * 1024 * 1024) { throw Object.assign(new Error('file too large'), { pub: 'حجم الملف يتجاوز 10MB' }); }
      await client.query(
        'INSERT INTO resume_files (candidate_id,file_name,mime_type,bytes) VALUES ($1,$2,$3,$4)',
        [id, b.resumeFileName || null, b.mimeType || 'application/octet-stream', bytes]);
    }
    await audit(client, 'نظام التقديم الخارجي', 'تقديم طلب توظيف', id, name,
      appliedFor ? `مطابقة تلقائية مع وظيفة: ${matchedJob.title} (${matchedPct}%)` : 'تقديم عام — لم تتجاوز المطابقة حد الإسناد التلقائي');
    await client.query('COMMIT');
    res.json({ ok: true });
  } catch (e) {
    await client.query('ROLLBACK');
    if (e.pub) return res.status(400).json({ error: e.pub });
    throw e;
  } finally { client.release(); }
}));

// ---------------------------------------------------------------
// Session + account endpoints
// ---------------------------------------------------------------
app.get('/api/me', wrap(async (req, res) => {
  const { rows } = await pool.query('SELECT totp_enabled FROM users WHERE id = $1', [req.user.id]);
  res.json({ username: req.user.username, displayName: req.user.displayName,
    isAdmin: req.user.isAdmin, totpEnabled: !!(rows[0] && rows[0].totp_enabled) });
}));

app.post('/api/logout', wrap(async (req, res) => {
  const token = parseCookies(req)[SESSION_COOKIE];
  if (token) await pool.query('DELETE FROM sessions WHERE token = $1', [token]);
  setSessionCookie(req, res, '', 0);
  res.json({ ok: true });
}));

app.post('/api/change-password', wrap(async (req, res) => {
  const { currentPassword, newPassword } = req.body || {};
  if (!newPassword || String(newPassword).length < 8) {
    return res.status(400).json({ error: 'كلمة المرور الجديدة يجب ألا تقل عن 8 أحرف' });
  }
  const { rows } = await pool.query('SELECT password_hash FROM users WHERE id = $1', [req.user.id]);
  if (!rows.length || !verifyPassword(String(currentPassword || ''), rows[0].password_hash)) {
    return res.status(401).json({ error: 'كلمة المرور الحالية غير صحيحة' });
  }
  await pool.query('UPDATE users SET password_hash = $2 WHERE id = $1',
    [req.user.id, hashPassword(String(newPassword))]);
  await audit(pool, req.user.displayName, 'تغيير كلمة المرور', null, null, null);
  res.json({ ok: true });
}));

// ---- Two-factor authentication (per-account) ----
// Setup: generate a fresh secret (pending until verified).
app.post('/api/2fa/setup', wrap(async (req, res) => {
  const secret = base32Encode(crypto.randomBytes(20));
  await pool.query('UPDATE users SET totp_secret = $2, totp_enabled = FALSE WHERE id = $1',
    [req.user.id, secret]);
  const label = encodeURIComponent('إدارة استقطاب الكفاءات:' + req.user.username);
  res.json({ secret,
    otpauth: `otpauth://totp/${label}?secret=${secret}&issuer=${encodeURIComponent('KACST-TAD')}&digits=6&period=30` });
}));

// Confirm with a live code from the authenticator app → 2FA is ON.
app.post('/api/2fa/verify', wrap(async (req, res) => {
  const { rows } = await pool.query('SELECT totp_secret FROM users WHERE id = $1', [req.user.id]);
  if (!rows.length || !rows[0].totp_secret) return res.status(400).json({ error: 'ابدأ الإعداد أولًا' });
  if (!verifyTotp(rows[0].totp_secret, (req.body || {}).code)) {
    return res.status(401).json({ error: 'الرمز غير صحيح — جرّب الرمز الحالي في التطبيق' });
  }
  await pool.query('UPDATE users SET totp_enabled = TRUE WHERE id = $1', [req.user.id]);
  await audit(pool, req.user.displayName, 'تفعيل المصادقة الثنائية', null, null, null);
  res.json({ ok: true });
}));

// Disable requires the account password.
app.post('/api/2fa/disable', wrap(async (req, res) => {
  const { rows } = await pool.query('SELECT password_hash FROM users WHERE id = $1', [req.user.id]);
  if (!rows.length || !verifyPassword(String((req.body || {}).password || ''), rows[0].password_hash)) {
    return res.status(401).json({ error: 'كلمة المرور غير صحيحة' });
  }
  await pool.query('UPDATE users SET totp_secret = NULL, totp_enabled = FALSE WHERE id = $1', [req.user.id]);
  await audit(pool, req.user.displayName, 'تعطيل المصادقة الثنائية', null, null, null);
  res.json({ ok: true });
}));

// User management — admin only.
app.get('/api/users', wrap(async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ error: 'admin only' });
  const { rows } = await pool.query(
    'SELECT id, username, display_name, email, is_admin, created_at FROM users ORDER BY created_at');
  res.json(rows.map(r => ({ id: r.id, username: r.username, displayName: r.display_name,
    email: r.email || '', isAdmin: r.is_admin, createdAt: r.created_at })));
}));

app.post('/api/users', wrap(async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ error: 'admin only' });
  const { username, displayName, password, isAdmin } = req.body || {};
  const un = String(username || '').trim();
  if (!un || !/^[a-zA-Z0-9._-]{3,30}$/.test(un)) {
    return res.status(400).json({ error: 'اسم المستخدم: 3–30 حرفًا لاتينيًا أو أرقام أو . _ -' });
  }
  if (!password || String(password).length < 8) {
    return res.status(400).json({ error: 'كلمة المرور يجب ألا تقل عن 8 أحرف' });
  }
  const dup = await pool.query('SELECT 1 FROM users WHERE username = $1', [un]);
  if (dup.rows.length) return res.status(409).json({ error: 'اسم المستخدم مستخدم بالفعل' });
  const id = uid('usr');
  const email = String((req.body || {}).email || '').trim().toLowerCase() || null;
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'صيغة البريد الإلكتروني غير صحيحة' });
  }
  await pool.query(
    'INSERT INTO users (id, username, display_name, email, password_hash, is_admin) VALUES ($1,$2,$3,$4,$5,$6)',
    [id, un, String(displayName || un).trim().slice(0, 60), email, hashPassword(String(password)), !!isAdmin]);
  await audit(pool, req.user.displayName, 'إضافة مستخدم', null, null, un + (isAdmin ? ' (مشرف)' : ''));
  res.json({ id });
}));

app.delete('/api/users/:id', wrap(async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ error: 'admin only' });
  if (req.params.id === req.user.id) return res.status(400).json({ error: 'لا يمكنك حذف حسابك الحالي' });
  const nm = await pool.query('SELECT username FROM users WHERE id = $1', [req.params.id]);
  await pool.query('DELETE FROM users WHERE id = $1', [req.params.id]);
  if (nm.rows[0]) await audit(pool, req.user.displayName, 'حذف مستخدم', null, null, nm.rows[0].username);
  res.json({ deleted: true });
}));

// ---------------------------------------------------------------
// Jobs
// ---------------------------------------------------------------
app.get('/api/jobs', wrap(async (req, res) => {
  const { rows } = await pool.query(`
    SELECT j.*,
      (SELECT COUNT(*) FROM candidates c WHERE c.applied_for = j.id) AS candidate_count,
      (SELECT COUNT(*) FROM candidates c WHERE c.applied_for = j.id AND c.stage = 'تم التعيين') AS hired_count
    FROM jobs j ORDER BY j.created_at DESC`);
  res.json(rows.map(rowToJob));
}));

app.post('/api/jobs', wrap(async (req, res) => {
  const b = req.body || {};
  if (!b.title) return res.status(400).json({ error: 'title is required' });
  const id = uid('job');
  await pool.query(
    `INSERT INTO jobs (id,title,department,seniority,headcount,post_date,approved,required_skills,nice_skills,description)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
    [id, b.title, b.department || null, b.seniority || null,
     Math.max(1, Number(b.headcount) || 1), b.postDate || null,
     b.approved !== false, b.requiredSkills || [], b.niceSkills || [], b.description || null]);
  await audit(pool, getActor(req), 'إضافة وظيفة', null, null, b.title);
  res.json({ id });
}));

app.delete('/api/jobs/:id', wrap(async (req, res) => {
  const jt = await pool.query('SELECT title FROM jobs WHERE id=$1', [req.params.id]);
  await pool.query('DELETE FROM jobs WHERE id=$1', [req.params.id]);
  await audit(pool, getActor(req), 'حذف وظيفة', null, null,
    jt.rows[0] ? jt.rows[0].title : null);
  res.json({ deleted: true });
}));

// ---------------------------------------------------------------
// Candidates — paginated + searched server-side. This is the key
// scalability difference: the browser never loads the full table.
// ---------------------------------------------------------------
app.get('/api/candidates', wrap(async (req, res) => {
  const limit = Math.min(200, Math.max(1, Number(req.query.limit) || 50));
  const offset = Math.max(0, Number(req.query.offset) || 0);
  const where = [];
  const params = [];

  if (req.query.job && req.query.job !== 'الكل') {
    params.push(req.query.job); where.push(`c.applied_for = $${params.length}`);
  }
  if (req.query.stage && req.query.stage !== 'الكل') {
    params.push(req.query.stage); where.push(`c.stage = $${params.length}`);
  }
  if (req.query.altJob) {
    params.push(req.query.altJob); where.push(`c.alternative_job_id = $${params.length}`);
  }
  if (req.query.q) {
    params.push('%' + req.query.q + '%');
    where.push(`(c.name ILIKE $${params.length} OR c.resume_text ILIKE $${params.length}
                 OR c.current_title ILIKE $${params.length}
                 OR c.specialization ILIKE $${params.length}
                 OR array_to_string(c.skills,' ') ILIKE $${params.length})`);
  }
  const whereSql = where.length ? 'WHERE ' + where.join(' AND ') : '';

  const countQ = await pool.query(`SELECT COUNT(*) FROM candidates c ${whereSql}`, params);
  const total = Number(countQ.rows[0].count);

  params.push(limit); params.push(offset);
  const { rows } = await pool.query(`
    SELECT c.*,
      (SELECT COUNT(*) FROM assessments a WHERE a.candidate_id=c.id) AS assess_count,
      (SELECT ROUND(AVG(a.score),1) FROM assessments a WHERE a.candidate_id=c.id) AS assess_avg,
      (SELECT MAX(a.score) FROM assessments a WHERE a.candidate_id=c.id) AS assess_max
    FROM candidates c ${whereSql}
    ORDER BY c.created_at DESC
    LIMIT $${params.length - 1} OFFSET $${params.length}`, params);

  res.json({ total, limit, offset, candidates: rows.map(rowToCandidate) });
}));

app.get('/api/candidates/:id', wrap(async (req, res) => {
  const { rows } = await pool.query(`
    SELECT c.*,
      (SELECT COUNT(*) FROM assessments a WHERE a.candidate_id=c.id) AS assess_count,
      (SELECT ROUND(AVG(a.score),1) FROM assessments a WHERE a.candidate_id=c.id) AS assess_avg,
      (SELECT MAX(a.score) FROM assessments a WHERE a.candidate_id=c.id) AS assess_max
    FROM candidates c WHERE c.id=$1`, [req.params.id]);
  if (!rows.length) return res.status(404).json({ error: 'not found' });
  const cand = rowToCandidate(rows[0]);
  const hist = await pool.query(
    'SELECT stage, changed_at FROM stage_history WHERE candidate_id=$1 ORDER BY changed_at', [req.params.id]);
  cand.stageHistory = hist.rows.map(h => ({ stage: h.stage, at: new Date(h.changed_at).getTime() }));
  const asmts = await pool.query(
    `SELECT id, type, score, signature, notes, assessed_at, file_name,
            (file_bytes IS NOT NULL) AS has_file
     FROM assessments WHERE candidate_id=$1 ORDER BY assessed_at DESC`, [req.params.id]);
  cand.assessments = asmts.rows.map(a => ({
    id: a.id, type: a.type, score: Number(a.score), signature: a.signature || '',
    notes: a.notes || '', date: new Date(a.assessed_at).getTime(),
    hasFile: a.has_file, fileName: a.file_name || ''
  }));
  res.json(cand);
}));

app.post('/api/candidates', wrap(async (req, res) => {
  const b = req.body || {};
  if (!b.name) return res.status(400).json({ error: 'name is required' });
  const id = uid('cand');
  const stage = b.stage || 'الفرز';
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query(
      `INSERT INTO candidates (id,name,email,phone,current_title,source,experience_years,
        applied_for,skills,resume_text,stage,has_original_file,resume_file_name,resume_file_type,
        specialization,degree,city)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)`,
      [id, b.name, b.email || null, b.phone || null, b.currentTitle || null,
       b.source || null, Number(b.experienceYears) || 0, b.appliedFor || null,
       b.skills || [], b.resumeText || null, stage,
       !!b.fileBase64, b.resumeFileName || null, b.resumeFileType || null,
       b.specialization || null, b.degree || null, b.city || null]);
    await client.query('INSERT INTO stage_history (candidate_id,stage) VALUES ($1,$2)', [id, stage]);
    await audit(client, getActor(req), 'إضافة مرشح', id, b.name,
      b.fileBase64 ? 'مع ملف سيرة ذاتية' : null);
    if (b.fileBase64) {
      await client.query(
        'INSERT INTO resume_files (candidate_id,file_name,mime_type,bytes) VALUES ($1,$2,$3,$4)',
        [id, b.resumeFileName || null, b.mimeType || 'application/octet-stream',
         Buffer.from(b.fileBase64, 'base64')]);
    }
    await client.query('COMMIT');
    res.json({ id });
  } catch (e) { await client.query('ROLLBACK'); throw e; }
  finally { client.release(); }
}));

app.put('/api/candidates/:id', wrap(async (req, res) => {
  const b = req.body || {};
  await pool.query(
    `UPDATE candidates SET name=COALESCE($2,name), email=$3, phone=$4, current_title=$5,
       source=$6, experience_years=$7, applied_for=$8, skills=$9, resume_text=$10,
       specialization=$11, degree=$12, city=$13
     WHERE id=$1`,
    [req.params.id, b.name || null, b.email || null, b.phone || null, b.currentTitle || null,
     b.source || null, Number(b.experienceYears) || 0, b.appliedFor || null,
     b.skills || [], b.resumeText || null,
     b.specialization || null, b.degree || null, b.city || null]);
  await audit(pool, getActor(req), 'تعديل بيانات مرشح', req.params.id, b.name || null, null);
  res.json({ updated: true });
}));

// Stage change — one row updated, plus one history row appended.
app.post('/api/candidates/:id/stage', wrap(async (req, res) => {
  const { stage } = req.body || {};
  if (!stage) return res.status(400).json({ error: 'stage is required' });
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const cur = await client.query('SELECT stage FROM candidates WHERE id=$1', [req.params.id]);
    if (!cur.rows.length) { await client.query('ROLLBACK'); return res.status(404).json({ error: 'not found' }); }
    const currentStage = cur.rows[0].stage;
    // Entering the alt-vacancy pool remembers where the candidate was,
    // so toggling back off can restore it.
    let prev = null;
    if (stage === ALT_STAGE && currentStage !== ALT_STAGE) prev = currentStage;
    await client.query(
      `UPDATE candidates SET stage=$2, previous_stage=$3, stage_changed_at=NOW() WHERE id=$1`,
      [req.params.id, stage, prev]);
    await client.query('INSERT INTO stage_history (candidate_id,stage) VALUES ($1,$2)',
      [req.params.id, stage]);
    const nm = await client.query('SELECT name FROM candidates WHERE id=$1', [req.params.id]);
    await audit(client, getActor(req), 'نقل مرحلة', req.params.id,
      nm.rows[0] ? nm.rows[0].name : null, currentStage + ' ← ' + stage);
    await client.query('COMMIT');
    res.json({ stage });
  } catch (e) { await client.query('ROLLBACK'); throw e; }
  finally { client.release(); }
}));

app.post('/api/candidates/:id/alt-job', wrap(async (req, res) => {
  await pool.query('UPDATE candidates SET alternative_job_id=$2 WHERE id=$1',
    [req.params.id, req.body.alternativeJobId || null]);
  const jt = req.body.alternativeJobId
    ? await pool.query('SELECT title FROM jobs WHERE id=$1', [req.body.alternativeJobId]) : null;
  const nm = await pool.query('SELECT name FROM candidates WHERE id=$1', [req.params.id]);
  await audit(pool, getActor(req), 'تحديد وظيفة بديلة', req.params.id,
    nm.rows[0] ? nm.rows[0].name : null,
    jt && jt.rows[0] ? jt.rows[0].title : 'إلغاء التحديد');
  res.json({ updated: true });
}));

app.delete('/api/candidates/:id', wrap(async (req, res) => {
  // stage_history, assessments and resume_files cascade automatically;
  // the audit entry's candidate_id becomes NULL but keeps the name.
  const nm = await pool.query('SELECT name FROM candidates WHERE id=$1', [req.params.id]);
  await pool.query('DELETE FROM candidates WHERE id=$1', [req.params.id]);
  await audit(pool, getActor(req), 'حذف مرشح', null,
    nm.rows[0] ? nm.rows[0].name : null, null);
  res.json({ deleted: true });
}));

// Résumé file download — streamed straight from the DB as the
// original file, not the extracted text.
app.get('/api/candidates/:id/resume-file', wrap(async (req, res) => {
  const { rows } = await pool.query(
    'SELECT file_name, mime_type, bytes FROM resume_files WHERE candidate_id=$1', [req.params.id]);
  if (!rows.length) return res.status(404).json({ error: 'no file on record' });
  const f = rows[0];
  res.setHeader('Content-Type', f.mime_type || 'application/octet-stream');
  res.setHeader('Content-Disposition',
    'attachment; filename*=UTF-8\'\'' + encodeURIComponent(f.file_name || 'resume'));
  res.send(f.bytes);
}));

// ---------------------------------------------------------------
// Assessments
// ---------------------------------------------------------------
app.get('/api/assessments', wrap(async (req, res) => {
  const params = [];
  let where = '';
  if (req.query.job && req.query.job !== 'الكل') {
    params.push(await candidateIdsForJob(req.query.job));
    where = `WHERE c.id = ANY($${params.length})`;
  }
  const limit = Math.min(500, Math.max(1, Number(req.query.limit) || 100));
  params.push(limit);
  const { rows } = await pool.query(`
    SELECT a.id, a.candidate_id, a.type, a.score, a.signature, a.notes, a.assessed_at,
           a.file_name, (a.file_bytes IS NOT NULL) AS has_file,
           c.name AS candidate_name
    FROM assessments a JOIN candidates c ON c.id = a.candidate_id
    ${where} ORDER BY a.assessed_at DESC LIMIT $${params.length}`, params);
  res.json(rows.map(a => ({
    id: a.id, candidateId: a.candidate_id, candidateName: a.candidate_name,
    type: a.type, score: Number(a.score), signature: a.signature || '',
    notes: a.notes || '', date: new Date(a.assessed_at).getTime(),
    hasFile: a.has_file, fileName: a.file_name || ''
  })));
}));

app.post('/api/assessments', wrap(async (req, res) => {
  const b = req.body || {};
  if (!b.candidateId) return res.status(400).json({ error: 'candidateId is required' });
  // The assessment file is stored exactly as uploaded — no text
  // extraction; the score is entered manually.
  let fileBytes = null;
  if (b.fileBase64) {
    fileBytes = Buffer.from(String(b.fileBase64), 'base64');
    if (fileBytes.length > 10 * 1024 * 1024) {
      return res.status(400).json({ error: 'حجم ملف التقييم يتجاوز 10MB' });
    }
  }
  const id = uid('as');
  await pool.query(
    `INSERT INTO assessments (id,candidate_id,type,score,signature,notes,file_name,mime_type,file_bytes)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
    [id, b.candidateId, b.type || 'تقييم',
     Math.max(0, Math.min(30, Number(b.score) || 0)), b.signature || null, b.notes || null,
     fileBytes ? (b.fileName ? String(b.fileName).slice(0, 200) : null) : null,
     fileBytes ? (b.mimeType || 'application/octet-stream') : null,
     fileBytes]);
  const nm = await pool.query('SELECT name FROM candidates WHERE id=$1', [b.candidateId]);
  await audit(pool, getActor(req), 'إضافة تقييم', b.candidateId,
    nm.rows[0] ? nm.rows[0].name : null,
    'الدرجة ' + Math.max(0, Math.min(30, Number(b.score) || 0)) + '/30');
  res.json({ id });
}));

// Download an assessment file exactly as it was uploaded.
app.get('/api/assessments/:id/file', wrap(async (req, res) => {
  const { rows } = await pool.query(
    `SELECT a.file_name, a.mime_type, a.file_bytes, c.name
     FROM assessments a JOIN candidates c ON c.id = a.candidate_id
     WHERE a.id = $1`, [req.params.id]);
  if (!rows.length || !rows[0].file_bytes) {
    return res.status(404).json({ error: 'لا يوجد ملف مرفق لهذا التقييم' });
  }
  const r = rows[0];
  const fname = r.file_name || ('تقييم - ' + (r.name || 'مرشح'));
  res.setHeader('Content-Type', r.mime_type || 'application/octet-stream');
  res.setHeader('Content-Disposition', `attachment; filename*=UTF-8''` + encodeURIComponent(fname));
  res.send(r.file_bytes);
}));

app.delete('/api/assessments/:id', wrap(async (req, res) => {
  const old = await pool.query(
    `SELECT a.candidate_id, c.name FROM assessments a
     LEFT JOIN candidates c ON c.id=a.candidate_id WHERE a.id=$1`, [req.params.id]);
  await pool.query('DELETE FROM assessments WHERE id=$1', [req.params.id]);
  if (old.rows[0]) await audit(pool, getActor(req), 'حذف تقييم',
    old.rows[0].candidate_id, old.rows[0].name, null);
  res.json({ deleted: true });
}));

// Ranked candidates by assessment score — computed in SQL so it
// stays fast regardless of how many candidates exist.
app.get('/api/rankings', wrap(async (req, res) => {
  const params = [];
  let where = 'WHERE EXISTS (SELECT 1 FROM assessments a WHERE a.candidate_id=c.id)';
  if (req.query.job && req.query.job !== 'الكل') {
    params.push(await candidateIdsForJob(req.query.job));
    where += ` AND c.id = ANY($${params.length})`;
  }
  const limit = Math.min(200, Math.max(1, Number(req.query.limit) || 50));
  params.push(limit);
  const { rows } = await pool.query(`
    SELECT c.id, c.name, c.stage, c.applied_for, j.title AS job_title,
      (SELECT COUNT(*) FROM assessments a WHERE a.candidate_id=c.id) AS assess_count,
      (SELECT ROUND(AVG(a.score),1) FROM assessments a WHERE a.candidate_id=c.id) AS assess_avg,
      (SELECT MAX(a.score) FROM assessments a WHERE a.candidate_id=c.id) AS assess_max
    FROM candidates c LEFT JOIN jobs j ON j.id = c.applied_for
    ${where}
    ORDER BY assess_max DESC NULLS LAST
    LIMIT $${params.length}`, params);
  res.json(rows.map(r => ({
    id: r.id, name: r.name, stage: r.stage, jobTitle: r.job_title,
    count: Number(r.assess_count), avg: r.assess_avg === null ? null : Number(r.assess_avg),
    highest: r.assess_max === null ? null : Number(r.assess_max)
  })));
}));

// ---------------------------------------------------------------
// KPIs — aggregated in SQL rather than by pulling every row down.
// ---------------------------------------------------------------
app.get('/api/kpis', wrap(async (req, res) => {
  const job = req.query.job && req.query.job !== 'الكل' ? req.query.job : null;
  const jobFilter = job ? 'WHERE applied_for = $1' : '';
  const p = job ? [job] : [];

  const totals = await pool.query(`
    SELECT COUNT(*) AS total,
      COUNT(*) FILTER (WHERE stage = 'تم التعيين') AS hired,
      COUNT(*) FILTER (WHERE stage NOT IN ('تم التعيين','مرفوض','${ALT_STAGE}')) AS in_pipe
    FROM candidates ${jobFilter}`, p);

  const tth = await pool.query(`
    SELECT AVG(EXTRACT(EPOCH FROM (hired_at - first_at))/86400) AS days FROM (
      SELECT candidate_id, MIN(changed_at) AS first_at,
             MAX(changed_at) FILTER (WHERE stage='تم التعيين') AS hired_at
      FROM stage_history GROUP BY candidate_id
    ) t JOIN candidates c ON c.id=t.candidate_id
    WHERE t.hired_at IS NOT NULL ${job ? 'AND c.applied_for = $1' : ''}`, p);

  const funnel = await pool.query(`
    SELECT
      COUNT(*) FILTER (WHERE reached_interview) AS interviewed,
      COUNT(*) FILTER (WHERE reached_offer)     AS offered,
      COUNT(*) FILTER (WHERE is_hired)          AS hired
    FROM (
      SELECT c.id,
        EXISTS(SELECT 1 FROM stage_history s WHERE s.candidate_id=c.id
               AND s.stage IN ('المقابلة','العرض الوظيفي','تم التعيين')) AS reached_interview,
        EXISTS(SELECT 1 FROM stage_history s WHERE s.candidate_id=c.id
               AND s.stage IN ('العرض الوظيفي','تم التعيين')) AS reached_offer,
        (c.stage='تم التعيين') AS is_hired
      FROM candidates c ${job ? 'WHERE c.applied_for = $1' : ''}
    ) x`, p);

  const src = await pool.query(`
    SELECT COALESCE(NULLIF(source,''),'غير محدد') AS source, COUNT(*) AS count
    FROM candidates WHERE stage='تم التعيين' ${job ? 'AND applied_for = $1' : ''}
    GROUP BY 1 ORDER BY count DESC`, p);

  const jobsAgg = await pool.query(`
    SELECT j.id, j.headcount, j.approved, j.post_date,
      (SELECT COUNT(*) FROM candidates c WHERE c.applied_for=j.id AND c.stage='تم التعيين') AS hired
    FROM jobs j ${job ? 'WHERE j.id = $1' : ''}`, p);

  let totalHeadcount = 0, totalFilled = 0, approvedCount = 0, filledJobs = 0, vacancyDays = 0;
  jobsAgg.rows.forEach(j => {
    const need = j.headcount || 1, hired = Number(j.hired);
    totalHeadcount += need; totalFilled += Math.min(hired, need);
    if (j.approved) { approvedCount++; if (hired >= need) filledJobs++; }
    if (j.post_date) vacancyDays += Math.max(0,
      Math.floor((Date.now() - new Date(j.post_date).getTime()) / 86400000));
  });

  const st = await pool.query('SELECT total_jobs_targeted FROM settings WHERE id=TRUE');
  const target = st.rows[0]?.total_jobs_targeted || 0;
  const f = funnel.rows[0];

  res.json({
    total: Number(totals.rows[0].total),
    hired: Number(totals.rows[0].hired),
    inPipe: Number(totals.rows[0].in_pipe),
    timeToHire: tth.rows[0].days === null ? null : Math.round(Number(tth.rows[0].days)),
    interviewToOfferRatio: Number(f.interviewed) ? Math.round(Number(f.offered) / Number(f.interviewed) * 100) : null,
    offerToJoinRatio: Number(f.offered) ? Math.round(Number(f.hired) / Number(f.offered) * 100) : null,
    vacancyFillRate: totalHeadcount ? Math.round(totalFilled / totalHeadcount * 100) : null,
    jobsFilledApprovedRate: approvedCount ? Math.round(filledJobs / approvedCount * 100) : null,
    totalVacancyDays: vacancyDays,
    vacancyDaysPerTarget: target > 0 ? Math.round(vacancyDays / target * 10) / 10 : null,
    sourceBreakdown: src.rows.map(r => ({ source: r.source, count: Number(r.count) }))
  });
}));

// ---------------------------------------------------------------
// Insights — the "smart" layer. Each signal is a plain SQL check the
// team would otherwise have to notice by eye: stalled candidates,
// probable duplicates, starved or overdue jobs, hires missing
// assessments, and waiting-pool candidates who fit a live vacancy.
// ---------------------------------------------------------------
app.get('/api/insights', wrap(async (req, res) => {
  const out = [];

  // 1) Candidates stuck >14 days in an active stage
  const stale = await pool.query(`
    SELECT c.id, c.name, c.stage,
           FLOOR(EXTRACT(EPOCH FROM (NOW()-c.stage_changed_at))/86400) AS days
    FROM candidates c
    WHERE c.stage IN ('الفرز','المقابلة الهاتفية','المقابلة','العرض الوظيفي')
      AND c.stage_changed_at < NOW() - INTERVAL '14 days'
    ORDER BY c.stage_changed_at ASC LIMIT 8`);
  stale.rows.forEach(r => out.push({
    kind: 'stalled', severity: 'warn',
    title: 'مرشح متوقف منذ ' + r.days + ' يومًا',
    body: r.name + ' في مرحلة "' + r.stage + '" دون أي تحرك — يستحق متابعة.',
    candidateId: r.id
  }));

  // 2) Probable duplicate candidates (same email or phone)
  const dup = await pool.query(`
    SELECT LOWER(email) AS k, COUNT(*) AS n, ARRAY_AGG(name) AS names
    FROM candidates WHERE email IS NOT NULL AND email <> ''
    GROUP BY LOWER(email) HAVING COUNT(*) > 1
    UNION ALL
    SELECT phone AS k, COUNT(*) AS n, ARRAY_AGG(name) AS names
    FROM candidates WHERE phone IS NOT NULL AND phone <> ''
    GROUP BY phone HAVING COUNT(*) > 1
    LIMIT 6`);
  dup.rows.forEach(r => out.push({
    kind: 'duplicate', severity: 'warn',
    title: 'تكرار محتمل في قاعدة البيانات',
    body: 'نفس بيانات التواصل (' + r.k + ') مسجلة لأكثر من مرشح: ' + r.names.join('، ')
  }));

  // 3) Approved jobs with no candidates at all
  const starved = await pool.query(`
    SELECT j.id, j.title FROM jobs j
    WHERE j.approved = TRUE
      AND NOT EXISTS (SELECT 1 FROM candidates c WHERE c.applied_for = j.id)
    LIMIT 6`);
  starved.rows.forEach(r => out.push({
    kind: 'starved-job', severity: 'info',
    title: 'وظيفة بلا مرشحين',
    body: '"' + r.title + '" معتمدة ولا يوجد لها أي مرشح بعد — ابدأ الاستقطاب أو ارفع سيرًا ذاتية إليها.'
  }));

  // 4) Jobs open >45 days and still not fully hired
  const overdue = await pool.query(`
    SELECT j.id, j.title, FLOOR(EXTRACT(EPOCH FROM (NOW()-j.post_date::timestamptz))/86400) AS days,
      j.headcount,
      (SELECT COUNT(*) FROM candidates c WHERE c.applied_for=j.id AND c.stage='تم التعيين') AS hired
    FROM jobs j
    WHERE j.post_date IS NOT NULL AND j.post_date < (NOW() - INTERVAL '45 days')::date
    LIMIT 8`);
  overdue.rows.filter(r => Number(r.hired) < r.headcount).forEach(r => out.push({
    kind: 'overdue-job', severity: 'warn',
    title: 'شاغر مفتوح منذ ' + r.days + ' يومًا',
    body: '"' + r.title + '" شغل ' + r.hired + ' من ' + r.headcount + ' — قد يحتاج مراجعة قناة الاستقطاب أو متطلبات الوظيفة.'
  }));

  // 5) Candidates at interview or beyond with <3 assessments
  const unassessed = await pool.query(`
    SELECT c.id, c.name, c.stage,
      (SELECT COUNT(*) FROM assessments a WHERE a.candidate_id=c.id) AS n
    FROM candidates c
    WHERE c.stage IN ('المقابلة','العرض الوظيفي','تم التعيين')
      AND (SELECT COUNT(*) FROM assessments a WHERE a.candidate_id=c.id) < 3
    ORDER BY c.stage_changed_at DESC LIMIT 8`);
  unassessed.rows.forEach(r => out.push({
    kind: 'needs-assessment', severity: 'info',
    title: 'تقييمات ناقصة',
    body: r.name + ' في مرحلة "' + r.stage + '" ولديه ' + r.n + ' من 3 تقييمات موصى بها.',
    candidateId: r.id
  }));

  // 6) Waiting-pool candidates whose suggested job is approved and unfilled
  const altReady = await pool.query(`
    SELECT c.id, c.name, j.title,
      (SELECT MAX(a.score) FROM assessments a WHERE a.candidate_id=c.id) AS best
    FROM candidates c JOIN jobs j ON j.id = c.alternative_job_id
    WHERE c.stage = '${ALT_STAGE}' AND j.approved = TRUE
      AND (SELECT COUNT(*) FROM candidates x
           WHERE x.applied_for = j.id AND x.stage='تم التعيين') < j.headcount
    ORDER BY best DESC NULLS LAST LIMIT 6`);
  altReady.rows.forEach(r => out.push({
    kind: 'alt-match', severity: 'good',
    title: 'مرشح جاهز من قائمة الانتظار',
    body: r.name + (r.best !== null ? ' (أعلى تقييم ' + r.best + '/30)' : '') +
      ' مقترح لوظيفة "' + r.title + '" التي لا تزال شاغرة — يمكن تفعيله مباشرة.',
    candidateId: r.id
  }));

  res.json(out);
}));

// Pipeline board counts + cards, per stage.
app.get('/api/pipeline', wrap(async (req, res) => {
  const job = req.query.job && req.query.job !== 'الكل' ? req.query.job : null;
  if (!job) {
    const { rows } = await pool.query(`
      SELECT c.id, c.name, c.stage, c.stage_changed_at, j.title AS job_title
      FROM candidates c LEFT JOIN jobs j ON j.id=c.applied_for
      ORDER BY c.stage_changed_at DESC`);
    return res.json(rows.map(r => ({
      id: r.id, name: r.name, stage: r.stage, jobTitle: r.job_title,
      stageChangedAt: new Date(r.stage_changed_at).getTime()
    })));
  }
  // Job filter mirrors the smart-match rule: linked candidates PLUS
  // anyone whose CV matches the JD at 40% or more.
  const jr = await pool.query('SELECT * FROM jobs WHERE id = $1', [job]);
  if (!jr.rows.length) return res.json([]);
  const jk = jobKeywords(jr.rows[0]);
  const { rows } = await pool.query(`
    SELECT c.id, c.name, c.stage, c.stage_changed_at, c.applied_for,
           c.skills, c.current_title, c.specialization, c.degree, c.resume_text,
           j.title AS job_title
    FROM candidates c LEFT JOIN jobs j ON j.id=c.applied_for
    ORDER BY c.stage_changed_at DESC`);
  const out = [];
  for (const r of rows) {
    const linked = r.applied_for === job;
    const pct = linked ? null : scoreCandidateForJob(jk, r);
    if (linked || pct >= 40) {
      out.push({
        id: r.id, name: r.name, stage: r.stage, jobTitle: r.job_title,
        stageChangedAt: new Date(r.stage_changed_at).getTime(),
        matchPct: linked ? null : pct
      });
    }
  }
  res.json(out);
}));

// ---------------------------------------------------------------
// Settings
// ---------------------------------------------------------------
app.get('/api/settings', wrap(async (req, res) => {
  const { rows } = await pool.query('SELECT total_jobs_targeted FROM settings WHERE id=TRUE');
  res.json({ totalJobsTargeted: rows[0]?.total_jobs_targeted || 0 });
}));
app.put('/api/settings', wrap(async (req, res) => {
  await pool.query('UPDATE settings SET total_jobs_targeted=$1 WHERE id=TRUE',
    [Math.max(0, Number(req.body.totalJobsTargeted) || 0)]);
  res.json({ saved: true });
}));

// CSV export — streamed from the DB so it works at any table size.
// Excel export — a real .xlsx workbook: RTL sheet, styled header,
// every stored field plus CV-derived columns (LinkedIn, employers
// summary, experience estimate when the stored value is empty).
// Bulk résumé-file export: every stored CV (PDF/DOCX/TXT) exactly as
// uploaded, zipped and named after its candidate. Batched reads keep
// memory flat even with thousands of files.
app.get('/api/export/resumes.zip', wrap(async (req, res) => {
  let archiver;
  try { archiver = require('archiver'); }
  catch (e) { return res.status(500).json({ error: 'archiver غير مثبت — أعد النشر ليتم تثبيت الاعتماديات' }); }

  // Filters: ?job=<id> limits the export to that job. mode=matches
  // exports the smart-match set (every CV ranked against the JD, top
  // 200 with score > 0 — the same list the match view shows); the
  // default with ?job is candidates actually linked to the job.
  // ?stage=<المرحلة> narrows either set further.
  const jobId = String(req.query.job || '').trim();
  const stage = String(req.query.stage || '').trim();
  const mode = String(req.query.mode || '').trim();
  let ids = null;          // null = all candidates
  let zipName = 'resumes.zip';
  const safe = s => String(s || '').replace(/[\\/:*?"<>|\n\r]/g, '-').trim().slice(0, 80) || 'candidate';

  if (jobId) {
    const jr = await pool.query('SELECT * FROM jobs WHERE id = $1', [jobId]);
    if (!jr.rows.length) return res.status(404).json({ error: 'الوظيفة غير موجودة' });
    zipName = 'resumes - ' + safe(jr.rows[0].title) + '.zip';
    if (mode === 'matches') {
      const jk = jobKeywords(jr.rows[0]);
      const { rows } = await pool.query(`
        SELECT id, skills, current_title, specialization, degree, resume_text, stage, applied_for FROM candidates`);
      ids = rows
        .map(r => ({ id: r.id, stage: r.stage, linked: r.applied_for === jobId, pct: scoreCandidateForJob(jk, r) }))
        .filter(x => (x.pct >= 40 || x.linked) && (!stage || x.stage === stage))
        .sort((a, b) => b.pct - a.pct)
        .slice(0, 200)
        .map(x => x.id);
    } else {
      const { rows } = await pool.query(
        'SELECT id FROM candidates WHERE applied_for = $1' + (stage ? ' AND stage = $2' : ''),
        stage ? [jobId, stage] : [jobId]);
      ids = rows.map(r => r.id);
    }
  } else if (stage) {
    const { rows } = await pool.query('SELECT id FROM candidates WHERE stage = $1', [stage]);
    ids = rows.map(r => r.id);
  }

  if (ids && ids.length === 0) {
    return res.status(404).json({ error: 'لا توجد سير ذاتية ضمن هذا الفلتر' });
  }
  const cnt = ids
    ? await pool.query('SELECT COUNT(*) FROM resume_files WHERE candidate_id = ANY($1)', [ids])
    : await pool.query('SELECT COUNT(*) FROM resume_files');
  if (Number(cnt.rows[0].count) === 0) {
    return res.status(404).json({ error: 'لا توجد ملفات سير ذاتية محفوظة ضمن هذا الفلتر' });
  }

  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Disposition', `attachment; filename*=UTF-8''` + encodeURIComponent(zipName));
  const archive = archiver('zip', { zlib: { level: 6 } });
  archive.on('error', err => { console.error('resumes.zip failed:', err.message); try { res.end(); } catch (e) {} });
  archive.pipe(res);

  const used = new Set();
  const EXT_BY_MIME = { 'application/pdf': 'pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
    'text/plain': 'txt' };
  const appendRows = (rows) => {
    for (const r of rows) {
      const orig = r.file_name || '';
      let ext = (orig.includes('.') ? orig.split('.').pop() : '') || EXT_BY_MIME[r.mime_type] || 'bin';
      ext = safe(ext).slice(0, 6).toLowerCase();
      const base = safe(r.name);
      let fname = base + '.' + ext, i = 2;
      while (used.has(fname)) { fname = base + ' (' + (i++) + ').' + ext; }
      used.add(fname);
      archive.append(r.bytes, { name: fname });
    }
  };

  const BATCH = 25;
  if (ids) {
    for (let i = 0; i < ids.length; i += BATCH) {
      const chunk = ids.slice(i, i + BATCH);
      const { rows } = await pool.query(`
        SELECT rf.file_name, rf.mime_type, rf.bytes, c.name
        FROM resume_files rf JOIN candidates c ON c.id = rf.candidate_id
        WHERE rf.candidate_id = ANY($1)`, [chunk]);
      appendRows(rows);
    }
  } else {
    let offset = 0;
    for (;;) {
      const { rows } = await pool.query(`
        SELECT rf.file_name, rf.mime_type, rf.bytes, c.name
        FROM resume_files rf JOIN candidates c ON c.id = rf.candidate_id
        ORDER BY rf.candidate_id LIMIT $1 OFFSET $2`, [BATCH, offset]);
      if (!rows.length) break;
      appendRows(rows);
      offset += BATCH;
    }
  }
  await archive.finalize();
}));

app.get('/api/export/candidates.xlsx', wrap(async (req, res) => {
  let ExcelJS;
  try { ExcelJS = require('exceljs'); }
  catch (e) { return res.status(500).json({ error: 'exceljs غير مثبت — أعد النشر ليتم تثبيت الاعتماديات' }); }
  const jobs = (await pool.query('SELECT id, title FROM jobs')).rows;
  const jobTitle = Object.fromEntries(jobs.map(j => [j.id, j.title]));
  const { rows } = await pool.query('SELECT * FROM candidates ORDER BY created_at DESC');

  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('المرشحون', { views: [{ rightToLeft: true, state: 'frozen', ySplit: 1 }] });
  ws.columns = [
    { header: 'الاسم', key: 'name', width: 24 },
    { header: 'البريد الإلكتروني', key: 'email', width: 26 },
    { header: 'الجوال', key: 'phone', width: 15 },
    { header: 'رابط لينكدإن', key: 'linkedin', width: 34 },
    { header: 'تاريخ الميلاد', key: 'dob', width: 13 },
    { header: 'المدينة', key: 'city', width: 13 },
    { header: 'العنوان', key: 'address', width: 22 },
    { header: 'التخصص', key: 'spec', width: 18 },
    { header: 'الدرجة العلمية', key: 'degree', width: 13 },
    { header: 'الراتب الحالي', key: 'salary', width: 13 },
    { header: 'المسمى الوظيفي', key: 'title', width: 22 },
    { header: 'سنوات الخبرة', key: 'exp', width: 12 },
    { header: 'المهارات', key: 'skills', width: 30 },
    { header: 'الجهات السابقة', key: 'employers', width: 40 },
    { header: 'الوظيفة المرتبطة', key: 'job', width: 20 },
    { header: 'المرحلة', key: 'stage', width: 14 },
    { header: 'المصدر', key: 'source', width: 14 },
    { header: 'تاريخ الإضافة', key: 'created', width: 13 }
  ];
  const head = ws.getRow(1);
  head.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 12 };
  head.alignment = { horizontal: 'center', vertical: 'middle' };
  head.height = 22;
  head.eachCell(c => { c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0D2B47' } }; });

  rows.forEach(r => {
    const exp = (r.experience_years && r.experience_years > 0)
      ? r.experience_years
      : estimateExperienceYears(r.resume_text);
    ws.addRow({
      name: r.name, email: r.email || '', phone: r.phone || '',
      linkedin: extractLinkedIn(r.resume_text),
      dob: r.date_of_birth || '', city: r.city || '', address: r.address || '',
      spec: r.specialization || '', degree: r.degree || '',
      salary: r.current_salary || '',
      title: r.current_title || '', exp: exp || 0,
      skills: (r.skills || []).join('، '),
      employers: extractEmployers(r.resume_text),
      job: r.applied_for ? (jobTitle[r.applied_for] || '') : '',
      stage: r.stage, source: r.source || '',
      created: r.created_at ? new Date(r.created_at).toISOString().slice(0, 10) : ''
    });
  });
  ws.eachRow((row, n) => { if (n > 1) row.alignment = { vertical: 'middle', wrapText: false }; });

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename="candidates.xlsx"');
  await wb.xlsx.write(res);
  res.end();
}));

app.get('/api/export/candidates.csv', wrap(async (req, res) => {
  const { rows } = await pool.query(`
    SELECT c.*, j.title AS job_title FROM candidates c
    LEFT JOIN jobs j ON j.id=c.applied_for ORDER BY c.created_at DESC`);
  const esc = v => {
    const s = String(v == null ? '' : v);
    return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  };
  // Resume text is intentionally NOT exported — full CV bodies wreck
  // the spreadsheet layout; the file stays clean, structured data only.
  const head = ['الاسم','البريد الإلكتروني','الهاتف','المسمى الوظيفي الحالي/الأخير','المصدر',
    'سنوات الخبرة','الوظيفة المتقدم لها','المهارات','المرحلة','تاريخ الإضافة'];
  const lines = rows.map(r => [r.name, r.email, r.phone, r.current_title, r.source,
    r.experience_years, r.job_title, (r.skills || []).join('؛ '), r.stage,
    new Date(r.created_at).toLocaleDateString('ar-EG')].map(esc).join(','));
  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="candidates.csv"');
  res.send('\uFEFF' + head.map(esc).join(',') + '\n' + lines.join('\n'));
}));

// Audit log — global feed, or one candidate's history.
app.get('/api/audit', wrap(async (req, res) => {
  const limit = Math.min(300, Math.max(1, Number(req.query.limit) || 100));
  const params = [];
  let where = '';
  if (req.query.candidateId) {
    params.push(req.query.candidateId);
    where = `WHERE candidate_id = $${params.length}`;
  }
  params.push(limit);
  const { rows } = await pool.query(`
    SELECT actor, action, candidate_id, candidate_name, details, created_at
    FROM audit_log ${where}
    ORDER BY created_at DESC LIMIT $${params.length}`, params);
  res.json(rows.map(r => ({
    actor: r.actor, action: r.action, candidateId: r.candidate_id,
    candidateName: r.candidate_name, details: r.details,
    at: new Date(r.created_at).getTime()
  })));
}));

app.get('/healthz', wrap(async (req, res) => {
  await pool.query('SELECT 1');
  res.json({ ok: true });
}));

// ---------------------------------------------------------------
// Static frontend (flat layout — block direct access to source files)
// ---------------------------------------------------------------
const PRIVATE = ['/server.js','/package.json','/package-lock.json','/render.yaml',
                 '/dockerfile','/docker-compose.yml','/readme.md'];
app.use((req, res, next) => {
  const p = req.path.toLowerCase();
  if (PRIVATE.includes(p) || p.startsWith('/db')) return res.status(404).send('Not found');
  next();
});
app.use(express.static(__dirname));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

const PORT = process.env.PORT || 3000;
initSchema()
  .then(() => seedAdmin())
  .then(() => app.listen(PORT, () => {
    console.log(`Talent Acquisition Department running on http://localhost:${PORT}`);
  }))
  .catch(e => {
    console.error('');
    console.error('FATAL: could not connect to PostgreSQL or apply the schema.');
    console.error('  ' + e.message);
    console.error('');
    console.error('Check that DATABASE_URL is correct and the database is reachable.');
    console.error('For a local database without TLS, also set PGSSL=off');
    console.error('');
    process.exit(1);
  });
