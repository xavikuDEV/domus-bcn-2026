import { Client } from "@notionhq/client";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const notion = new Client({ auth: process.env.NOTION_SECRET });
const databaseId = process.env.NOTION_DATABASE_ID;

async function inaugurarProyecto() {
  try {
    console.log("📡 Conectando con la Bitácora...");
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        "Acción Realizada": {
          title: [
            { text: { content: "🚀 Inicialización del Sistema Multi-Agente" } },
          ],
        },
        Agente: {
          select: { name: "🤖 Orquestador" },
        },
        Fase: {
          select: { name: "S1: Backend" },
        },
        Estado: {
          status: { name: "Listo" }, // 👈 Ajustado según tu imagen image_b00755.png
        },
        "Commit / Link (URL)": {
          url: "https://github.com/tu-usuario/domus-bcn-2026",
        },
      },
    });
    console.log("✅ ¡ÉXITO! Fila creada en Notion.");
  } catch (error) {
    console.error("❌ Error de Notion:", error.message);
  }
}

inaugurarProyecto();
