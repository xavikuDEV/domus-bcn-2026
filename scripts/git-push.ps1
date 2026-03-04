# 1. Capturar archivos modificados
$changedFiles = git status --porcelain | Out-String
if (-not $changedFiles) { 
    Write-Host "⚠️ No hay cambios para subir." -ForegroundColor Yellow
    return 
}

$commitMsg = Read-Host "📝 Introduce el mensaje del commit"
if (-not $commitMsg) { $commitMsg = "sync: actualización rutinaria" }

# 2. Preparar el log para Notion (Formatamos la lista de archivos)
$fileList = "Archivos: " + ($changedFiles -replace '(?m)^.. ', '- ')

Write-Host "🚀 Sincronizando con GitHub..." -ForegroundColor Magenta
git add .
git commit -m $commitMsg
git push origin main

# 3. Registrar en Bitácora (Pasamos el mensaje y la lista de archivos)
# Nota: Modificaremos el script .mjs en el siguiente paso para recibir esto
node scripts/test-notion.mjs "$commitMsg" "$fileList"

Write-Host "✅ Repositorio y Bitácora actualizados." -ForegroundColor Green