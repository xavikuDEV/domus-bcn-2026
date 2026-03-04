import { describe, it, expect } from "vitest";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

describe("Configuración del Entorno", () => {
  it("Debe tener configuradas las variables de Notion", () => {
    expect(process.env.NOTION_SECRET).toBeDefined();
    expect(process.env.NOTION_DATABASE_ID).toBeDefined();
  });

  it("Debe tener configuradas las variables de Supabase", () => {
    expect(process.env.NEXT_PUBLIC_SUPABASE_URL).toBeDefined();
    expect(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY).toBeDefined();
  });
});
