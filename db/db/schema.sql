-- Optional performance indexes.
--
-- Applied separately from schema.sql because CREATE EXTENSION requires
-- elevated privileges that some managed Postgres services withhold. If
-- this fails, the app still works correctly — searches just fall back
-- to sequential scans, which only becomes noticeable at large volumes.
--
-- Trigram indexes make partial-text search (ILIKE '%...%') fast,
-- including on Arabic text, which standard full-text search handles
-- poorly.

CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE INDEX IF NOT EXISTS idx_candidates_name_trgm
  ON candidates USING GIN (name gin_trgm_ops);

CREATE INDEX IF NOT EXISTS idx_candidates_resume_trgm
  ON candidates USING GIN (resume_text gin_trgm_ops);
