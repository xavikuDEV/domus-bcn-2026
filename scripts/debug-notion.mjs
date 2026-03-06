/**
 * DOMUS BCN 2026 — Debug Notion: Lista todos los objetos accesibles
 *
 * Útil para encontrar IDs de bases de datos, comprobar permisos,
 * y verificar que la integración tiene acceso correcto.
 *
 * Uso: node scripts/debug-notion.mjs
 */
import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const notion = new Client({ auth: process.env.NOTION_SECRET });

async function listEverything() {
  try {
    console.log("📡 Escaneando objetos accesibles en Notion...\n");
    const response = await notion.search({});

    if (response.results.length === 0) {
      console.log(
        "❌ La integración no tiene acceso a ningún objeto.",
      );
      console.log("💡 Ve a tu página/base en Notion → '...' → 'Connect to' y añade tu integración.");
      return;
    }

    // Agrupar por tipo
    const databases = [];
    const pages = [];

    response.results.forEach((obj) => {
      const title =
        obj.title?.[0]?.plain_text ||
        obj.properties?.Tarea?.title?.[0]?.plain_text ||
        obj.properties?.["Acción Realizada"]?.title?.[0]?.plain_text ||
        obj.properties?.Nombre?.title?.[0]?.plain_text ||
        "Sin título";

      const entry = { title, id: obj.id, url: obj.url };

      if (obj.object === "database") {
        databases.push(entry);
      } else {
        pages.push(entry);
      }
    });

    // Mostrar bases de datos
    if (databases.length > 0) {
      console.log("📊 BASES DE DATOS:");
      databases.forEach((db) => {
        console.log(`  📋 "${db.title}"`);
        console.log(`     ID: ${db.id}`);
        console.log(`     🔗 ${db.url}\n`);
      });
    }

    // Mostrar páginas (últimas 10)
    if (pages.length > 0) {
      console.log(`📄 PÁGINAS (${pages.length} encontradas, mostrando últimas 10):`);
      pages.slice(0, 10).forEach((page) => {
        console.log(`  📝 "${page.title}" | ID: ${page.id}`);
      });
    }

    console.log(`\n📈 Total: ${databases.length} bases de datos, ${pages.length} páginas.`);
  } catch (error) {
    console.error("❌ Error:", error.message);
    if (error.code === "unauthorized") {
      console.log("💡 Verifica que NOTION_SECRET en .env.local es correcto.");
    }
  }
}

listEverything();
