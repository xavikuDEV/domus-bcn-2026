# 🏗️ Estructura del Proyecto: Domus BCN 2026
> Última actualización: 07/03/2026 00:28:09
> Total archivos fuente: **67** · **20** TypeScript · **17** JS · **1** CSS · **10** Markdown

├── 📁 .github
│   └── 📁 workflows
│       └── 📄 sync-inmovilla.yml
├── 📁 docs
│   ├── 📄 AGENT_ROLES.md
│   ├── 📄 API_INTEGRATION.md
│   ├── 📄 ARCHITECT_RULES.md
│   ├── 📄 ARCHITECTURE_OVERVIEW.md
│   ├── 📄 DATA_SCHEMA.md
│   └── 📄 TESTING_STRATEGY.md
├── 📁 public
│   ├── 📄 file.svg
│   ├── 📄 globe.svg
│   ├── 📄 next.svg
│   ├── 📄 vercel.svg
│   └── 📄 window.svg
├── 📁 scripts
│   ├── 📄 create-task.mjs
│   ├── 📄 cron-sync.mjs
│   ├── 📄 debug-notion-log.mjs
│   ├── 📄 debug-notion.mjs
│   ├── 📄 final-log-fix.mjs
│   ├── 📄 final-verify.mjs
│   ├── 📄 fire-test-runner.mjss
│   ├── 📄 force-log.mjs
│   ├── 📄 generate-context.ps1
│   ├── 📄 git-push.ps1
│   ├── 📄 health-check.mjs
│   ├── 📄 log-event.mjs
│   ├── 📄 pre-deploy.ps1
│   ├── 📄 sync.ps1
│   ├── 📄 test-notion-https.mjs
│   └── 📄 update-structure.ps1
├── 📁 src
│   ├── 📁 __tests__
│   │   ├── 📁 integration
│   │   │   ├── 📄 env.test.ts
│   │   │   ├── 📄 ingestion.test.ts
│   │   │   ├── 📄 notion-roadmap.test.ts
│   │   │   └── 📄 supabase.test.ts
│   │   └── 📁 unit
│   ├── 📁 app
│   │   ├── 📄 favicon.ico
│   │   ├── 📄 globals.css
│   │   ├── 📄 layout.tsx
│   │   └── 📄 page.tsx
│   ├── 📁 components
│   │   ├── 📄 ContactButton.tsx
│   │   ├── 📄 Navbar.tsx
│   │   ├── 📄 PropertyCard.tsx
│   │   └── 📄 PropertyGallery.tsx
│   ├── 📁 features
│   ├── 📁 hooks
│   ├── 📁 lib
│   │   ├── 📁 inmovilla
│   │   ├── 📁 notion
│   │   │   └── 📄 client.ts
│   │   ├── 📁 supabase
│   │   │   ├── 📄 client.ts
│   │   │   └── 📄 queries.ts
│   │   └── 📄 index.ts
│   ├── 📁 mocks
│   │   └── 📁 inmovilla
│   │       └── 📄 property-sample.json
│   ├── 📁 services
│   │   ├── 📁 curation
│   │   ├── 📁 ingestion
│   │   │   └── 📄 xml-processor.ts
│   │   ├── 📁 orchestrator
│   │   └── 📄 index.ts
│   └── 📁 types
│       ├── 📄 index.ts
│       └── 📄 inmovilla.ts
├── 📄 .gitignore
├── 📄 agents.md
├── 📄 ARCHITECT_CONTEXT.md
├── 📄 eslint.config.mjs
├── 📄 Fase1_OK.txt
├── 📄 fire_test.bat
├── 📄 menu.ps1
├── 📄 next-env.d.ts
├── 📄 next.config.ts
├── 📄 package.json
├── 📄 postcss.config.mjs
├── 📄 README.md
├── 📄 tsconfig.json
└── 📄 vitest.config.mts
