
import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const notion = new Client({ auth: process.env.NOTION_SECRET });
const BITACORA_ID = "319a543c-299c-8021-9578-d108875e4c32";

async function main() {
  try {
    const response = await notion.pages.create({
      parent: { database_id: BITACORA_ID },
      properties: {
        "Acción Realizada": {
          title: [{ text: { content: "Cierre de Fase 1: Sellado Técnico y Gobernanza OK" } }]
        },
        "Agente": {
          select: { name: "🤖 Orquestador" }
        },
        "Fase": {
          select: { name: "S1: Backend" }
        },
        "Impacto": {
          select: { name: "Alto" }
        }
      }
    });
    console.log("SUCCESS:", response.url);
  } catch (error) {
    console.error("ERROR:", error.message);
    process.exit(1);
  }
}

main();
