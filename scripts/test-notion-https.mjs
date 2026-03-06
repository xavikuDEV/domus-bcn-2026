
import https from "https";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config({ path: ".env.local" });

const BITACORA_ID = "319a543c-299c-8021-9578-d108875e4c32";

const data = JSON.stringify({
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
});

const options = {
  hostname: "api.notion.com",
  path: "/v1/pages",
  method: "POST",
  headers: {
    "Authorization": `Bearer ${process.env.NOTION_SECRET}`,
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28",
    "Content-Length": data.length
  }
};

const req = https.request(options, (res) => {
  let body = "";
  res.on("data", (chunk) => body += chunk);
  res.on("end", () => {
    fs.writeFileSync("notion_final_debug.json", JSON.stringify({
      statusCode: res.statusCode,
      headers: res.headers,
      body: JSON.parse(body)
    }, null, 2));
    process.exit(0);
  });
});

req.on("error", (err) => {
  fs.writeFileSync("notion_final_debug.json", JSON.stringify({ error: err.message }, null, 2));
  process.exit(1);
});

req.write(data);
req.end();
