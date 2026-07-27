// Talent Acquisition Department — self-hosted backend
// Simple Express server that persists data to local files and serves
// the frontend. Mirrors the get/set/delete/list storage API that the
// frontend already expects, so the frontend code is unchanged except
// for a small compatibility shim in index.html.
//
// Storage design: each key is its own file under DATA_DIR/store/,
// rather than one big JSON blob. This matters once résumé files are
// stored (as base64, under keys like "resume_file_<candidateId>") —
// with a single shared blob, saving one small change (like a stage
// update) would have to rewrite every stored résumé along with it.
// One file per key means unrelated keys never touch each other.

const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
app.use(express.json({ limit: '20mb' }));

// DATA_DIR can be overridden so it points at a mounted persistent
// volume when deploying to a cloud platform with an ephemeral
// filesystem — see README.md "Cloud Deployment" for platform-specific
// instructions. Defaults to a local folder for zero-config local use.
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
const STORE_DIR = path.join(DATA_DIR, 'store');
const OLD_DATA_FILE = path.join(DATA_DIR, 'storage.json'); // pre-migration format

if (!fs.existsSync(STORE_DIR)) fs.mkdirSync(STORE_DIR, { recursive: true });

// Optional HTTP Basic Auth — off by default so local/first-run testing
// needs no setup. Set BASIC_AUTH_USER and BASIC_AUTH_PASS (as
// environment variables) before exposing this server beyond a trusted
// private network — e.g. before putting it on the public internet.
// See README.md "Authentication" for setup instructions.
const AUTH_USER = process.env.BASIC_AUTH_USER;
const AUTH_PASS = process.env.BASIC_AUTH_PASS;
if (AUTH_USER && AUTH_PASS) {
  app.use((req, res, next) => {
    if (req.path === '/healthz') return next(); // let health checks through unauthenticated
    const header = req.headers.authorization || '';
    const [scheme, encoded] = header.split(' ');
    if (scheme === 'Basic' && encoded) {
      const [user, pass] = Buffer.from(encoded, 'base64').toString('utf8').split(':');
      const userOk = user && user.length === AUTH_USER.length &&
        crypto.timingSafeEqual(Buffer.from(user), Buffer.from(AUTH_USER));
      const passOk = pass && pass.length === AUTH_PASS.length &&
        crypto.timingSafeEqual(Buffer.from(pass), Buffer.from(AUTH_PASS));
      if (userOk && passOk) return next();
    }
    res.set('WWW-Authenticate', 'Basic realm="Talent Acquisition Department"');
    res.status(401).send('Authentication required.');
  });
  console.log('Basic Auth is ENABLED.');
} else {
  console.warn('⚠️  Basic Auth is DISABLED (BASIC_AUTH_USER/BASIC_AUTH_PASS not set). ' +
    'Anyone who can reach this server can read and write all candidate data. ' +
    'Set those environment variables before deploying beyond a trusted private network.');
}

function keyToFilePath(key) {
  // Filesystem-safe encoding of an arbitrary key string.
  const safe = Buffer.from(key, 'utf8').toString('base64url');
  return path.join(STORE_DIR, safe + '.txt');
}
function filePathToKey(filename) {
  const base = filename.replace(/\.txt$/, '');
  return Buffer.from(base, 'base64url').toString('utf8');
}

// One-time migration: if the old single-blob file exists and the new
// store is empty, split its contents into individual per-key files.
(function migrateOldFormat() {
  if (!fs.existsSync(OLD_DATA_FILE)) return;
  const existingFiles = fs.readdirSync(STORE_DIR);
  if (existingFiles.length > 0) return; // already migrated or already has data
  try {
    const old = JSON.parse(fs.readFileSync(OLD_DATA_FILE, 'utf8') || '{}');
    const keys = Object.keys(old);
    keys.forEach(key => {
      fs.writeFileSync(keyToFilePath(key), old[key]);
    });
    fs.renameSync(OLD_DATA_FILE, OLD_DATA_FILE + '.migrated');
    console.log(`Migrated ${keys.length} key(s) from old storage.json to data/store/.`);
  } catch (e) {
    console.error('Migration from old storage.json failed (continuing with empty store):', e);
  }
})();

// Serialize writes per key so concurrent requests to the SAME key
// can't corrupt it. Different keys never block each other.
const writeQueues = {};
function queueWrite(key, fn) {
  const prev = writeQueues[key] || Promise.resolve();
  const next = prev.then(fn, fn);
  writeQueues[key] = next;
  return next;
}

// GET /api/storage/:key -> { key, value }
app.get('/api/storage/:key', (req, res) => {
  const key = req.params.key;
  const filePath = keyToFilePath(key);
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'not found' });
  try {
    const value = fs.readFileSync(filePath, 'utf8');
    res.json({ key, value });
  } catch (e) {
    console.error('Read failed for key', key, e);
    res.status(500).json({ error: 'read failed' });
  }
});

// PUT /api/storage/:key  body: { value: "..." } -> { key, value }
app.put('/api/storage/:key', async (req, res) => {
  const key = req.params.key;
  const value = req.body && req.body.value;
  if (typeof value !== 'string') {
    return res.status(400).json({ error: 'value must be a string' });
  }
  try {
    await queueWrite(key, () => fs.promises.writeFile(keyToFilePath(key), value));
    res.json({ key, value });
  } catch (e) {
    console.error('Write failed for key', key, e);
    res.status(500).json({ error: 'write failed' });
  }
});

// DELETE /api/storage/:key -> { key, deleted: true }
app.delete('/api/storage/:key', async (req, res) => {
  const key = req.params.key;
  try {
    await queueWrite(key, async () => {
      const filePath = keyToFilePath(key);
      if (fs.existsSync(filePath)) await fs.promises.unlink(filePath);
    });
    res.json({ key, deleted: true });
  } catch (e) {
    console.error('Delete failed for key', key, e);
    res.status(500).json({ error: 'delete failed' });
  }
});

// GET /api/storage?prefix=... -> { keys: [...], prefix }
app.get('/api/storage', (req, res) => {
  const prefix = req.query.prefix || '';
  try {
    const files = fs.readdirSync(STORE_DIR).filter(f => f.endsWith('.txt'));
    const keys = files.map(filePathToKey).filter(k => k.startsWith(prefix));
    res.json({ keys, prefix });
  } catch (e) {
    console.error('List failed:', e);
    res.status(500).json({ error: 'list failed' });
  }
});

// Simple health check for load balancers / uptime monitors
app.get('/healthz', (req, res) => res.json({ ok: true }));

// Serve the frontend
// Serve the frontend from this same directory (flat layout — no
// public/ subfolder). Because the app's own source files live here
// too, block direct web access to them first: without this,
// express.static would happily serve /server.js and /package.json to
// anyone who asked.
const PRIVATE_FILES = ['/server.js', '/package.json', '/package-lock.json', '/render.yaml', '/Dockerfile', '/docker-compose.yml', '/README.md'];
app.use((req, res, next) => {
  const requested = req.path.toLowerCase();
  if (PRIVATE_FILES.some(f => requested === f.toLowerCase()) || requested.startsWith('/data')) {
    return res.status(404).send('Not found');
  }
  next();
});
app.use(express.static(__dirname));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Talent Acquisition Department server running on http://localhost:${PORT}`);
  console.log(`Data directory: ${STORE_DIR}`);
});
