@echo off
echo STARTING FIRE TEST...
npm run build > build_result.txt 2>&1
echo BUILD FINISHED.
node scripts/health-check.mjs >> build_result.txt 2>&1
echo HEALTH CHECK FINISHED.
type build_result.txt
