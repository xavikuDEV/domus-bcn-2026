import { describe, it, expect } from "vitest";
import { processInmovillaXML } from "../../services/ingestion/xml-processor";
import fs from "fs";
import path from "path";

describe("Ingesta de Datos: Inmovilla XML", () => {
  it("Debe procesar el XML y subirlo a Supabase", async () => {
    // Aquí podrías leer un archivo .xml real si lo tienes en la carpeta mocks
    // Por ahora simulamos la llamada con un string XML basado en tus etiquetas
    const mockXML = `
      <listado>
        <inmueble>
          <id>20095003</id>
          <ref>SU-PA40</ref>
          <precioinmo>450000</precioinmo>
          <ciudad>Barcelona</ciudad>
          <titulo1>Ático espectacular en Gràcia</titulo1>
        </inmueble>
      </listado>
    `;

    await processInmovillaXML(mockXML);
    // Si no lanza error, es que el upsert funcionó
    expect(true).toBe(true);
  });
});
