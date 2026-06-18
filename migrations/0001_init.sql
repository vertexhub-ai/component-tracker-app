-- Initial schema. Agents add tables here. Always use IF NOT EXISTS so
-- migrate-on-boot stays idempotent.
-- Example:
-- CREATE TABLE IF NOT EXISTS items (
--   id SERIAL PRIMARY KEY,
--   created_at TIMESTAMPTZ NOT NULL DEFAULT now()
-- );

CREATE TABLE IF NOT EXISTS stack_drift_findings (
  id SERIAL PRIMARY KEY,
  package_name TEXT NOT NULL,
  current_version TEXT NOT NULL,
  latest_version TEXT NOT NULL,
  severity TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(package_name, current_version, latest_version)
);
