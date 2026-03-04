# 🔌 Integración de API: Inmovilla

## 🔑 Credenciales Requeridas

- `UserToken`: Identificador de usuario.
- `AppToken`: Token de aplicación.

## 📡 Endpoints Críticos

- **GET /Inmuebles**: Recuperación del listado completo.
- **GET /Inmueble/{id}**: Detalles extendidos de una propiedad específica.

## 🚦 Estrategia de Rate Limiting

- Los agentes deben implementar reintentos con **backoff exponencial** si reciben un error 429.

## 📊 Límites de Llamadas

- **Ingestor**: 1000 llamadas por hora.
- **Curador**: 500 llamadas por hora.
- **Orquestador**: 100 llamadas por hora.
