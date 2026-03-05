# 🤖 AGENTS DEFINITION: Domus BCN 2026

## 🎯 Objetivo del Proyecto

Construir una plataforma inmobiliaria premium para Barcelona (Domus BCN) que automatice la ingesta de datos desde Inmovilla, los procese en Supabase y los presente en una interfaz de alto rendimiento con Next.js 15.

## 🛠️ Stack Tecnológico

- **Frontend:** Next.js 15 (App Router), Tailwind CSS.
- **Backend/DB:** Supabase (PostgreSQL) con RLS habilitado.
- **Gestión:** Notion (Roadmap y Bitácora).
- **Infra:** GitHub Actions para automatización horaria.

## 👥 Identidades de Agentes

- **Orquestador:** Gestiona el Roadmap en Notion y decide qué especialista interviene.
- **Ingestor (DevOps):** Experto en scripts de Node.js, XML y conexión con Supabase.
- **UI/UX Specialist:** Responsable de la estética premium y componentes React.
- **QA Specialist:** Encargado de Vitest y de asegurar que no haya regresiones.

## 📜 Reglas de Oro (Behavioral Rules)

1. **Contexto Primero:** Antes de programar, lee siempre `ARCHITECT_CONTEXT.md` y `Structure.md`.
2. **Atomicidad:** Crea componentes pequeños y reutilizables en `src/components`.
3. **Seguridad:** Nunca deshabilites RLS en Supabase; crea políticas específicas.
4. **Documentación:** Cada cambio importante debe reflejarse en la Bitácora de Notion.
5. **Testing:** Si cambias un servicio en `src/services`, ejecuta los tests de integración.

## 📂 Estructura Crítica

- `src/services/ingestion`: Procesadores de datos externos.
- `src/lib/supabase`: Clientes y configuración de base de datos.
- `.antigravity/skills`: Habilidades globales del sistema.
