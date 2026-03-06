function Show-Menu {
    Clear-Host
    Write-Host "╔══════════════════════════════════════════════════╗" -ForegroundColor Cyan
    Write-Host "║     🏢 DOMUS BCN 2026 — SISTEMA OPERATIVO       ║" -ForegroundColor Cyan
    Write-Host "║         Versión 2.0 · $(Get-Date -Format 'dd/MM/yyyy')              ║" -ForegroundColor Cyan
    Write-Host "╠══════════════════════════════════════════════════╣" -ForegroundColor Cyan
    Write-Host "║                                                  ║" -ForegroundColor Cyan
    Write-Host "║  1. 📋 [DOCS]    Actualizar Estructura           ║" -ForegroundColor White
    Write-Host "║  2. 🧪 [TEST]    Ejecutar Tests (Vitest)         ║" -ForegroundColor White
    Write-Host "║  3. 🚀 [GIT]     Subir a GitHub (pre-test)       ║" -ForegroundColor White
    Write-Host "║  4. 🔄 [SYNC]    Sincronización Completa         ║" -ForegroundColor White
    Write-Host "║  5. 🏥 [HEALTH]  Health Check (servicios)        ║" -ForegroundColor White
    Write-Host "║  6. 🚢 [DEPLOY]  Pre-Deploy Check                ║" -ForegroundColor White
    Write-Host "║  7. 📡 [NOTION]  Debug Notion (ver IDs)          ║" -ForegroundColor White
    Write-Host "║  8. 📓 [LOG]     Registrar evento en Bitácora    ║" -ForegroundColor White
    Write-Host "║  9. ➕ [TASK]    Crear tarea en Roadmap           ║" -ForegroundColor White
    Write-Host "║  0. 🚪 Salir                                     ║" -ForegroundColor White
    Write-Host "║                                                  ║" -ForegroundColor Cyan
    Write-Host "╚══════════════════════════════════════════════════╝" -ForegroundColor Cyan
}

$salir = $false
do {
    Show-Menu
    $opcion = Read-Host "`n⚡ Selecciona una acción"
    switch ($opcion) {
        "1" {
            & "$PSScriptRoot\scripts\update-structure.ps1"
            & "$PSScriptRoot\scripts\generate-context.ps1"
        }
        "2" {
            npm test
        }
        "3" {
            Write-Host "🧪 Verificando calidad antes de subir..." -ForegroundColor Cyan
            npm test
            if ($LASTEXITCODE -eq 0) {
                & "$PSScriptRoot\scripts\git-push.ps1"
            } else {
                Write-Host "❌ Tests fallidos. Corrige el código antes de subir." -ForegroundColor Red
            }
        }
        "4" {
            & "$PSScriptRoot\scripts\sync.ps1"
        }
        "5" {
            node scripts/health-check.mjs
        }
        "6" {
            & "$PSScriptRoot\scripts\pre-deploy.ps1"
        }
        "7" {
            node scripts/debug-notion.mjs
        }
        "8" {
            $action = Read-Host "📝 Acción realizada"
            $files = Read-Host "📄 Archivos tocados (o Enter para N/A)"
            if (-not $files) { $files = "N/A" }
            node scripts/log-event.mjs "$action" "$files"
        }
        "9" {
            $taskName = Read-Host "📋 Nombre de la tarea"
            node scripts/create-task.mjs "$taskName"
        }
        "0" { $salir = $true }
        default { Write-Host "⚠️ Opción no válida." -ForegroundColor Yellow }
    }
    if (-not $salir) { Read-Host "`nPresiona Enter para continuar..." }
} while (-not $salir)

Write-Host "`n👋 ¡Hasta la próxima, Arquitecto!" -ForegroundColor Cyan
