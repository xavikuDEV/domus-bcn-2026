# 🏗️ ARCHITECT CONTEXT: Domus BCN 2026
> Última actualización: 05/03/2026 02:26:39

## 📍 Estado Actual
- **Fase:** Fase 1 (Backend e Ingesta) - **COMPLETADA** ✅.
- **Último Hito:** Inmueble SU-PA40 sincronizado en Supabase y Bitácora actualizada.
- **Estado de Infra:** GitHub vinculado vía MCP (npx), Supabase con RLS Activo.

## 🏗️ Estructura del Proyecto
# 🏗️ Estructura del Proyecto: Domus BCN 2026
> Última actualización: 05/03/2026 02:26:39

├── 📁 src
│   ├── 📁 types
│   │   ├── 📄 inmovilla.ts
│   │   └── 📄 index.ts
│   ├── 📁 services
│   │   ├── 📁 orchestrator
│   │   ├── 📁 ingestion
│   │   │   └── 📄 xml-processor.ts
│   │   ├── 📁 curation
│   │   └── 📄 index.ts
│   ├── 📁 mocks
│   │   └── 📁 inmovilla
│   │       └── 📄 property-sample.json
│   ├── 📁 lib
│   │   ├── 📁 supabase
│   │   │   └── 📄 client.ts
│   │   ├── 📁 notion
│   │   │   └── 📄 client.ts
│   │   ├── 📁 inmovilla
│   │   └── 📄 index.ts
│   ├── 📁 hooks
│   ├── 📁 features
│   ├── 📁 components
│   ├── 📁 app
│   │   ├── 📄 page.tsx
│   │   ├── 📄 layout.tsx
│   │   ├── 📄 globals.css
│   │   └── 📄 favicon.ico
│   └── 📁 __tests__
│       ├── 📁 unit
│       └── 📁 integration
│           ├── 📄 supabase.test.ts
│           ├── 📄 notion-roadmap.test.ts
│           ├── 📄 ingestion.test.ts
│           └── 📄 env.test.ts
├── 📁 scripts
│   ├── 📄 update-structure.ps1
│   ├── 📄 sync.ps1
│   ├── 📄 log-event.mjs
│   ├── 📄 git-push.ps1
│   ├── 📄 generate-context.ps1
│   ├── 📄 debug-notion.mjs
│   ├── 📄 cron-sync.mjs
│   └── 📄 create-task.mjs
├── 📁 public
│   ├── 📄 window.svg
│   ├── 📄 vercel.svg
│   ├── 📄 next.svg
│   ├── 📄 globe.svg
│   └── 📄 file.svg
├── 📁 docs
│   ├── 📄 TESTING_STRATEGY.md
│   ├── 📄 DATA_SCHEMA.md
│   ├── 📄 ARCHITECTURE_OVERVIEW.md
│   ├── 📄 ARCHITECT_RULES.md
│   ├── 📄 API_INTEGRATION.md
│   └── 📄 AGENT_ROLES.md
├── 📁 .antigravity
│   └── 📁 skills
│       ├── 📄 qa_specialist.md
│       ├── 📄 orchestrator.md
│       ├── 📄 notion_sync.md
│       └── 📄 devops_sync.md
├── 📄 vitest.config.mts
├── 📄 tsconfig.json
├── 📄 README.md
├── 📄 postcss.config.mjs
├── 📄 package.json
├── 📄 next.config.ts
├── 📄 next-env.d.ts
├── 📄 menu.ps1
├── 📄 eslint.config.mjs
└── 📄 ARCHITECT_CONTEXT.md


## 🔑 Configuración Técnica
- **Framework:** Next.js 15 (App Router).
- **Base de Datos:** Supabase (RLS habilitado y políticas de lectura pública).
- **Automatización:** GitHub Actions (sync-inmovilla.yml) configurado cada hora.
- **Repositorio:** https://github.com/xavikuDEV/domus-bcn-2026

## 🎯 Roadmap Inmediato (Mañana)
1. **Tarea 6 (Prioridad):** Creación de Frontend: Galería de Inmuebles.
2. **Componente:** Diseñar PropertyCard.tsx para mostrar el ático sincronizado.
3. **Seguridad:** Verificar auditoría SSL (Tarea 4).
