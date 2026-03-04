# 🧪 Estrategia de Testing: Domus BCN 2026

## 1. Tests de Integración (`src/__tests__/integration`)

- **Objetivo:** Verificar que las conexiones externas (Supabase, Notion, Inmovilla) funcionan.
- **Ejecución:** Obligatoria antes de cada `git push`.

## 2. Tests Unitarios (`src/__tests__/unit`)

- **Objetivo:** Probar la lógica interna de los agentes (limpieza de datos, cálculos).
- **Regla:** Deben ejecutarse sin conexión a Internet (usando Mocks).

## 3. Tests E2E (`src/__tests__/e2e`)

- **Objetivo:** Probar la lógica interna de los agentes (limpieza de datos, cálculos).
- **Regla:** Deben ejecutarse sin conexión a Internet (usando Mocks).

## 4. Tests de Integración (`src/__tests__/integration`)

- **Objetivo:** Verificar que las conexiones externas (Supabase, Notion, Inmovilla) funcionan.
- **Ejecución:** Obligatoria antes de cada `git push`.
