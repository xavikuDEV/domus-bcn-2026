# ==============================================
# DOMUS BCN 2026 — Sincronización Completa
# Pipeline: Structure → Context → Tests → Git Push (rebase)
# Si los tests fallan, se aborta el push.
# ==============================================

param(
    [switch]$SkipTests,
    [switch]$AutoCommit
)

Write-Host "===========================================" -ForegroundColor Yellow
Write-Host "  🔄 SINCRONIZACIÓN COMPLETA — DOMUS BCN  " -ForegroundColor Yellow
Write-Host "===========================================" -ForegroundColor Yellow
$startTime = Get-Date

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

# 4. Git Push (con rebase obligatorio para historial lineal)
Write-Host "`n[4/4] 🚀 Subiendo a GitHub (rebase + push)..." -ForegroundColor Magenta

if ($AutoCommit) {
    # Capturar archivos y hacer commit automático
    $changedFiles = (git status --porcelain |
        ForEach-Object { ($_ -replace '^..', '').Trim() } |
        Select-Object -First 15) -join ", "

    $msg = "sync: actualización automática $(Get-Date -Format 'dd/MM/yyyy HH:mm')"
    git add .
    git commit -m $msg

    # Rebase obligatorio
    Write-Host "🔄 Rebase..." -ForegroundColor Cyan
    git pull --rebase origin main
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Conflicto en rebase. Resuelve manualmente." -ForegroundColor Red
        exit 1
    }

    git push origin main
    if ($LASTEXITCODE -eq 0) {
        $hash = git rev-parse --short HEAD
        $duration = (New-TimeSpan -Start $startTime -End (Get-Date)).TotalSeconds
        $durationStr = "$([math]::Round($duration, 0))s"

        Write-Host "✅ Push automático exitoso ($hash)." -ForegroundColor Green
        node scripts/log-event.mjs "$msg" "$changedFiles" --hash "$hash" --impacto "Bajo" --duracion "$durationStr"
    } else {
        Write-Host "❌ Error en git push." -ForegroundColor Red
        exit 1
    }
} else {
    & "$PSScriptRoot\git-push.ps1"
}

$totalDuration = [math]::Round((New-TimeSpan -Start $startTime -End (Get-Date)).TotalSeconds, 1)
Write-Host "`n===========================================" -ForegroundColor Green
Write-Host "  ✅ SINCRONIZACIÓN COMPLETADA ($($totalDuration)s)  " -ForegroundColor Green
Write-Host "===========================================" -ForegroundColor Green
