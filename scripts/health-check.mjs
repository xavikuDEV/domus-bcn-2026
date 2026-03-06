/**
 * DOMUS BCN 2026 — Health Check
 *
 * Verifica que todos los servicios y conexiones estén operativos:
 * - Variables de entorno
 * - Supabase (conexión + tabla inmuebles)
 * - Notion (conexión + Bitácora + Roadmap)
 *
 * Uso: node scripts/health-check.mjs
 */
import { Client } from "@notionhq/client";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

// IDs reales detectados via debug-notion.mjs
const BITACORA_ID = "319a543c-299c-809d-9231-000b5c5cba68";
const ROADMAP_ID = "319a543c299c8018a2ae000b4527666c";

const checks = [];
function pass(name, detail) {
  checks.push({ name, status: "✅", detail });
  console.log(`  ✅ ${name}: ${detail}`);
}
function fail(name, detail) {
  checks.push({ name, status: "❌", detail });
  console.log(`  ❌ ${name}: ${detail}`);
}

async function checkEnv() {
  console.log("\n🔑 Variables de entorno:");
  const required = [
    "NEXT_PUBLIC_SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    "NOTION_SECRET",
  ];
  const optional = ["INMOVILLA_XML_URL", "NOTION_DATABASE_ID"];

  for (const v of required) {
    if (process.env[v]) {
      pass(v, `Configurada (${process.env[v].substring(0, 20)}...)`);
    } else {
      fail(v, "NO CONFIGURADA — REQUERIDA");
    }
  }

  for (const v of optional) {
    if (process.env[v]) {
      pass(v, `Configurada`);
    } else {
      console.log(`  ⚠️  ${v}: No configurada (opcional)`);
    }
  }
}

async function checkSupabase() {
  console.log("\n🗄️  Supabase:");
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    );

    // Test conexión
    const { data, error } = await supabase
      .from("inmuebles")
      .select("id", { count: "exact", head: true });

    if (error) {
      fail("Conexión", error.message);
    } else {
      pass("Conexión", "OK");

      // Contar inmuebles
      const { count } = await supabase
        .from("inmuebles")
        .select("*", { count: "exact", head: true });

      pass("Tabla inmuebles", `${count ?? 0} registros`);
    }
  } catch (error) {
    fail("Supabase", error.message);
  }
}

async function checkNotion() {
  console.log("\n📓 Notion:");
  try {
    const notion = new Client({ auth: process.env.NOTION_SECRET });

    // 1. Test conexión general
    const response = await notion.search({ page_size: 5 });
    if (response.results.length > 0) {
      pass("Conexión", `OK — ${response.results.length} objetos accesibles`);
    } else {
      fail("Conexión", "Sin objetos accesibles — revisa permisos");
      return;
    }

    // 2. Verificar Bitácora por ID directo (no por título)
    try {
      const bitacora = await notion.databases.retrieve({
        database_id: BITACORA_ID,
      });
      const title =
        bitacora.title?.[0]?.plain_text || "Sin título";
      pass("Bitácora", `"${title}" (${BITACORA_ID.substring(0, 8)}...)`);
    } catch {
      fail(
        "Bitácora",
        `No accesible con ID ${BITACORA_ID.substring(0, 8)}... — revisa permisos`,
      );
    }

    // 3. Verificar Roadmap por ID directo
    try {
      const roadmap = await notion.databases.retrieve({
        database_id: ROADMAP_ID,
      });
      const title =
        roadmap.title?.[0]?.plain_text || "Sin título";
      pass("Roadmap", `"${title}" (${ROADMAP_ID.substring(0, 8)}...)`);
    } catch {
      fail(
        "Roadmap",
        `No accesible con ID ${ROADMAP_ID.substring(0, 8)}... — revisa permisos`,
      );
    }
  } catch (error) {
    fail("Notion", error.message);
    if (error.code === "unauthorized") {
      console.log("💡 Verifica que NOTION_SECRET en .env.local es correcto.");
    }
  }
}

async function run() {
  console.log("🏥 DOMUS BCN 2026 — Health Check");
  console.log("═".repeat(45));

  await checkEnv();
  await checkSupabase();
  await checkNotion();

  console.log("\n" + "═".repeat(45));
  const failures = checks.filter((c) => c.status === "❌");
  if (failures.length === 0) {
    console.log("🟢 TODOS LOS SERVICIOS OPERATIVOS\n");
  } else {
    console.log(
      `🔴 ${failures.length} PROBLEMA(S) DETECTADO(S):\n`,
    );
    failures.forEach((f) => console.log(`   → ${f.name}: ${f.detail}`));
    console.log();
    process.exit(1);
  }
}

run();
