/**
 * DOMUS BCN 2026 — Registrar evento en Bitácora de Notion
 *
 * Uso básico:
 *   node scripts/log-event.mjs "Acción realizada" "archivos"
 *
 * Uso completo (desde git-push.ps1):
 *   node scripts/log-event.mjs "Acción" "archivos" --hash "abc1234" --impacto "Alto" --duracion "45s" --fase "S2: Frontend"
 *
 * Flags opcionales: --fase, --agente, --categoria, --hash, --impacto, --duracion
 */
import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const notion = new Client({ auth: process.env.NOTION_SECRET });

const normalizeId = (id) => {
  if (!id) return null;
  if (id.includes("-")) return id;
  return id.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, "$1-$2-$3-$4-$5");
};

const BITACORA_ID =
  normalizeId(process.env.NOTION_BITACORA_ID) ||
  "319a543c-299c-8021-9578-d108875e4c32";
const REPO_URL = "https://github.com/xavikuDEV/domus-bcn-2026";

function parseArgs() {
  const args = process.argv.slice(2);
  const result = {
    action: args[0] || "Acción Automática",
    files: args[1] || "N/A",
    fase: null,
    agente: "🤖 Orquestador",
    categoria: "General",
    hash: null,
    impacto: "Medio",
    duracion: null,
  };

  for (let i = 2; i < args.length; i += 2) {
    const flag = args[i]?.replace("--", "");
    const value = args[i + 1];
    if (flag === "fase") result.fase = value;
    if (flag === "agente") result.agente = value;
    if (flag === "categoria") result.categoria = value;
    if (flag === "hash") result.hash = value;
    if (flag === "impacto") result.impacto = value;
    if (flag === "duracion") result.duracion = value;
  }

  return result;
}

async function logEvent() {
  const { action, files, fase, agente, categoria, hash, impacto, duracion } =
    parseArgs();

  const now = new Date();
  const today = now.toISOString().split("T")[0];
  const hora = now.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // Construir URL de commit si hay hash
  const commitUrl = hash ? `${REPO_URL}/commit/${hash}` : REPO_URL;

  const properties = {
    "Acción Realizada": {
      title: [{ text: { content: action } }],
    },
    Agente: { select: { name: agente } },
    Estado: { status: { name: "Listo" } },
    Fecha: { date: { start: today } },
    Hora: {
      rich_text: [{ text: { content: hora } }],
    },
    Categoría: { select: { name: categoria } },
    Impacto: { select: { name: impacto } },
    "Archivos Tocados": {
      rich_text: [{ text: { content: files.substring(0, 2000) } }],
    },
    "Commit / Link (URL)": {
      url: commitUrl,
    },
  };

  // Añadir Duración si se especifica
  if (duracion) {
    properties["Duración"] = {
      rich_text: [{ text: { content: duracion } }],
    };
  }

  // Añadir Fase si se especifica
  if (fase) {
    properties.Fase = { select: { name: fase } };
  }

  try {
    const response = await notion.pages.create({
      parent: { database_id: BITACORA_ID },
      properties,
    });
    console.log(`✅ Bitácora: ${action}`);
    console.log(`🕐 Hora: ${hora} | Impacto: ${impacto}${duracion ? ` | Duración: ${duracion}` : ""}`);
    if (hash) {
      console.log(`🔗 ${commitUrl}`);
    }
    console.log(`📎 ${response.url}`);
  } catch (error) {
    console.error("❌ Error Notion:", error.message);
    if (error.message.includes("property")) {
      console.log("\n💡 Puede que falten columnas en la Bitácora.");
      console.log("   Ejecuta: node scripts/debug-notion.mjs para verificar.");
    }
    process.exit(1);
  }
}

logEvent();
