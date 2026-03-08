import { supabase } from "./client";
import type { InmuebleInmovilla } from "../../types/inmovilla";

export type { InmuebleInmovilla };

/**
 * Fetch all properties from the `inmuebles` table.
 * Columns match exactly the DB schema (source: xml-processor.ts).
 */
export async function getInmuebles(filters?: {
  tipo?: string;
  ciudad?: string;
  operacion?: string;
  q?: string;
  precioMin?: string;
  precioMax?: string;
  habitacionesMin?: string;
  banosMin?: string;
}): Promise<InmuebleInmovilla[]> {
  let query = supabase
    .from("inmuebles")
    .select(
      "id, referencia, tipo_oferta, operacion, ciudad, zona, precio, metros_cons, habitaciones, banos, descripcion, titulo, fotos, agente_id, sincronizado_at, clase_energetica, ano_construccion, direccion, metros_utiles, orientacion, caracteristicas, planta, video",
    );

  if (filters?.tipo) {
    query = query.ilike("tipo_oferta", `%${filters.tipo}%`);
  }
  if (filters?.ciudad) {
    query = query.ilike("ciudad", `%${filters.ciudad}%`);
  }
  if (filters?.operacion) {
    query = query.ilike("operacion", `%${filters.operacion}%`);
  }
  if (filters?.precioMin) {
    query = query.gte("precio", parseInt(filters.precioMin, 10));
  }
  if (filters?.precioMax) {
    query = query.lte("precio", parseInt(filters.precioMax, 10));
  }
  if (filters?.habitacionesMin) {
    query = query.gte("habitaciones", parseInt(filters.habitacionesMin, 10));
  }
  if (filters?.banosMin) {
    query = query.gte("banos", parseInt(filters.banosMin, 10));
  }
  if (filters?.q) {
    // Search in referencia, titulo, or descripcion
    query = query.or(
      `referencia.ilike.%${filters.q}%,titulo.ilike.%${filters.q}%,descripcion.ilike.%${filters.q}%`,
    );
  }

  const { data, error } = await query.order("sincronizado_at", {
    ascending: false,
  });

  if (error) {
    console.error("❌ Error fetching inmuebles:", error.message);
    return [];
  }

  return (data as InmuebleInmovilla[]) ?? [];
}

/**
 * Fetch a single property by its ID.
 */
export async function getInmuebleById(
  id: string,
): Promise<InmuebleInmovilla | null> {
  const { data, error } = await supabase
    .from("inmuebles")
    .select(
      "id, referencia, tipo_oferta, operacion, ciudad, zona, precio, metros_cons, habitaciones, banos, descripcion, titulo, fotos, agente_id, sincronizado_at, clase_energetica, ano_construccion, direccion, metros_utiles, orientacion, caracteristicas, planta, video",
    )
    .eq("id", id)
    .single();

  if (error) {
    console.error(`❌ Error fetching inmueble ${id}:`, error.message);
    return null;
  }

  return (data as InmuebleInmovilla) ?? null;
}

/**
 * Fetch the exact previous and next property IDs based on synchronization date.
 */
export async function getAdjacentProperties(currentId: string) {
  const properties = await getInmuebles();
  const index = properties.findIndex((p) => p.id === currentId);

  if (index === -1) return { prev: null, next: null };

  // To ensure chronologically next/prev matches the timeline visually in the array:
  // Usually, "next" translates to an older home (index + 1) in a descending list, but
  // conceptually "Siguiente" means the newer one? The user wants "chronological" order.
  // We'll trust the current array index order: [index - 1] is "Siguiente" (newer), [index + 1] is "Anterior" (older)
  // Let's swap them to match physical chronology: prev = index + 1 (older), next = index - 1 (newer)
  const prev = index < properties.length - 1 ? properties[index + 1] : null;
  const next = index > 0 ? properties[index - 1] : null;

  return { prev, next };
}

/**
 * Fetch up to 3 similar properties of the same tipo_oferta.
 */
export async function getSimilarProperties(
  currentId: string,
  tipoOferta: string,
): Promise<InmuebleInmovilla[]> {
  const { data, error } = await supabase
    .from("inmuebles")
    .select(
      "id, referencia, tipo_oferta, operacion, ciudad, zona, precio, metros_cons, habitaciones, banos, descripcion, titulo, fotos, agente_id, sincronizado_at, clase_energetica, ano_construccion, direccion, metros_utiles, orientacion, caracteristicas, planta, video",
    )
    .eq("tipo_oferta", tipoOferta)
    .neq("id", currentId)
    .order("sincronizado_at", { ascending: false })
    .limit(3);

  if (error) {
    console.error(
      `❌ Error fetching similar properties for ${currentId}:`,
      error.message,
    );
    return [];
  }

  return (data as InmuebleInmovilla[]) ?? [];
}
