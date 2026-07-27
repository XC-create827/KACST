# إدارة استقطاب الكفاءات — Talent Acquisition Department (KACST)

Recruiting platform: CV database, sourcing pipeline, assessments,
job roles, and talent-acquisition KPIs. Arabic (RTL) interface.

**This is the flat-layout version** — every file sits at the repo root
with no subfolders, which avoids the folder-upload issues GitHub's web
uploader can cause.

## Files

- `index.html` — the entire frontend (UI, matching logic, résumé parsing)
- `server.js` — Express server (serves the frontend + storage API + optional auth)
- `package.json` — dependencies
- `render.yaml` — Render Blueprint (auto-configures the service)

## Deploying to Render

**Easiest:** in Render choose **New + → Blueprint** and point it at this
repo. `render.yaml` sets everything up automatically.

**Manual setup instead:**

| Setting | Value |
|---|---|
| Runtime | Node |
| Root Directory | *(leave blank)* |
| Build Command | `npm install` |
| Start Command | `npm start` |

Then add:

- **A Disk** — mount path `/var/data`
- **Environment variable** `DATA_DIR` = `/var/data`

Both are required. Without a disk, Render erases every candidate, job,
and résumé each time the service restarts or redeploys.

⚠️ **Persistent disks are not available on Render's free tier.** On the
free plan it will build and run, but data will not survive a restart.

## Authentication

No login is required by default. **Before this is reachable publicly**,
set these two environment variables in Render's dashboard:

- `BASIC_AUTH_USER` — e.g. `admin`
- `BASIC_AUTH_PASS` — a strong password

Every request then requires that login. Without them, anyone with the
URL can read all candidate data and download résumés. The server logs a
warning on startup when it's running without auth.

## Running locally

```bash
npm install
npm start
```

Then open http://localhost:3000

## Data storage

Data is stored as individual files under `DATA_DIR` (defaults to
`./data` locally, `/var/data` on Render). Each record — including each
uploaded résumé file — is its own file, so saving a small change never
rewrites unrelated data.

Before treating this as the permanent system of record, consider:

- **Back up the data directory regularly** — it's the whole database.
- **A real database** (Postgres/MySQL) for heavy concurrent use or
  proper reporting. All reads/writes go through four route handlers in
  `server.js` (`GET/PUT/DELETE /api/storage/:key` and `GET
  /api/storage`); swap those for DB calls and the frontend needs no
  changes. Résumé blobs suit object storage (S3-compatible) better than
  a DB column.
- **No audit trail or soft deletes** — deletions are permanent.
- **Disk usage** grows with stored résumés (base64 is ~1.3× the
  original file size).

## Notes

- The browser loads fonts and the PDF/DOCX parsing libraries from
  public CDNs (Google Fonts, cdnjs), so **end-user machines** need
  internet access. The server itself does not.
- Résumé parsing (name, email, phone, job title, years of experience)
  is pattern-based, not AI. It handles common Arabic and English
  layouts well, but unusual formats or scanned image-only PDFs may need
  manual correction — every extracted field stays editable.
