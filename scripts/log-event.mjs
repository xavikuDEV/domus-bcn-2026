import { Client } from "@notionhq/client";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const notion = new Client({ auth: process.env.NOTION_SECRET });
const databaseId = process.env.NOTION_DATABASE_ID;

async function logEvent() {
  const [, , action, files] = process.argv;

  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        "Acción Realizada": {
          title: [{ text: { content: action || "Acción Automática" } }],
        },
        Agente: { select: { name: "🤖 Orquestador" } },
        Fase: { select: { name: "S1: Backend" } },
        Estado: { status: { name: "Listo" } },
        "Archivos Tocados": {
          rich_text: [{ text: { content: files || "N/A" } }],
        },
        "Commit / Link (URL)": {
          url: "https://github.com/xavikuDEV/domus-bcn-2026",
        },
      },
    });
    console.log("✅ Bitácora actualizada en Notion.");
  } catch (error) {
    console.error("❌ Error Notion:", error.message);
  }
}

logEvent();
