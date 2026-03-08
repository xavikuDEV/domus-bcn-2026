/**
 * InmuebleInmovilla — Tipo que coincide EXACTAMENTE con la tabla `inmuebles` de Supabase.
 * Fuente de verdad: schema de la DB y migración.
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
  // Nuevas columnas Etapa 2
  clase_energetica?: string;
  ano_construccion?: number;
  direccion?: string;
  metros_utiles?: number;
  orientacion?: string;
  caracteristicas?: string[];
  planta?: string;
  video?: string;
}
