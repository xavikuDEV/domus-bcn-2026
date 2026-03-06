# ==============================================
# DOMUS BCN 2026 — Sincronización Completa
# Pipeline seguro: Structure → Context → Tests → Git Push
# Si los tests fallan, se aborta el push.
# ==============================================

param(
    [switch]$SkipTests,
    [switch]$AutoCommit
)

Write-Host "===========================================" -ForegroundColor Yellow
Write-Host "  🔄 SINCRONIZACIÓN COMPLETA — DOMUS BCN  " -ForegroundColor Yellow
Write-Host "===========================================" -ForegroundColor Yellow

# 1. Actualizar Structure.md
Write-Host "`n[1/4] 🌳 Actualizando Structure.md..." -ForegroundColor Cyan
& "$PSScriptRoot\update-structure.ps1"

# 2. Actualizar sección de estructura en ARCHITECT_CONTEXT.md
Write-Host "`n[2/4] 🧠 Actualizando ARCHITECT_CONTEXT.md..." -ForegroundColor Cyan
& "$PSScriptRoot\generate-context.ps1"

# 3. Tests
if (-not $SkipTests) {
    Write-Host "`n[3/4] 🧪 Ejecutando tests..." -ForegroundColor Cyan
    npm test
    if ($LASTEXITCODE -ne 0) {
        Write-Host "`n❌ Tests fallidos. Sincronización ABORTADA." -ForegroundColor Red
        Write-Host "   Corrige los errores y vuelve a ejecutar." -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Todos los tests pasados." -ForegroundColor Green
} else {
    Write-Host "`n[3/4] ⏭️  Tests omitidos (--SkipTests)." -ForegroundColor Yellow
}

# 4. Git Push
Write-Host "`n[4/4] 🚀 Subiendo a GitHub..." -ForegroundColor Magenta

if ($AutoCommit) {
    $msg = "sync: actualización automática $(Get-Date -Format 'dd/MM/yyyy HH:mm')"
    git add .
    git commit -m $msg
    git push origin main
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Push automático exitoso." -ForegroundColor Green
        node scripts/log-event.mjs "$msg" "auto-sync"
    } else {
        Write-Host "❌ Error en git push." -ForegroundColor Red
        exit 1
    }
} else {
    & "$PSScriptRoot\git-push.ps1"
}

Write-Host "`n===========================================" -ForegroundColor Green
Write-Host "  ✅ SINCRONIZACIÓN COMPLETADA             " -ForegroundColor Green
Write-Host "===========================================" -ForegroundColor Green
