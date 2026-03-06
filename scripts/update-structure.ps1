# ==============================================
# DOMUS BCN 2026 — Actualizar Structure.md
# Genera un árbol visual del proyecto excluyendo
# carpetas irrelevantes (node_modules, .next, etc.)
# ==============================================

param(
    [string]$OutputFile = "Structure.md",
    [string]$RootPath = "."
)

Write-Host "🌳 Actualizando $OutputFile..." -ForegroundColor Cyan

function Get-ProjectTree($Path, $Indent = "") {
    $exclude = "^(node_modules|\.next|\.git|\.vscode|\.antigravity|\.gemini|\.turbo|dist|out|coverage|package-lock\.json|Structure\.md|\.env.*|\.DS_Store|Thumbs\.db)$"
    $items = Get-ChildItem -Path $Path |
        Where-Object { $_.Name -notmatch $exclude } |
        Sort-Object { -not $_.PSIsContainer }, Name

    for ($i = 0; $i -lt $items.Count; $i++) {
        $item = $items[$i]
        $isLast = ($i -eq $items.Count - 1)
        $connector = if ($isLast) { "└── " } else { "├── " }
        $emoji = if ($item.PSIsContainer) { "📁" } else { "📄" }
        $line = "${Indent}${connector}${emoji} $($item.Name)"
        $line | Out-File -FilePath $OutputFile -Append -Encoding utf8

        if ($item.PSIsContainer) {
            $childIndent = if ($isLast) { "${Indent}    " } else { "${Indent}│   " }
            Get-ProjectTree -Path $item.FullName -Indent $childIndent
        }
    }
}

# Contar estadísticas
$tsFiles  = (Get-ChildItem -Path $RootPath -Recurse -Include "*.ts","*.tsx" -Exclude "node_modules*",".next*" | Measure-Object).Count
$cssFiles = (Get-ChildItem -Path $RootPath -Recurse -Include "*.css" -Exclude "node_modules*",".next*" | Measure-Object).Count
$mdFiles  = (Get-ChildItem -Path $RootPath -Recurse -Include "*.md" -Exclude "node_modules*",".next*" | Measure-Object).Count

# Escribir cabecera
$header = @"
# 🏗️ Estructura del Proyecto: Domus BCN 2026
> Última actualización: $(Get-Date -Format 'dd/MM/yyyy HH:mm:ss')
> Archivos: **${tsFiles}** TypeScript · **${cssFiles}** CSS · **${mdFiles}** Markdown

"@
$header | Out-File -FilePath $OutputFile -Encoding utf8

# Generar árbol
Get-ProjectTree -Path $RootPath

Write-Host "✅ $OutputFile actualizado — $tsFiles archivos TS, $cssFiles CSS, $mdFiles MD." -ForegroundColor Green
