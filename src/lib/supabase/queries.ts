import { supabase } from "./client";
import type { InmuebleInmovilla } from "../../types/inmovilla";

/**
 * Fetch all properties from the `inmuebles` table.
 * Returns typed `InmuebleInmovilla[]` sorted by most recently synced.
 */
export async function getInmuebles(): Promise<InmuebleInmovilla[]> {
  const { data, error } = await supabase
    .from("inmuebles")
    .select(
      `
      id,
      referencia,
      tipo_oferta,
      operacion,
      provincia,
      poblacion,
      zona,
      precio,
      m_construidos:metros_cons,
      habitaciones,
      baños:banos,
      descripcion_es:descripcion,
      titulo_es:titulo,
      fotos,
      agente_nombre:agente_id,
      agente_email:agente_id
    `,
    )
    .order("sincronizado_at", { ascending: false });

  if (error) {
    console.error("❌ Error fetching inmuebles:", error.message);
    return [];
  }

  return (data as unknown as InmuebleInmovilla[]) ?? [];
}

/**
 * Fetch a single property by its ID.
 */
export async function getInmuebleById(
  id: string,
): Promise<InmuebleInmovilla | null> {
  const { data, error } = await supabase
    .from("inmuebles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(`❌ Error fetching inmueble ${id}:`, error.message);
    return null;
  }

  return data as unknown as InmuebleInmovilla | null;
}
