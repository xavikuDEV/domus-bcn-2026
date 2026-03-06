import { execSync } from 'child_process';
import fs from 'fs';

try {
  const result = execSync('npm run build && node scripts/health-check.mjs && git status && git log -1 --format=%%B', { stdio: 'pipe' });
  fs.writeFileSync('final_verification.txt', result.toString());
} catch (e) {
  fs.writeFileSync('final_verification_error.txt', (e.stdout || '') + '\n' + (e.stderr || ''));
}
