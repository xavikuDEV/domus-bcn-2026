$contextFile = "ARCHITECT_CONTEXT.md"
Write-Host "🧠 Generando Contexto de Arquitectura..." -ForegroundColor Cyan

$content = @"
# 🧠 ARCHITECT CONTEXT: Domus BCN 2026
> Última actualización: $(Get-Date -Format 'dd/MM/yyyy HH:mm:ss')

## 📍 Estado Actual
- **Fase:** Semana 1 - Cimientos e Infraestructura.
- **Último Hito:** Repositorio GitHub vinculado y Bitácora Notion operativa.

## 🏗️ Estructura del Proyecto
$(Get-Content Structure.md -Raw)

## 🔑 Configuración Técnica
- **Framework:** Next.js 15 (App Router)
- **Base de Datos:** Supabase (PostgreSQL)
- **Comunicación:** Notion API (Bitácora de Eventos)
- **Repositorio:** https://github.com/xavikuDEV/domus-bcn-2026

## 🎯 Roadmap Inmediato
1. Finalizar automatización de documentación (Menú Principal).
2. Crear Agente de Ingesta (Inmovilla API).
3. Diseñar Schema de base de datos para agentes.
"@

$content | Out-File -FilePath $contextFile -Encoding utf8
Write-Host "✅ ARCHITECT_CONTEXT.md actualizado." -ForegroundColor Green