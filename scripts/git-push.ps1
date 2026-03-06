# ==============================================
# DOMUS BCN 2026 — Git Push con Logging a Notion
# 1. Detecta cambios
# 2. Pide mensaje de commit (o usa default)
# 3. Ejecuta git add, commit, push
# 4. Registra en Bitácora de Notion via log-event.mjs
# ==============================================

# 1. Verificar cambios
$changedFiles = git status --porcelain | Out-String
if (-not $changedFiles.Trim()) {
    Write-Host "⚠️ No hay cambios para subir." -ForegroundColor Yellow
    exit 0
}

# 2. Mostrar resumen de cambios
Write-Host "`n📋 Archivos modificados:" -ForegroundColor Cyan
git status --short
Write-Host ""

# 3. Pedir mensaje de commit
$commitMsg = Read-Host "📝 Mensaje del commit (Enter = default)"
if (-not $commitMsg) {
    $commitMsg = "sync: actualización $(Get-Date -Format 'dd/MM/yyyy HH:mm')"
}

# 4. Formatear lista de archivos para Notion
$fileList = ($changedFiles -split "`n" |
    Where-Object { $_.Trim() } |
    ForEach-Object { $_.Trim() -replace '^..', '' } |
    Select-Object -First 10) -join ", "

# 5. Git operations
Write-Host "`n🚀 Sincronizando con GitHub..." -ForegroundColor Magenta
git add .
git commit -m $commitMsg
$pushResult = git push origin main 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Push exitoso." -ForegroundColor Green

    # 6. Registrar en Bitácora
    Write-Host "📓 Registrando en Bitácora de Notion..." -ForegroundColor Cyan
    node scripts/log-event.mjs "$commitMsg" "$fileList"
} else {
    Write-Host "❌ Error en git push:" -ForegroundColor Red
    Write-Host $pushResult
    exit 1
}
