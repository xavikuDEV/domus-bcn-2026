---
name: notion_sync
description: Protocolo para registrar eventos y actualizar el roadmap en el HQ de Notion.
trigger: Cada vez que se complete una tarea, se inicie un módulo o ocurra un error crítico.
---

# Protocolo de Sincronización Notion - Domus BCN 2026

## Objetivo
Mantener la trazabilidad total del proyecto en el ID de página: `319a543c299c80979753ca5d5678b7de`.

## Reglas de Registro (Bitácora)
Cuando realices una acción técnica, crea una entrada en "📟 Bitácora de Eventos" con:
- **Acción Realizada:** Resumen claro (Ej: "Scaffolding de Next.js completado").
- **Agente:** Tu rol actual (Implementador, Seguridad, QA, Orquestador).
- **Fase:** La semana correspondiente (S1, S2, S3, S4).
- **Estado:** `Done` si fue éxito, `Error` si falló.
- **Link / Commit:** URL del commit de GitHub o archivo relevante.

## Reglas de Roadmap
- Antes de empezar una tarea, muévela a `In Progress`.
- Al finalizar, muévela a `Done` y añade un comentario con el resultado.
- Si detectas una necesidad técnica nueva, crea una tarjeta en `No iniciado` con prioridad `Baja` o `Media`.

## Revelación Progresiva
No pidas acceso a toda la base de datos de golpe. Usa los IDs específicos proporcionados para interactuar solo con las tablas necesarias.