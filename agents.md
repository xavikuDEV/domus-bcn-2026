# 🤖 AGENTS DEFINITION: Domus BCN 2026

## 🎯 Objetivo del Proyecto

Construir una plataforma inmobiliaria premium para Barcelona (Domus BCN) que automatice la ingesta de datos desde Inmovilla, los procese en Supabase y los presente en una interfaz de alto rendimiento con Next.js 15.

## 🛠️ Stack Tecnológico

- **Frontend:** Next.js 15 (App Router), Tailwind CSS.
- **Backend/DB:** Supabase (PostgreSQL) con RLS habilitado.
- **Gestión:** Notion (Roadmap y Bitácora).
- **Infra:** GitHub Actions para automatización horaria.

## 👥 Identidades de Agentes

- **Orquestador (Supervisor):** El cerebro del búnker. Gestiona el Roadmap, supervisa el código generado por Aider y ejecuta la sincronización final. Es el único con autoridad para delegar tareas.
- **Aider (Obrero Groq):** Brazo ejecutor de IA. Experto en generación de código rápido, SEO y refactorizaciones. Trabaja bajo la supervisión directa del Orquestador.
- **Ingestor (DevOps):** Experto en scripts de Node.js, XML y conexión con Supabase.
- **UI/UX Specialist:** Responsable de la estética premium y componentes React.
- **QA Specialist:** Encargado de Vitest y de asegurar que no haya regresiones.
-

## 📜 Reglas de Oro (Behavioral Rules)

1. **Contexto Primero:** Antes de programar, lee siempre `ARCHITECT_CONTEXT.md` y `Structure.md`.
2. **Atomicidad:** Crea componentes pequeños y reutilizables en `src/components`.
3. **Seguridad:** Nunca deshabilites RLS en Supabase; crea políticas específicas.
4. **Documentación:** Cada cambio importante debe reflejarse en la Bitácora de Notion.
5. **Testing:** Si cambias un servicio en `src/services`, ejecuta los tests de integración.
6. **Delegación Inteligente (Master Flow):** El Orquestador delega tareas técnicas repetitivas (SEO, CSS, metadatos) en **Aider (Groq)** para optimizar costes.
   - **Acción:** El Orquestador dispara el comando `aider --model groq/...`.
   - **Supervisión:** El Orquestador revisa el código resultante antes de dar la tarea por buena.
   - **Log Detallado:** El `logs/update.json` DEBE incluir un `summary` técnico de 3-4 líneas (archivos, lógica aplicada e impacto), evitando descripciones genéricas. Por ejemplo: "Se agregó el componente CardPropiedad que muestra una tarjeta con la información de una propiedad. Se agregaron los archivos src/components/CardPropiedad.tsx y src/components/CardPropiedad.module.css. El impacto es mediano ya que se agregó un nuevo componente."
   - **Sincronización Git (Obligatoria):** Tras cada éxito en Notion, el Orquestador DEBE ejecutar:
     `git add .`
     `git commit -m "docs: sync notion [task name]"` (Solo si hay cambios pendientes)
     `git push origin main`
     Esto asegura que el código y el Roadmap en la nube estén siempre en espejo.

## 📂 Estructura Crítica

- `src/services/ingestion`: Procesadores de datos externos.
- `src/lib/supabase`: Clientes y configuración de base de datos.
- `.antigravity/skills`: Habilidades globales del sistema.
- `logs/update.json`: Archivo de log para sincronización con Notion.
- `scripts/sync_notion.py`: Script para sincronización con Notion.
