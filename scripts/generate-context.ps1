# ==============================================
# DOMUS BCN 2026 — Actualizar ARCHITECT_CONTEXT.md
# SEGURO: Solo actualiza la sección de Estructura,
# sin sobrescribir el resto del archivo.
# ==============================================

param(
    [string]$ContextFile = "ARCHITECT_CONTEXT.md"
)

Write-Host "🧠 Actualizando sección de estructura en $ContextFile..." -ForegroundColor Cyan

if (-not (Test-Path $ContextFile)) {
    Write-Host "⚠️ $ContextFile no existe. Primero créalo manualmente." -ForegroundColor Yellow
    exit 1
}

if (-not (Test-Path "Structure.md")) {
    Write-Host "⚠️ Structure.md no existe. Ejecuta update-structure.ps1 primero." -ForegroundColor Yellow
    exit 1
}

$content = Get-Content $ContextFile -Raw -Encoding utf8
$structure = Get-Content "Structure.md" -Raw -Encoding utf8

# Patrón: buscar el bloque entre "## 🏗️ Estructura del Proyecto" y el siguiente "## "
$pattern = '(?ms)(## 🏗️ Estructura del Proyecto.*?)(## (?!🏗️))'
$replacement = @"
## 🏗️ Estructura del Proyecto
> Auto-generado por ``scripts/generate-context.ps1`` — $(Get-Date -Format 'dd/MM/yyyy HH:mm')

``````
$($structure -replace '``````', '``\````')
``````

`$2
"@

if ($content -match '## 🏗️ Estructura del Proyecto') {
    $updated = $content -replace $pattern, $replacement
    $updated | Out-File -FilePath $ContextFile -Encoding utf8 -NoNewline
    Write-Host "✅ Sección de estructura actualizada en $ContextFile." -ForegroundColor Green
} else {
    # Si no existe la sección, añadirla antes del último ## o al final
    $appendBlock = @"

## 🏗️ Estructura del Proyecto
> Auto-generado por ``scripts/generate-context.ps1`` — $(Get-Date -Format 'dd/MM/yyyy HH:mm')

``````
$structure
``````

"@
    $content + $appendBlock | Out-File -FilePath $ContextFile -Encoding utf8 -NoNewline
    Write-Host "✅ Sección de estructura añadida a $ContextFile." -ForegroundColor Green
}
