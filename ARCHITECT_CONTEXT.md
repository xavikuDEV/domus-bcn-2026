# 🏗️ ARCHITECT CONTEXT: Domus BCN 2026
> Última actualización: 05/03/2026 22:54:00

## 📍 Estado Actual
- **Fase:** Fase 1 (Backend e Ingesta) — **COMPLETADA** ✅
- **Infraestructura:** **VALIDADA** ✅ (Seguridad PASS, Arquitectura PASS, Tests PASS)
- **Último Hito:** Búnker 100% operativo — 12 agentes + 8 MCPs configurados
- **Siguiente:** Tarea 6 — Frontend Gallery (PropertyCard.tsx)

## 🤖 Equipo de Agentes (12)

| # | Agente | Skill |
|---|--------|-------|
| 1 | 🎯 Orquestador | `orchestrator.md` |
| 2 | 🚀 DevOps Sync | `devops_sync.md` |
| 3 | 📟 Notion Sync | `notion_sync.md` |
| 4 | 🧪 QA Specialist | `qa_specialist.md` |
| 5 | 🗄️ SQL Architect | `sql_supabase_expert.md` |
| 6 | 🎨 UI/UX Specialist | `ui_ux_specialist.md` |
| 7 | 🛡️ Security Specialist | `security_specialist.md` |
| 8 | 📥 Ingestion Specialist | `ingestion_specialist.md` |
| 9 | 🌐 E2E Testing | `e2e_testing_specialist.md` |
| 10 | 📝 Technical Writer | `technical_writer_specialist.md` |
| 11 | ⚡ SEO & Performance | `seo_performance_expert.md` |
| 12 | 🏛️ Software Architect | `software_architect_specialist.md` |

## 🔌 MCPs Configurados (8)

| MCP | Función |
|-----|---------|
| Snyk | Seguridad SAST |
| Notion | Roadmap y Bitácora |
| Supabase | Base de datos |
| GitHub | Control de versiones |
| Context7 | Documentación actualizada |
| Test Sprite | E2E Testing |
| Semgrep | Análisis estático |
| Google Drive | Docs para NotebookLM |

## 🏗️ Estructura del Proyecto

```
├── 📁 src/
│   ├── 📁 app/              ← Next.js 15 App Router
│   │   ├── page.tsx, layout.tsx, globals.css
│   ├── 📁 components/       ← [PRÓXIMO: PropertyCard.tsx]
│   ├── 📁 lib/
│   │   ├── supabase/client.ts
│   │   └── notion/client.ts
│   ├── 📁 services/
│   │   └── ingestion/xml-processor.ts
│   ├── 📁 types/inmovilla.ts
│   └── 📁 __tests__/integration/
│       ├── env.test.ts, supabase.test.ts
│       ├── ingestion.test.ts, notion-roadmap.test.ts
├── 📁 .antigravity/skills/  ← 12 skills de agentes
├── 📁 docs/                 ← Documentación técnica
├── 📁 scripts/              ← Automatización
└── 📄 ARCHITECT_CONTEXT.md  ← Este archivo
```

## 🔑 Configuración Técnica
- **Framework:** Next.js 15 (App Router, Server Components)
- **Base de Datos:** Supabase (RLS habilitado)
- **Styling:** Tailwind CSS v4
- **Testing:** Vitest + Test Sprite (E2E)
- **Repositorio:** https://github.com/xavikuDEV/domus-bcn-2026

## 🔒 Auditoría de Seguridad (05/03/2026)
- **Snyk SAST:** 0 vulnerabilidades ✅
- **Arquitectura:** 13/13 archivos < 200 líneas ✅
- **Tests:** All PASS ✅
- **RLS Supabase:** Activo ✅

## 🎯 Roadmap Inmediato
1. **Tarea 6:** Diseño de `PropertyCard.tsx` (Server Component)
2. **Componentes:** `PropertyGallery.tsx` (grid responsive)
3. **Queries:** `lib/supabase/queries.ts` (fetch tipado)
