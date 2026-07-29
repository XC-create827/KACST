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
const SESSION_DAYS = 7;

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
  res.setHeader('Set-Cookie',
    `${SESSION_COOKIE}=${token}; HttpOnly; Path=/; Max-Age=${maxAgeSec}; SameSite=Lax${secure}`);
}

// Ensure at least one account exists so the first person can log in.
async function seedAdmin(){
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
  if (req.path === '/healthz' || req.path === '/api/login') return next();
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
  await pool.query('DELETE FROM sessions WHERE expires_at < NOW()');
  const token = crypto.randomBytes(32).toString('hex');
  await pool.query(
    `INSERT INTO sessions (token, user_id, expires_at)
     VALUES ($1, $2, NOW() + INTERVAL '${SESSION_DAYS} days')`, [token, u.id]);
  setSessionCookie(req, res, token, SESSION_DAYS * 86400);
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
// Session + account endpoints
// ---------------------------------------------------------------
app.get('/api/me', wrap(async (req, res) => {
  res.json({ username: req.user.username, displayName: req.user.displayName, isAdmin: req.user.isAdmin });
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

// User management — admin only.
app.get('/api/users', wrap(async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ error: 'admin only' });
  const { rows } = await pool.query(
    'SELECT id, username, display_name, is_admin, created_at FROM users ORDER BY created_at');
  res.json(rows.map(r => ({ id: r.id, username: r.username, displayName: r.display_name,
    isAdmin: r.is_admin, createdAt: r.created_at })));
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
  await pool.query(
    'INSERT INTO users (id, username, display_name, password_hash, is_admin) VALUES ($1,$2,$3,$4,$5)',
    [id, un, String(displayName || un).trim().slice(0, 60), hashPassword(String(password)), !!isAdmin]);
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
    'SELECT * FROM assessments WHERE candidate_id=$1 ORDER BY assessed_at DESC', [req.params.id]);
  cand.assessments = asmts.rows.map(a => ({
    id: a.id, type: a.type, score: Number(a.score), signature: a.signature || '',
    notes: a.notes || '', date: new Date(a.assessed_at).getTime()
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
        applied_for,skills,resume_text,stage,has_original_file,resume_file_name,resume_file_type)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`,
      [id, b.name, b.email || null, b.phone || null, b.currentTitle || null,
       b.source || null, Number(b.experienceYears) || 0, b.appliedFor || null,
       b.skills || [], b.resumeText || null, stage,
       !!b.fileBase64, b.resumeFileName || null, b.resumeFileType || null]);
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
       source=$6, experience_years=$7, applied_for=$8, skills=$9, resume_text=$10
     WHERE id=$1`,
    [req.params.id, b.name || null, b.email || null, b.phone || null, b.currentTitle || null,
     b.source || null, Number(b.experienceYears) || 0, b.appliedFor || null,
     b.skills || [], b.resumeText || null]);
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
    params.push(req.query.job); where = `WHERE c.applied_for = $${params.length}`;
  }
  const limit = Math.min(500, Math.max(1, Number(req.query.limit) || 100));
  params.push(limit);
  const { rows } = await pool.query(`
    SELECT a.*, c.name AS candidate_name
    FROM assessments a JOIN candidates c ON c.id = a.candidate_id
    ${where} ORDER BY a.assessed_at DESC LIMIT $${params.length}`, params);
  res.json(rows.map(a => ({
    id: a.id, candidateId: a.candidate_id, candidateName: a.candidate_name,
    type: a.type, score: Number(a.score), signature: a.signature || '',
    notes: a.notes || '', date: new Date(a.assessed_at).getTime()
  })));
}));

app.post('/api/assessments', wrap(async (req, res) => {
  const b = req.body || {};
  if (!b.candidateId) return res.status(400).json({ error: 'candidateId is required' });
  const id = uid('as');
  await pool.query(
    `INSERT INTO assessments (id,candidate_id,type,score,signature,notes)
     VALUES ($1,$2,$3,$4,$5,$6)`,
    [id, b.candidateId, b.type || 'تقييم',
     Math.max(0, Math.min(30, Number(b.score) || 0)), b.signature || null, b.notes || null]);
  const nm = await pool.query('SELECT name FROM candidates WHERE id=$1', [b.candidateId]);
  await audit(pool, getActor(req), 'إضافة تقييم', b.candidateId,
    nm.rows[0] ? nm.rows[0].name : null,
    'الدرجة ' + Math.max(0, Math.min(30, Number(b.score) || 0)) + '/30');
  res.json({ id });
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
    params.push(req.query.job); where += ` AND c.applied_for = $${params.length}`;
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
  const params = job ? [job] : [];
  const { rows } = await pool.query(`
    SELECT c.id, c.name, c.stage, c.stage_changed_at, j.title AS job_title
    FROM candidates c LEFT JOIN jobs j ON j.id=c.applied_for
    ${job ? 'WHERE c.applied_for = $1' : ''}
    ORDER BY c.stage_changed_at DESC`, params);
  res.json(rows.map(r => ({
    id: r.id, name: r.name, stage: r.stage, jobTitle: r.job_title,
    stageChangedAt: new Date(r.stage_changed_at).getTime()
  })));
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
app.get('/api/export/candidates.csv', wrap(async (req, res) => {
  const { rows } = await pool.query(`
    SELECT c.*, j.title AS job_title FROM candidates c
    LEFT JOIN jobs j ON j.id=c.applied_for ORDER BY c.created_at DESC`);
  const esc = v => {
    const s = String(v == null ? '' : v);
    return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  };
  const head = ['الاسم','البريد الإلكتروني','الهاتف','المسمى الوظيفي الحالي/الأخير','المصدر',
    'سنوات الخبرة','الوظيفة المتقدم لها','المهارات','المرحلة','تاريخ الإضافة','نص السيرة الذاتية'];
  const lines = rows.map(r => [r.name, r.email, r.phone, r.current_title, r.source,
    r.experience_years, r.job_title, (r.skills || []).join('؛ '), r.stage,
    new Date(r.created_at).toLocaleDateString('ar-EG'), r.resume_text].map(esc).join(','));
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
