# 🧠 ARCHITECT CONTEXT: Domus BCN 2026
> Última actualización: 05/03/2026 00:07:25

## 📍 Estado Actual
- **Fase:** Semana 1 - Cimientos e Infraestructura.
- **Último Hito:** Repositorio GitHub vinculado y Bitácora Notion operativa.

## 🏗️ Estructura del Proyecto
# 🏗️ Estructura del Proyecto: Domus BCN 2026
> Última actualización: 05/03/2026 00:07:24

├── 📁 src
│   ├── 📁 types
│   │   ├── 📄 inmovilla.ts
│   │   └── 📄 index.ts
│   ├── 📁 services
│   │   ├── 📁 orchestrator
│   │   ├── 📁 ingestion
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
│           └── 📄 env.test.ts
├── 📁 scripts
│   ├── 📄 update-structure.ps1
│   ├── 📄 sync.ps1
│   ├── 📄 log-event.mjs
│   ├── 📄 git-push.ps1
│   └── 📄 generate-context.ps1
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
- **Framework:** Next.js 15 (App Router)
- **Base de Datos:** Supabase (PostgreSQL)
- **Comunicación:** Notion API (Bitácora de Eventos)
- **Repositorio:** https://github.com/xavikuDEV/domus-bcn-2026

## 🎯 Roadmap Inmediato
1. Finalizar automatización de documentación (Menú Principal).
2. Crear Agente de Ingesta (Inmovilla API).
3. Diseñar Schema de base de datos para agentes.
