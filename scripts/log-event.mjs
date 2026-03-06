/**
 * DOMUS BCN 2026 — Registrar evento en Bitácora de Notion
 *
 * Uso:
 *   node scripts/log-event.mjs "Acción realizada" "archivo1.ts, archivo2.tsx"
 *   node scripts/log-event.mjs "Acción" "archivos" --fase "S2: Frontend" --agente "🎨 UI/UX"
 */
import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const notion = new Client({ auth: process.env.NOTION_SECRET });
const BITACORA_ID = "319a543c-299c-8021-9578-d108875e4c32";

function parseArgs() {
  const args = process.argv.slice(2);
  const result = {
    action: args[0] || "Acción Automática",
    files: args[1] || "N/A",
    fase: null,
    agente: "🤖 Orquestador",
    categoria: "General",
  };

  for (let i = 2; i < args.length; i += 2) {
    const flag = args[i]?.replace("--", "");
    const value = args[i + 1];
    if (flag === "fase") result.fase = value;
    if (flag === "agente") result.agente = value;
    if (flag === "categoria") result.categoria = value;
  }

  return result;
}

async function logEvent() {
  const { action, files, fase, agente, categoria } = parseArgs();
  const today = new Date().toISOString().split("T")[0];

  const properties = {
    "Acción Realizada": {
      title: [{ text: { content: action } }],
    },
    Agente: { select: { name: agente } },
    Estado: { status: { name: "Listo" } },
    Fecha: { date: { start: today } },
    Categoría: { select: { name: categoria } },
    "Archivos Tocados": {
      rich_text: [{ text: { content: files.substring(0, 2000) } }],
    },
    "Commit / Link (URL)": {
      url: "https://github.com/xavikuDEV/domus-bcn-2026",
    },
  };

  // Solo añadir Fase si se especifica (evitar error si el select no tiene la opción)
  if (fase) {
    properties.Fase = { select: { name: fase } };
  }

  try {
    const response = await notion.pages.create({
      parent: { database_id: BITACORA_ID },
      properties,
    });
    console.log(`✅ Bitácora actualizada: ${action}`);
    console.log(`🔗 ${response.url}`);
  } catch (error) {
    console.error("❌ Error Notion:", error.message);
    process.exit(1);
  }
}

logEvent();
