import { describe, it, expect } from "vitest";
import { supabase } from "../../../src/lib/index.js"; // Nota el .js al final para ESM

describe("Conexión con Supabase", () => {
  it("Debe poder conectar y leer la tabla inmuebles", async () => {
    const { data, error } = await supabase
      .from("inmuebles")
      .select("*")
      .limit(1);
    expect(error).toBeNull();
    expect(Array.isArray(data)).toBe(true);
  });
});
