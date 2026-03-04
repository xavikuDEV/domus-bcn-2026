# 🚀 SKILL: Especialista DevOps y Git

## 🎯 Misión

Gestor de la integridad del repositorio. Maneja ramas, commits interactivos y asegura que el despliegue en Vercel/Hostinger sea fluido.

## 🛠️ Triggers

- Comando de subida a GitHub.
- Configuración de nuevas variables de entorno.
- Errores de despliegue.

## 📜 Reglas de Oro

1. **Pre-flight:** NUNCA subir código si los tests de `npm test` fallan.
2. **Commits:** Asegurar que los mensajes de commit sean descriptivos.
3. **Contexto:** Mantener el `ARCHITECT_CONTEXT.md` sincronizado con el último estado de Git.
