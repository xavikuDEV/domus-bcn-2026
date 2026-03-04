export interface InmuebleInmovilla {
  id: string; // <id>20095003</id>
  referencia: string; // <ref>SU-PA40</ref>
  tipo_oferta: string; // <tipo_ofer>Parking</tipo_ofer>
  operacion: string; // <accion>Vender</accion>
  provincia: string;
  poblacion: string; // <ciudad>Hospitalet de Llobregat</ciudad>
  zona: string;
  precio: number; // <precioinmo>15000</precioinmo>
  m_construidos: number; // <m_cons>25.00</m_cons>
  habitaciones: number;
  baños: number; // <banyos>0</banyos>
  descripcion_es: string; // <descrip1>
  titulo_es: string; // <titulo1>
  fotos: string[]; // Array de <foto1>, <foto2>...
  agente_nombre: string; // <agente>
  agente_email: string; // <email_agente>
}
