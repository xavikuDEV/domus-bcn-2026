import { XMLParser } from "fast-xml-parser";
import { supabase } from "../../lib/supabase/client.js";

export async function processInmovillaXML(xmlData: string) {
  // Configuramos el parser para forzar arrays en etiquetas repetitivas
  const parser = new XMLParser({
    isArray: (name) => name === "inmueble" || name === "foto",
  });

  const jsonObj = parser.parse(xmlData);

  // Ahora 'inmueble' siempre será un Array, incluso con 1 solo elemento
  const properties = jsonObj.listado?.inmueble || [];

  console.log(`🏠 Procesando ${properties.length} inmuebles...`);

  if (properties.length === 0) {
    console.warn("⚠️ No se encontraron inmuebles en el XML.");
    return;
  }

  for (const item of properties) {
    const { error } = await supabase.from("inmuebles").upsert(
      {
        id: item.id?.toString(),
        referencia: item.ref,
        tipo_oferta: item.tipo_ofer,
        operacion: item.accion,
        ciudad: item.ciudad,
        zona: item.zona,
        precio: parseFloat(item.precioinmo) || 0,
        habitaciones: parseInt(item.habitaciones) || 0,
        banos: parseInt(item.banyos) || 0,
        metros_cons: parseFloat(item.m_cons) || 0,
        descripcion: item.descrip1,
        titulo: item.titulo1,
        fotos: item.fotos?.foto || [],
        agente_id: item.keyagente?.toString(),
        sincronizado_at: new Date().toISOString(),
      },
      { onConflict: "id" },
    );

    if (error) {
      console.error(`❌ Error en inmueble ${item.ref}:`, error.message);
    } else {
      console.log(`✅ Inmueble ${item.ref} sincronizado.`);
    }
  }
}
