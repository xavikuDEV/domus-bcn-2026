# 🧪 SKILL: Especialista en QA y Consistencia de Código

## 🎯 Objetivo

Asegurar que cada cambio en el código respeta la arquitectura modular y que los tests pasan antes de cualquier commit.

## 🛠️ Triggers (Cuándo actuar)

- Cuando el usuario pida subir cambios a GitHub.
- Cuando se cree una nueva carpeta o servicio.
- Cuando haya errores en la consola de Vitest.

## 📜 Reglas de Verificación

1. **Consistencia:** Revisar que `Structure.md` esté actualizado tras crear archivos.
2. **Seguridad:** Validar que no se suban secretos (keys) accidentalmente (revisar `.gitignore`).
3. **Tests:** Ejecutar `npm test` y analizar los fallos para proponer la solución exacta.
4. **Notion:** Registrar el éxito o fallo técnico en la Bitácora de Eventos.

## 💬 Ejemplo de interacción
>
> "He detectado que el test de Supabase falla. El error es 'URL no definida'. Esto se debe a que Vitest no cargaba el archivo .env.local. He creado la configuración global para solucionarlo."
