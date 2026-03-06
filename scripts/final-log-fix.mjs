
import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const notion = new Client({ auth: process.env.NOTION_SECRET });
// USAMOS EL ID QUE FUNCIONA EN RETRIEVE_DATABASE
const BITACORA_ID = "319a543c-299c-8021-9578-d108875e4c32";

async function main() {
  const properties = {
    "Acción Realizada": {
      title: [{ text: { content: "Cierre de Fase 1: Sellado Técnico y Gobernanza OK ✅" } }]
    },
    "Agente": { select: { name: "🤖 Orquestador" } },
    "Estado": { status: { name: "Listo" } },
    "Impacto": { select: { name: "Alto" } },
    "Fecha": { date: { start: new Date().toISOString().split("T")[0] } }
  };

  try {
    const response = await notion.pages.create({
      parent: { database_id: BITACORA_ID },
      properties,
    });
    console.log(`✅ Bitácora: ${response.url}`);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

main();
