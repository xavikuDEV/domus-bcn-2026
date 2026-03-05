import { processInmovillaXML } from '../src/services/xml-processor.ts';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Configurar entorno
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function runSync() {
  console.log('🚀 Iniciando sincronización horaria...');
  try {
    const xmlUrl = process.env.INMOVILLA_XML_URL;
    if (!xmlUrl) {
      throw new Error('Falta la variable de entorno INMOVILLA_XML_URL');
    }

    const { success, count, errors } = await processInmovillaXML(xmlUrl);

    if (success) {
      console.log(`✅ Sincronización exitosa. Inmuebles procesados: ${count}`);
    } else {
      console.error('❌ Errores detectados durante la sincronización:', errors);
      process.exit(1);
    }
  } catch (error) {
    console.error('💥 Error crítico en el cron-sync:', error);
    process.exit(1);
  }
}

runSync();
