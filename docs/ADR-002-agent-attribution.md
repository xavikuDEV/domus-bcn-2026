# ADR-002: Lógica de Atribución de Agente por URL

> **Estado:** Aceptado
> **Fecha:** 08/03/2026
> **Autor:** Equipo Domus BCN 2026

## Contexto

El portal inmobiliario necesita un sistema de atribución que permita trackear qué agente comercial ha derivado a un cliente a ver un inmueble concreto. Cada agente tiene URLs personalizadas que comparte: `/inmueble/demo-001?agent=maria`.

## Decisión

### Mecanismo de Detección

1. **Query Parameter**: Se lee `?agent=name` de la URL al cargar cualquier página del portal.
2. **Persistencia en `localStorage`**: Si se detecta un agente, se guarda bajo la clave `domus_agent` en el navegador del cliente.
3. **Fallback**: Si no hay parámetro ni valor almacenado, el agente por defecto es **"Domus BCN"**.

### Implementación

- **`AgentProvider.tsx`**: React Context (`"use client"`) que envuelve las páginas dinámicas.
- **`useAgent()` hook**: Exporta `{ agentName: string }` para cualquier componente hijo.
- **Capitalización automática**: `?agent=maria` → muestra "Maria".

### Flujo

```
1. Usuario llega a /inmueble/123?agent=maria
2. AgentProvider lee searchParams → "maria"
3. Capitaliza → "Maria"
4. Guarda en localStorage("domus_agent", "Maria")
5. ContactSidebar muestra: "Maria — Agente inmobiliario"
6. Usuario navega a otro inmueble SIN ?agent
7. AgentProvider no detecta param → lee localStorage → "Maria"
8. La atribución se mantiene en toda la sesión
```

## Alternativas Consideradas

| Alternativa | Ventajas | Inconvenientes |
|-------------|----------|----------------|
| **Cookies** | Persisten entre sesiones, accesibles desde el servidor | Overhead en cada request HTTP, requiere política de cookies |
| **Session Storage** | No persiste si el usuario cierra la pestaña | Se pierde al cerrar el navegador |
| **Server-side params** | Más seguro, no requiere JS | Requiere pasar el param en cada navegación interna |
| **localStorage** ✅ | Simple, persiste entre pestañas, no afecta requests | Solo client-side, no accesible desde Server Components |

## Consecuencias

### Positivas
- Implementación simple y sin dependencias externas.
- La atribución se mantiene automáticamente durante toda la navegación.
- No genera overhead en el servidor.
- Compatible con la arquitectura Server Components de Next.js 15.

### Negativas / Riesgos
- Si el usuario borra `localStorage`, pierde la atribución.
- Si dos agentes comparten el mismo dispositivo, el último `?agent` sobrescribe al anterior (comportamiento deseado).
- No hay validación server-side del nombre del agente (aceptable en esta fase).

## Referencias

- `src/components/AgentProvider.tsx` — Implementación del Context
- `src/components/ContactSidebar.tsx` — Componente que consume `useAgent()`
- `src/app/inmueble/[id]/page.tsx` — Página que envuelve con `AgentProvider`
