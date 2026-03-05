import { Client } from "@notionhq/client";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const notion = new Client({ auth: process.env.NOTION_SECRET });

async function listEverything() {
  try {
    console.log("📡 Listando todos los objetos accesibles...");
    const response = await notion.search({});

    if (response.results.length === 0) {
      console.log(
        "❌ La IA no ve NADA. Ve a tu Notion -> '...' -> 'Connect to' y añade tu integración.",
      );
      return;
    }

    console.log("\n✅ OBJETOS ENCONTRADOS:");
    response.results.forEach((obj) => {
      const title =
        obj.title?.[0]?.plain_text ||
        obj.properties?.Tarea?.title?.[0]?.plain_text ||
        "Sin título";
      console.log(
        `- [${obj.object.toUpperCase()}] Nombre: "${title}" | ID: ${obj.id}`,
      );
    });
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

listEverything();
