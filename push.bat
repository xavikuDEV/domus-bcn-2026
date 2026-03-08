@echo off
git status > out_git.txt
git add .
git commit -m "chore: push definitivo Fase 3" >> out_git.txt 2>&1
git push >> out_git.txt 2>&1
node scripts/log-event.mjs "Frontend" "[7.1] Fase 3 Completa: Buscador, Filtros y Valoración" "Alto" "S2: Frontend" >> out_git.txt 2>&1
echo DONE >> out_git.txt
