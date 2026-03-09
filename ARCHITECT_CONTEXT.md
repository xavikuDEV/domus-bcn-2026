# 🏗️ ARCHITECT CONTEXT: Domus BCN 2026
> Última actualización: 05/03/2026 23:12:00

## 📍 Estado Actual
- **Fase:** Fase 3.5 (Infraestructura de Sincronización) — **BLINDADA** 🛡️
- **Infraestructura:** **VALIDADA** ✅ (Seguridad PASS, Arquitectura PASS, Tests PASS)
- **Último Hito:** Misión 4.2 (Optimización de Imágenes AVIF/WebP) — **COMPLETADA** ✅
- **Siguiente:** Misión 4.3 (PWA Manifest) e Inicio Fase 5 (Property Cards)

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
> Auto-generado por `scripts/generate-context.ps1` — 09/03/2026 23:10

```
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

```

## 🔑 Configuración Técnica

- **Framework:** Next.js 15 (App Router, Server Components)
- **Base de Datos:** Supabase (RLS habilitado)
- **Styling:** Tailwind CSS v4
- **Testing:** Vitest + Test Sprite (E2E)
- **Repositorio:** <https://github.com/xavikuDEV/domus-bcn-2026>

## 🔒 Auditoría de Seguridad (05/03/2026)

- **Snyk SAST:** 0 vulnerabilidades ✅
- **Arquitectura:** 13/13 archivos < 200 líneas ✅
- **Tests:** All PASS ✅
- **RLS Supabase:** Activo ✅

## 🎯 Roadmap Inmediato

1. **Tarea 6:** Diseño de `PropertyCard.tsx` (Server Component)
2. **Componentes:** `PropertyGallery.tsx` (grid responsive)
3. **Queries:** `lib/supabase/queries.ts` (fetch tipado)

## 🔄 Protocolos de Operación Estándar (SOPs)

> **⚠️ OBLIGATORIO:** Ninguna tarea se da por cerrada sin completar este flujo.

| Paso | Acción | Herramienta |
|------|--------|-------------|
| 1️⃣ | **QA**: Ejecutar `npm test` y verificar verde | Vitest |
| 2️⃣ | **Bitácora**: Registrar hito en Notion | MCP Notion |
| 3️⃣ | **Vault**: Actualizar documentación si aplica | MCP Notion |
| 4️⃣ | **Roadmap**: Marcar tarea como "Listo" | MCP Notion |
| 5️⃣ | **Sync**: Commit + push a GitHub | MCP GitHub |

### 🤖 Protocolo de Ejecución Híbrida (Master Flow)
| Paso | Actor | Acción | Herramienta |
|------|-------|--------|-------------|
| 1️⃣ | **Orquestador** | Analiza la tarea y genera la instrucción | Antigravity |
| 2️⃣ | **Obrero** | Ejecuta el código y genera `logs/update.json` | Aider (Groq) |
| 3️⃣ | **Orquestador** | Valida el cambio y ejecuta `sync_notion.py` | Terminal |

## 📖 Roadmap de Documentación

### Fase 3.5 — Infraestructura Sync 🛡️
- **Sincronización Automática** configurada mediante `sync_master.py`.
- **Memoria Total (Drive)** instaurada.
- **Groq + Aider** implementados como herramientas de ahorro.

### Fase 4 — SEO y Rendimiento
- **Misión 4.2 (Imágenes AVIF/WebP)** ✅
- **Misión 4.3 (Manifest PWA)** ⏳
- SEO, Robots, Metatags.

