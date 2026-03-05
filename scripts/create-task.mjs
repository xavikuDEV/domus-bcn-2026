import { Client } from "@notionhq/client";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const notion = new Client({ auth: process.env.NOTION_SECRET });
// Usamos el ID exacto que detectó el script detective:
const databaseId = "319a543c299c8018a2ae000b4527666c";

async function createTask() {
  try {
    console.log("📝 Intentando crear tarea en el Roadmap detectado...");

    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        // Esta debe ser la columna con el icono 'Aa'
        Tarea: {
          title: [{ text: { content: "🚀 Fase 0: Cimientos Completados" } }],
        },
        // He quitado Especialista y Estado para validar que el título funciona primero
      },
    });

    console.log("✅ ¡TAREA CREADA EXITOSAMENTE!");
    console.log(`🔗 Puedes verla aquí: ${response.url}`);
  } catch (error) {
    console.error("❌ Error de Notion:", error.message);
    console.log("\n💡 SOLUCIÓN RÁPIDA:");
    console.log(
      "1. Asegúrate de que la columna con el icono 'Aa' se llame 'Tarea'.",
    );
    console.log(
      "2. Verifica que has dado permisos a tu integración en Notion (Connect to).",
    );
  }
}

createTask();
