# 1. Actualizar Estructura
Write-Host "🌳 Actualizando Structure.md..." -ForegroundColor Cyan
function Get-ProjectTree($Path, $Indent = "") {
    $exclude = "node_modules|\.next|\.git|\.vscode|package-lock\.json|Structure\.md|\.env"
    $items = Get-ChildItem -Path $Path | Where-Object { $_.Name -notmatch $exclude } | Sort-Object PSIsContainer, Name -Descending
    foreach ($item in $items) {
        $isLast = ($item -eq $items[-1])
        $char = if ($isLast) { "└── " } else { "├── " }
        $emoji = if ($item.PSIsContainer) { "📁 " } else { "📄 " }
        $line = $Indent + $char + $emoji + $item.Name
        $line | Out-File -FilePath Structure.md -Append -Encoding utf8
        if ($item.PSIsContainer) {
            # Corrección aquí: asignar indentación extra antes de la llamada recursiva
            $extraIndent = if ($isLast) { "    " } else { "│   " }
            Get-ProjectTree -Path $item.FullName -Indent ($Indent + $extraIndent)
        }
    }
}
$header = "# 🏗️ Estructura del Proyecto: Domus BCN 2026`n> Última actualización: $(Get-Date -Format 'dd/MM/yyyy HH:mm:ss')`n"
$header | Out-File -FilePath Structure.md -Encoding utf8
Get-ProjectTree -Path "."

# 2. Git Magic
Write-Host "🚀 Subiendo a GitHub..." -ForegroundColor Magenta
git add .
$msg = "sync: actualización automática $(Get-Date -Format 'dd/MM/yyyy HH:mm')"
git commit -m $msg
git push origin main

Write-Host "✅ Todo al día, Arquitecto." -ForegroundColor Green