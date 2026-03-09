# 🏗️ Estructura del Proyecto: Domus BCN 2026
> Última actualización: 09/03/2026 23:10:47
> Total archivos fuente: **109** · **50** TypeScript · **20** JS · **2** CSS · **13** Markdown

├── 📁 .aider.tags.cache.v4
│   └── 📄 cache.db
├── 📁 .github
│   └── 📁 workflows
│       └── 📄 sync-inmovilla.yml
├── 📁 docs
│   ├── 📄 ADR-002-agent-attribution.md
│   ├── 📄 AGENT_ROLES.md
│   ├── 📄 API_INTEGRATION.md
│   ├── 📄 ARCHITECT_RULES.md
│   ├── 📄 ARCHITECTURE_OVERVIEW.md
│   ├── 📄 DATA_SCHEMA.md
│   └── 📄 TESTING_STRATEGY.md
├── 📁 logs
├── 📁 public
│   ├── 📄 file.svg
│   ├── 📄 globe.svg
│   ├── 📄 next.svg
│   ├── 📄 robots.txt
│   ├── 📄 vercel.svg
│   └── 📄 window.svg
├── 📁 scripts
│   ├── 📄 create-task.mjs
│   ├── 📄 cron-sync.mjs
│   ├── 📄 debug-notion-log.mjs
│   ├── 📄 debug-notion.mjs
│   ├── 📄 final-log-fix.mjs
│   ├── 📄 final-push.mjs
│   ├── 📄 final-push2.mjs
│   ├── 📄 final-verify.mjs
│   ├── 📄 fire-test-runner.mjss
│   ├── 📄 fixImages.ts
│   ├── 📄 force-log.mjs
│   ├── 📄 generate-context.ps1
│   ├── 📄 git-push.ps1
│   ├── 📄 health-check.mjs
│   ├── 📄 init-phase-2.mjs
│   ├── 📄 log-event.mjs
│   ├── 📄 pre-deploy.ps1
│   ├── 📄 sync_master.py
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
│   │   ├── 📁 contacto
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 inmueble
│   │   │   └── 📁 [id]
│   │   ├── 📁 inmuebles
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 nosotros
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 servicios
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 valoracion
│   │   │   └── 📄 page.tsx
│   │   ├── 📄 favicon.ico
│   │   ├── 📄 globals.css
│   │   ├── 📄 layout.tsx
│   │   ├── 📄 page.tsx
│   │   └── 📄 sitemap.ts
│   ├── 📁 components
│   │   ├── 📄 AdvancedFilterSidebar.tsx
│   │   ├── 📄 AgentProvider.tsx
│   │   ├── 📄 Breadcrumbs.tsx
│   │   ├── 📄 ContactButton.tsx
│   │   ├── 📄 ContactSidebar.tsx
│   │   ├── 📄 DynamicMap.tsx
│   │   ├── 📄 EnergyRating.tsx
│   │   ├── 📄 FloatingButtons.tsx
│   │   ├── 📄 Footer.tsx
│   │   ├── 📄 HeroSearchBar.tsx
│   │   ├── 📄 ImageWithFallback.tsx
│   │   ├── 📄 MapWrapper.tsx
│   │   ├── 📄 MortgageCalculator.tsx
│   │   ├── 📄 Navbar.tsx
│   │   ├── 📄 PropertyCard.tsx
│   │   ├── 📄 PropertyDetails.tsx
│   │   ├── 📄 PropertyFeatures.tsx
│   │   ├── 📄 PropertyGallery.tsx
│   │   ├── 📄 PropertyGalleryCarousel.tsx
│   │   ├── 📄 PropertyGallerySwiper.tsx
│   │   ├── 📄 PropertyHeader.tsx
│   │   ├── 📄 PropertyNavigation.tsx
│   │   ├── 📄 PropertyStatsBar.tsx
│   │   ├── 📄 ShareModal.tsx
│   │   ├── 📄 SimilarProperties.tsx
│   │   └── 📄 TestimonialsCarousel.tsx
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
│   ├── 📁 styles
│   │   └── 📄 swiper-custom.css
│   └── 📁 types
│       ├── 📄 index.ts
│       └── 📄 inmovilla.ts
├── 📁 supabase
│   └── 📄 seed.sql
├── 📄 .ai_context.md
├── 📄 .aider.chat.history.md
├── 📄 .aider.input.history
├── 📄 .gitignore
├── 📄 agents.md
├── 📄 ARCHITECT_CONTEXT.md
├── 📄 eslint.config.mjs
├── 📄 fire_test.bat
├── 📄 menu.ps1
├── 📄 next-env.d.ts
├── 📄 next.config.ts
├── 📄 package.json
├── 📄 postcss.config.mjs
├── 📄 push.bat
├── 📄 README.md
├── 📄 tsconfig.json
└── 📄 vitest.config.mts
