
import fetch from "node-fetch";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config({ path: ".env.local" });

const BITACORA_ID = "319a543c-299c-8021-9578-d108875e4c32";

async function main() {
  const url = "https://api.notion.com/v1/pages";
  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.NOTION_SECRET}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28"
    },
    body: JSON.stringify({
      parent: { database_id: BITACORA_ID },
      properties: {
        "Acción Realizada": {
          title: [{ text: { content: "Cierre de Fase 1: Sellado Técnico y Gobernanza OK" } }]
        },
        "Agente": {
          select: { name: "🤖 Orquestador" }
        },
        "Impacto": {
          select: { name: "Alto" }
        },
        "Fase": {
          select: { name: "S1: Backend" }
        }
      }
    })
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    fs.writeFileSync("notion_debug.json", JSON.stringify(data, null, 2));
    console.log("NOTION RESPONSE SAVED TO notion_debug.json");
  } catch (err) {
    fs.writeFileSync("notion_debug.json", JSON.stringify({ error: err.message }, null, 2));
  }
}

main();
