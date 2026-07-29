-- إدارة استقطاب الكفاءات — Talent Acquisition Department
-- PostgreSQL schema
--
-- Applied automatically on server startup (idempotent — safe to re-run).
-- Design notes:
--   * Résumé binary files live in resume_files, split from the
--     candidates row so that listing/searching candidates never drags
--     multi-MB PDFs along with it.
--   * Indexes target the queries the UI actually runs: filter by job,
--     filter by stage, sort by date, and full-text résumé search.

CREATE TABLE IF NOT EXISTS jobs (
  id              TEXT PRIMARY KEY,
  title           TEXT NOT NULL,
  department      TEXT,
  seniority       TEXT,
  headcount       INTEGER NOT NULL DEFAULT 1,
  post_date       DATE,
  approved        BOOLEAN NOT NULL DEFAULT TRUE,
  required_skills TEXT[] NOT NULL DEFAULT '{}',
  nice_skills     TEXT[] NOT NULL DEFAULT '{}',
  description     TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS candidates (
  id                 TEXT PRIMARY KEY,
  name               TEXT NOT NULL,
  email              TEXT,
  phone              TEXT,
  current_title      TEXT,
  source             TEXT,
  experience_years   INTEGER NOT NULL DEFAULT 0,
  applied_for        TEXT REFERENCES jobs(id) ON DELETE SET NULL,
  alternative_job_id TEXT REFERENCES jobs(id) ON DELETE SET NULL,
  skills             TEXT[] NOT NULL DEFAULT '{}',
  resume_text        TEXT,
  stage              TEXT NOT NULL DEFAULT 'الفرز',
  previous_stage     TEXT,
  stage_changed_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  has_original_file  BOOLEAN NOT NULL DEFAULT FALSE,
  resume_file_name   TEXT,
  resume_file_type   TEXT,
  date_of_birth      TEXT,
  specialization     TEXT,
  degree             TEXT,
  city               TEXT,
  address            TEXT,
  current_salary     TEXT,
  notes              TEXT,
  created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Stage transitions, kept as rows rather than a JSON blob so that
-- time-to-hire and funnel KPIs can be computed in SQL.
CREATE TABLE IF NOT EXISTS stage_history (
  id           BIGSERIAL PRIMARY KEY,
  candidate_id TEXT NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,
  stage        TEXT NOT NULL,
  changed_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS assessments (
  id           TEXT PRIMARY KEY,
  candidate_id TEXT NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,
  type         TEXT,
  score        NUMERIC(5,2) NOT NULL DEFAULT 0,
  signature    TEXT,
  notes        TEXT,
  file_name    TEXT,
  mime_type    TEXT,
  file_bytes   BYTEA,
  assessed_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Binary résumé files, deliberately in their own table. Kept out of
-- the candidates row so SELECTs for lists/search stay small and fast.
CREATE TABLE IF NOT EXISTS resume_files (
  candidate_id TEXT PRIMARY KEY REFERENCES candidates(id) ON DELETE CASCADE,
  file_name    TEXT,
  mime_type    TEXT,
  bytes        BYTEA NOT NULL,
  uploaded_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- User accounts. Passwords are scrypt-hashed with a per-user salt —
-- never stored in plain text.
CREATE TABLE IF NOT EXISTS users (
  id            TEXT PRIMARY KEY,
  username      TEXT NOT NULL UNIQUE,
  display_name  TEXT NOT NULL,
  email         TEXT,
  password_hash TEXT NOT NULL,
  is_admin      BOOLEAN NOT NULL DEFAULT FALSE,
  totp_secret   TEXT,
  totp_enabled  BOOLEAN NOT NULL DEFAULT FALSE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Login sessions (cookie token → user), kept in the DB so logins
-- survive server restarts.
CREATE TABLE IF NOT EXISTS sessions (
  token      TEXT PRIMARY KEY,
  user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_sessions_expiry ON sessions(expires_at);

-- One-time password-reset tokens (email recovery flow).
CREATE TABLE IF NOT EXISTS password_resets (
  token      TEXT PRIMARY KEY,
  user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at TIMESTAMPTZ NOT NULL,
  used       BOOLEAN NOT NULL DEFAULT FALSE
);

-- Immutable audit trail: who changed what, when. candidate_id is kept
-- nullable with SET NULL so the log entry survives candidate deletion;
-- candidate_name is copied in for the same reason.
CREATE TABLE IF NOT EXISTS audit_log (
  id             BIGSERIAL PRIMARY KEY,
  actor          TEXT NOT NULL,
  action         TEXT NOT NULL,
  candidate_id   TEXT REFERENCES candidates(id) ON DELETE SET NULL,
  candidate_name TEXT,
  details        TEXT,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_audit_created ON audit_log(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_cand    ON audit_log(candidate_id, created_at DESC);

-- Single-row table for app-wide settings (e.g. manual KPI targets).
CREATE TABLE IF NOT EXISTS settings (
  id                  BOOLEAN PRIMARY KEY DEFAULT TRUE CHECK (id),
  total_jobs_targeted INTEGER NOT NULL DEFAULT 0
);
INSERT INTO settings (id) VALUES (TRUE) ON CONFLICT (id) DO NOTHING;

-- ---------------------------------------------------------------
-- Indexes — these are what keep it fast as the table grows.
-- ---------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_candidates_applied_for ON candidates(applied_for);
CREATE INDEX IF NOT EXISTS idx_candidates_stage       ON candidates(stage);
CREATE INDEX IF NOT EXISTS idx_candidates_created_at  ON candidates(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_candidates_alt_job     ON candidates(alternative_job_id);
CREATE INDEX IF NOT EXISTS idx_stage_history_cand     ON stage_history(candidate_id, changed_at);
CREATE INDEX IF NOT EXISTS idx_assessments_cand       ON assessments(candidate_id);
