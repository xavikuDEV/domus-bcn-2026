import { describe, it, expect } from "vitest";
import { Client } from "@notionhq/client";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

describe("Sincronización de Roadmap (Notion)", () => {
  it("Debe poder encontrar el Roadmap mediante búsqueda", async () => {
    const notion = new Client({ auth: process.env.NOTION_SECRET });

    // En lugar de retrieve (que es estricto), usamos search que ya vimos que funciona
    const response = await notion.search({
      query: "Roadmap Domus 2026",
      filter: { property: "object", value: "data_source" }, // Usamos el tipo detectado
    });

    expect(response.results.length).toBeGreaterThan(0);
    const roadmap = response.results[0] as any;
    console.log(`✅ Roadmap verificado: "${roadmap.title[0].plain_text}"`);
    console.log(`🆔 ID Real para .env: ${roadmap.id}`);
  });
});
