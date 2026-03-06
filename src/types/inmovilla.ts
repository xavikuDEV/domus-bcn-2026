/**
 * InmuebleInmovilla — Tipo que coincide EXACTAMENTE con la tabla `inmuebles` de Supabase.
 * Fuente de verdad: src/services/ingestion/xml-processor.ts (upsert)
 */
export interface InmuebleInmovilla {
  id: string;
  referencia: string;
  tipo_oferta: string;
  operacion: string;
  ciudad: string;
  zona: string;
  precio: number;
  metros_cons: number;
  habitaciones: number;
  banos: number;
  descripcion: string;
  titulo: string;
  fotos: string[];
  agente_id: string;
  sincronizado_at: string;
}
