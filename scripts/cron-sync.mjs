/**
 * DOMUS BCN 2026 — Sincronización horaria de Inmovilla
 *
 * Ejecuta el procesador XML para sincronizar inmuebles
 * desde el feed de Inmovilla a Supabase.
 *
 * Uso:
 *   node --import tsx scripts/cron-sync.mjs
 *
 * En GitHub Actions se ejecuta con el workflow sync-inmovilla.yml
 */
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Configurar entorno
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

async function runSync() {
  const startTime = Date.now();
  console.log("🚀 Iniciando sincronización horaria...");
  console.log(`⏰ ${new Date().toLocaleString("es-ES")}`);

  try {
    const xmlUrl = process.env.INMOVILLA_XML_URL;
    if (!xmlUrl) {
      throw new Error("Falta la variable de entorno INMOVILLA_XML_URL");
    }

    // Import dinámico para compatibilidad con tsx
    const { processInmovillaXML } = await import(
      "../src/services/ingestion/xml-processor.ts"
    );

    const { success, count, errors } = await processInmovillaXML(xmlUrl);
    const duration = ((Date.now() - startTime) / 1000).toFixed(1);

    if (success) {
      console.log(
        `✅ Sincronización exitosa en ${duration}s. Inmuebles procesados: ${count}`,
      );
    } else {
      console.error("❌ Errores durante la sincronización:", errors);
      process.exit(1);
    }
  } catch (error) {
    console.error("💥 Error crítico en cron-sync:", error.message);
    process.exit(1);
  }
}

runSync();
