# ==============================================
# DOMUS BCN 2026 — Git Push con Historial Lineal
#
# Flujo:
# 1. Detectar cambios (git diff --name-only)
# 2. Pedir mensaje de commit
# 3. git add + commit
# 4. git pull --rebase (historial lineal)
# 5. git push
# 6. Extraer hash y loguear en Bitácora
# ==============================================

$startTime = Get-Date

# 1. Verificar cambios pendientes
$stagedFiles = git diff --cached --name-only 2>&1 | Out-String
$untrackedFiles = git status --porcelain 2>&1 | Out-String

if (-not $untrackedFiles.Trim()) {
    Write-Host "⚠️ No hay cambios para subir." -ForegroundColor Yellow
    exit 0
}

# 2. Capturar archivos modificados ANTES del commit
Write-Host "`n📋 Archivos modificados:" -ForegroundColor Cyan
git status --short
Write-Host ""

$changedFiles = (git status --porcelain |
    ForEach-Object { ($_ -replace '^..', '').Trim() } |
    Select-Object -First 15) -join ", "

# 3. Pedir mensaje de commit
$commitMsg = Read-Host "📝 Mensaje del commit (Enter = default)"
if (-not $commitMsg) {
    $commitMsg = "sync: actualización $(Get-Date -Format 'dd/MM/yyyy HH:mm')"
}

# 4. Git add + commit
Write-Host "`n📦 Preparando commit..." -ForegroundColor Cyan
git add .
git commit -m $commitMsg

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error al crear commit. ¿Hay cambios?" -ForegroundColor Red
    exit 1
}

# 5. Rebase obligatorio (historial lineal, sin bifurcaciones)
Write-Host "`n🔄 Sincronizando con origin (rebase)..." -ForegroundColor Magenta
$rebaseResult = git pull --rebase origin main 2>&1 | Out-String

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ CONFLICTO durante rebase:" -ForegroundColor Red
    Write-Host $rebaseResult -ForegroundColor Yellow
    Write-Host "`n💡 Para resolver:" -ForegroundColor Cyan
    Write-Host "  1. Edita los archivos con conflictos"
    Write-Host "  2. git add <archivos>"
    Write-Host "  3. git rebase --continue"
    Write-Host "  4. Vuelve a ejecutar este script"
    Write-Host "`n  O usa: git rebase --abort para cancelar`n"
    exit 1
}

Write-Host "✅ Rebase exitoso." -ForegroundColor Green

# 6. Push
Write-Host "`n🚀 Pushing a origin/main..." -ForegroundColor Magenta
$pushResult = git push origin main 2>&1 | Out-String

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error en git push:" -ForegroundColor Red
    Write-Host $pushResult
    exit 1
}

Write-Host "✅ Push exitoso." -ForegroundColor Green

# 7. Extraer hash corto del commit
$commitHash = git rev-parse --short HEAD
Write-Host "🔗 Commit: $commitHash" -ForegroundColor Cyan

# 8. Calcular duración
$duration = (New-TimeSpan -Start $startTime -End (Get-Date)).TotalSeconds
$durationStr = "$([math]::Round($duration, 0))s"

# 9. Registrar en Bitácora con todos los datos
Write-Host "`n📓 Registrando en Bitácora de Notion..." -ForegroundColor Cyan
node scripts/log-event.mjs "$commitMsg" "$changedFiles" --hash "$commitHash" --impacto "Medio" --duracion "$durationStr"

Write-Host "`n✅ Flujo completado: commit $commitHash → rebase → push → log ✅" -ForegroundColor Green
