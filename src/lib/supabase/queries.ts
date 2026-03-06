import { supabase } from "./client";
import type { InmuebleInmovilla } from "../../types/inmovilla";

/**
 * Fetch all properties from the `inmuebles` table.
 * Columns match exactly the DB schema (source: xml-processor.ts).
 */
export async function getInmuebles(): Promise<InmuebleInmovilla[]> {
  const { data, error } = await supabase
    .from("inmuebles")
    .select(
      "id, referencia, tipo_oferta, operacion, ciudad, zona, precio, metros_cons, habitaciones, banos, descripcion, titulo, fotos, agente_id, sincronizado_at",
    )
    .order("sincronizado_at", { ascending: false });

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
      "id, referencia, tipo_oferta, operacion, ciudad, zona, precio, metros_cons, habitaciones, banos, descripcion, titulo, fotos, agente_id, sincronizado_at",
    )
    .eq("id", id)
    .single();

  if (error) {
    console.error(`❌ Error fetching inmueble ${id}:`, error.message);
    return null;
  }

  return (data as InmuebleInmovilla) ?? null;
}
