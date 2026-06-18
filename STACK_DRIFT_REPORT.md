# Component Tracker — Weekly Stack Drift Report
Generated: 2026-06-18

## Summary
- **Total outdated packages:** 4
- **HIGH/CRITICAL findings:** 2
- **Database records inserted:** 4 (stack_drift_findings table)

## Findings

### CRITICAL Priority
**Package:** vitest
- **Current version:** 2.1.9
- **Latest version:** 4.1.9
- **Severity:** CRITICAL
- **Vulnerability:** GHSA-5xrq-8626-4rwp — When Vitest UI server is listening, arbitrary files can be read and executed
- **CVSS Score:** 9.8 (Critical)
- **Action Required:** Upgrade to ≥3.2.6 (minimum) or 4.1.9 (recommended)
- **Child issue:** V-7938-[CRITICAL-vitest]

### HIGH Priority
**Package:** fastify
- **Current version:** 4.29.1
- **Latest version:** 5.8.5
- **Severity:** HIGH
- **Vulnerabilities:**
  - GHSA-q3j6-qgpj-74h6 — fast-uri path traversal via percent-encoded dot segments (CVSS 7.5)
  - GHSA-v39h-62p7-jpjc — fast-uri host confusion via percent-encoded delimiters (CVSS 7.5)
  - GHSA-jx2c-rxcm-jvmq — Content-Type header tab character allows body validation bypass (CVSS 7.5)
  - GHSA-mrq3-vjjr-p77c — DoS via unbounded memory allocation (CVSS 3.7)
- **Action Required:** Upgrade to 5.8.5 (major version bump—review breaking changes)
- **Child issue:** V-7938-[HIGH-fastify]

### MEDIUM/LOW Priority
**Packages with minor version updates available:**
- **@fastify/static:** 7.0.4 → 9.1.3 (no security advisories)
- **dotenv:** 16.6.1 → 17.4.2 (no security advisories)

## Stack Drift Findings Table
All findings have been persisted to `stack_drift_findings` table:
- @fastify/static: 7.0.4 → 9.1.3 (severity: low)
- dotenv: 16.6.1 → 17.4.2 (severity: low)
- fastify: 4.29.1 → 5.8.5 (severity: high)
- vitest: 2.1.9 → 4.1.9 (severity: critical)

## Next Steps
1. ✅ Run `npm outdated --json` — DONE
2. ✅ Insert findings into stack_drift_findings table — DONE
3. ⏳ Create follow-up child issues for CRITICAL/HIGH findings — IN PROGRESS
   - V-7938-[CRITICAL-vitest] for vitest upgrade
   - V-7938-[HIGH-fastify] for fastify upgrade
