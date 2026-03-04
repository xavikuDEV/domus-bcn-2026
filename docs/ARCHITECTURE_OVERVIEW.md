# 🏛️ Arquitectura del Sistema: Domus BCN 2026

## Flujo de Datos

1. **Captura:** El Agente Ingestor consulta la API de Inmovilla.
2. **Procesado:** Los datos se validan contra los contratos en `src/types/inmovilla.ts`.
3. **Almacenamiento:** Se guardan en Supabase (PostgreSQL).
4. **Monitorización:** Cada paso genera un log en la Bitácora de Notion mediante `scripts/log-event.mjs`.
5. **Visualización:** Next.js 15 renderiza los datos usando Server Components.
