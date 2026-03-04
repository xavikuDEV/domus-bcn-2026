import { Client } from "@notionhq/client";

if (!process.env.NOTION_SECRET) {
  throw new Error("Falta NOTION_SECRET en el archivo .env.local");
}

export const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export const BITACORA_ID =
  "https://www.notion.so/319a543c299c801c92abf69ebc3e6147?v=319a543c299c8008b0c7000c6d6aa7f3&source=copy_link";
// NOTA: El ID que pusimos en el .env es de la PÁGINA.
// Para escribir en la TABLA, necesitamos el ID de la base de datos.
