import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  console.log("==> Running git status...");
  console.log(execSync('git status', { encoding: 'utf-8' }));

  console.log("==> Running git add...");
  execSync('git add .', { encoding: 'utf-8' });

  console.log("==> Running git commit...");
  try {
    execSync('git commit -m "chore: push definitivo Fase 3"', { encoding: 'utf-8' });
  } catch (e) {
    console.log("Nothing to commit or commit failed:", e.message);
  }

  console.log("==> Running git push...");
  console.log(execSync('git push', { encoding: 'utf-8' }));

  console.log("==> Running log-event.mjs to Bitácora...");
  const scriptPath = join(__dirname, 'log-event.mjs');
  console.log(execSync(`node "${scriptPath}" "Frontend" "[7.1] Fase 3 Completa: Buscador, Filtros y Valoración" "Alta" "S2: Frontend"`, { encoding: 'utf-8' }));

  console.log("✅ Final push and logging complete.");
} catch (error) {
  console.error("❌ Error running final push script:", error.message);
  if (error.stdout) console.error(error.stdout);
  if (error.stderr) console.error(error.stderr);
}
