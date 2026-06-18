import { sql } from '../src/db/client.js';
import { randomUUID } from 'crypto';

const PROJECT_ID = process.env.PROJECT_ID || '00000000-0000-0000-0000-000000000000';

const outdatedDeps = {
  "@fastify/static": {
    "current": "7.0.4",
    "latest": "9.1.3"
  },
  "dotenv": {
    "current": "16.6.1",
    "latest": "17.4.2"
  },
  "fastify": {
    "current": "4.29.1",
    "latest": "5.8.5"
  },
  "vitest": {
    "current": "2.1.9",
    "latest": "4.1.9"
  }
};

const vulnerabilities = {
  "fastify": "high",    // Multiple HIGH/CRITICAL security advisories
  "vitest": "critical"  // CRITICAL Vitest UI security vulnerability
};

async function processDeps() {
  try {
    console.log('Processing outdated dependencies...');

    // Insert findings using the correct schema
    for (const [packageName, versions] of Object.entries(outdatedDeps)) {
      const severity = vulnerabilities[packageName] || "low";
      const hasAdvisory = severity !== "low";

      try {
        const id = randomUUID();
        await sql`
          INSERT INTO stack_drift_findings
            (id, project_id, ecosystem, package_name, current_ver, latest_ver, severity, has_advisory, detected_at, status)
          VALUES
            (${id}, ${PROJECT_ID}, 'npm', ${packageName}, ${versions.current}, ${versions.latest}, ${severity}, ${hasAdvisory}, now(), 'open')
          ON CONFLICT DO NOTHING
        `;
        console.log(`✓ Inserted: ${packageName} (${versions.current} → ${versions.latest}) [${severity}]`);
      } catch (err) {
        console.log(`! Skipped: ${packageName} - ${err.message}`);
      }
    }

    console.log('\n=== FINDINGS SUMMARY ===');
    console.log(`Total outdated packages: ${Object.keys(outdatedDeps).length}`);
    console.log(`HIGH/CRITICAL findings: ${Object.keys(vulnerabilities).length}`);
    console.log('\nHIGH/CRITICAL packages requiring follow-up issues:');
    Object.entries(vulnerabilities).forEach(([pkg, sev]) => {
      const outdated = outdatedDeps[pkg];
      console.log(`  • ${pkg}: ${sev.toUpperCase()}`);
      console.log(`    Current: ${outdated.current}, Latest: ${outdated.latest}`);
    });

  } catch (error) {
    console.error('Error processing dependencies:', error);
    process.exit(1);
  } finally {
    await sql.end();
  }
}

processDeps();
