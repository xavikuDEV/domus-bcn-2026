
import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const notion = new Client({ auth: process.env.NOTION_SECRET });
const ROADMAP_ID = "319a543c299c80f1be53f53c1a1598dc";

const tasks = [
  { id: "[7.0]", title: "Rutas Dinámicas /inmueble/[id]", specialist: "🏗️ Orquestador" },
  { id: "[8.0]", title: "Ficha de Detalle (UI Alta Fidelidad)", specialist: "🎨 UI/UX Specialist" },
  { id: "[9.0]", title: "Integración de Mapas y Galería Pro", specialist: "🏗️ Orquestador" }
];

async function main() {
  for (const task of tasks) {
    try {
      await notion.pages.create({
        parent: { database_id: ROADMAP_ID },
        properties: {
          "Tarea": {
            title: [{ text: { content: `${task.id} ${task.title}` } }]
          },
          "Especialista": {
            select: { name: task.specialist }
          },
          "Status": {
            status: { name: "Sin empezar" }
          }
        }
      });
      console.log(`✅ Tarea creada: ${task.id} ${task.title}`);
    } catch (error) {
      console.error(`❌ Error creando ${task.id}:`, error.message);
    }
  }
}

main();
