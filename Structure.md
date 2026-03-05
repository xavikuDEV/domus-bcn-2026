# 🏗️ Estructura del Proyecto: Domus BCN 2026
> Última actualización: 05/03/2026 22:54:26

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
│       ├── 📄 ui_ux_specialist.md
│       ├── 📄 technical_writer_specialist.md
│       ├── 📄 sql_supabase_expert.md
│       ├── 📄 software_architect_specialist.md
│       ├── 📄 seo_performance_expert.md
│       ├── 📄 security_specialist.md
│       ├── 📄 qa_specialist.md
│       ├── 📄 orchestrator.md
│       ├── 📄 notion_sync.md
│       ├── 📄 ingestion_specialist.md
│       ├── 📄 e2e_testing_specialist.md
│       └── 📄 devops_sync.md
├── 📄 vitest.config.mts
├── 📄 tsconfig.json
├── 📄 README.md
├── 📄 postcss.config.mjs
├── 📄 package.json
├── 📄 next.config.ts
├── 📄 next-env.d.ts
├── 📄 menu.ps1
├── 📄 Fase1_OK.txt
├── 📄 eslint.config.mjs
├── 📄 ARCHITECT_CONTEXT.md
└── 📄 agents.md
