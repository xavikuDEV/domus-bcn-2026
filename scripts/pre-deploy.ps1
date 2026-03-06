# ==============================================
# DOMUS BCN 2026 — Pre-Deploy Check
# Ejecuta una batería completa antes de deploy:
# 1. Health Check (servicios)
# 2. Tests (Vitest)
# 3. Build (Next.js)
# 4. Resumen final
# ==============================================

Write-Host "===========================================" -ForegroundColor Yellow
Write-Host "  🚀 PRE-DEPLOY CHECK — DOMUS BCN 2026    " -ForegroundColor Yellow
Write-Host "===========================================" -ForegroundColor Yellow
$startTime = Get-Date

# 1. Health Check
Write-Host "`n[1/3] 🏥 Health Check..." -ForegroundColor Cyan
node scripts/health-check.mjs
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Health Check fallido. Corrige los problemas antes de desplegar." -ForegroundColor Red
    exit 1
}

# 2. Tests
Write-Host "`n[2/3] 🧪 Tests..." -ForegroundColor Cyan
npm test
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Tests fallidos. No se puede desplegar." -ForegroundColor Red
    exit 1
}

# 3. Build
Write-Host "`n[3/3] 🏗️  Build de producción..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build fallido. Revisa los errores." -ForegroundColor Red
    exit 1
}

# Resumen
$duration = (New-TimeSpan -Start $startTime -End (Get-Date)).TotalSeconds
Write-Host "`n===========================================" -ForegroundColor Green
Write-Host "  ✅ LISTO PARA DESPLEGAR                  " -ForegroundColor Green
Write-Host "  ⏱️  Duración: $([math]::Round($duration, 1))s" -ForegroundColor Green
Write-Host "===========================================" -ForegroundColor Green
