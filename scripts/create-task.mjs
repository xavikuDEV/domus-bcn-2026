/**
 * DOMUS BCN 2026 — Crear tarea en el Roadmap de Notion
 *
 * Uso:
 *   node scripts/create-task.mjs "Nombre de la tarea"
 *   node scripts/create-task.mjs "Tarea" --especialista "🎨 UI/UX Specialist" --estado "En progreso"
 */
import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const notion = new Client({ auth: process.env.NOTION_SECRET });
const ROADMAP_ID = "319a543c299c8018a2ae000b4527666c";

function parseArgs() {
  const args = process.argv.slice(2);
  const result = {
    title: args[0] || "Nueva Tarea",
    especialista: null,
    estado: "Sin empezar",
  };

  for (let i = 1; i < args.length; i += 2) {
    const flag = args[i]?.replace("--", "");
    const value = args[i + 1];
    if (flag === "especialista") result.especialista = value;
    if (flag === "estado") result.estado = value;
  }

  return result;
}

async function createTask() {
  const { title, especialista, estado } = parseArgs();

  const properties = {
    Tarea: {
      title: [{ text: { content: title } }],
    },
  };

  // Añadir Especialista si se proporciona
  if (especialista) {
    properties.Especialista = { select: { name: especialista } };
  }

  // Añadir Estado si la columna existe
  try {
    const response = await notion.pages.create({
      parent: { database_id: ROADMAP_ID },
      properties,
    });

    console.log(`✅ Tarea creada: "${title}"`);
    console.log(`🔗 ${response.url}`);
  } catch (error) {
    console.error("❌ Error de Notion:", error.message);
    console.log("\n💡 Solución:");
    console.log("1. Verifica que la columna 'Tarea' (Aa) existe en tu Roadmap.");
    console.log("2. Verifica los permisos de la integración (Connect to).");
    process.exit(1);
  }
}

createTask();
