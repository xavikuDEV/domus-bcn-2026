function Show-Menu {
    Clear-Host
    Write-Host "==========================================" -ForegroundColor Yellow
    Write-Host "   DOMUS BCN 2026 - SISTEMA OPERATIVO   " -ForegroundColor Yellow
    Write-Host "==========================================" -ForegroundColor Yellow
    Write-Host "1. [DOCS] Actualizar Estructura y Contexto"
    Write-Host "2. [TEST] Ejecutar Suite de Pruebas (Vitest)"
    Write-Host "3. [GIT]  Subir a GitHub (Pre-test incluido)"
    Write-Host "4. [FULL] Sincronización Total (Segura)"
    Write-Host "5. Salir"
    Write-Host "==========================================" -ForegroundColor Yellow
}

$salir = $false
do {
    Show-Menu
    $opcion = Read-Host "`nSelecciona una acción"
    switch ($opcion) {
        "1" { 
            .\scripts\update-structure.ps1
            .\scripts\generate-context.ps1 
        }
        "2" { npm test }
        "3" { 
            Write-Host "🧪 Verificando calidad antes de subir..." -ForegroundColor Cyan
            npm test
            if ($LASTEXITCODE -eq 0) {
                .\scripts\git-push.ps1
            } else {
                Write-Host "❌ Tests fallidos. Corrige el código antes de subir." -ForegroundColor Red
            }
        }
        "4" { 
            .\scripts\update-structure.ps1
            .\scripts\generate-context.ps1
            Write-Host "🧪 Ejecutando tests finales..." -ForegroundColor Cyan
            npm test
            if ($LASTEXITCODE -eq 0) {
                .\scripts\git-push.ps1
            } else {
                Write-Host "❌ Sincronización abortada por fallos en tests." -ForegroundColor Red
            }
        }
        "5" { $salir = $true }
        default { Write-Host "Opción no válida." -ForegroundColor Red }
    }
    if (-not $salir) { Read-Host "`nPresiona Enter para continuar..." }
} while (-not $salir)