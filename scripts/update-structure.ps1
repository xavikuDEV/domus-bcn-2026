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

# Carpetas y archivos a excluir del árbol
$excludePattern = "^(node_modules|\.next|\.git|\.vscode|\.antigravity|\.gemini|\.turbo|dist|out|coverage|package-lock\.json|Structure\.md|\.env.*|\.DS_Store|Thumbs\.db)$"

function Get-ProjectTree($Path, $Indent = "") {
    $items = Get-ChildItem -Path $Path |
        Where-Object { $_.Name -notmatch $excludePattern } |
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

# Contar estadísticas — FILTRANDO correctamente node_modules, .next, dist, .git
$excludeDirs = @("node_modules", ".next", ".git", "dist", "out", "coverage", ".turbo", ".antigravity", ".gemini", ".vscode")
$allFiles = Get-ChildItem -Path $RootPath -Recurse -File | Where-Object {
    $fullPath = $_.FullName
    $excluded = $false
    foreach ($dir in $excludeDirs) {
        if ($fullPath -match [regex]::Escape("\$dir\") -or $fullPath -match [regex]::Escape("/$dir/")) {
            $excluded = $true
            break
        }
    }
    -not $excluded
}

$tsFiles  = ($allFiles | Where-Object { $_.Extension -match '^\.ts|tsx$' } | Measure-Object).Count
$cssFiles = ($allFiles | Where-Object { $_.Extension -eq '.css' } | Measure-Object).Count
$mdFiles  = ($allFiles | Where-Object { $_.Extension -eq '.md' } | Measure-Object).Count
$jsFiles  = ($allFiles | Where-Object { $_.Extension -match '^\.js|mjs|jsx$' } | Measure-Object).Count
$totalSrc = ($allFiles | Measure-Object).Count

# Escribir cabecera
$header = @"
# 🏗️ Estructura del Proyecto: Domus BCN 2026
> Última actualización: $(Get-Date -Format 'dd/MM/yyyy HH:mm:ss')
> Total archivos fuente: **${totalSrc}** · **${tsFiles}** TypeScript · **${jsFiles}** JS · **${cssFiles}** CSS · **${mdFiles}** Markdown

"@
$header | Out-File -FilePath $OutputFile -Encoding utf8

# Generar árbol
Get-ProjectTree -Path $RootPath

Write-Host "✅ $OutputFile actualizado — $totalSrc archivos fuente ($tsFiles TS, $jsFiles JS, $cssFiles CSS, $mdFiles MD)." -ForegroundColor Green
