import os
import json
from datetime import datetime
from notion_client import Client
from dotenv import load_dotenv

# 1. Configuración inicial y carga de entorno
load_dotenv(".env.local")
notion = Client(auth=os.getenv("NOTION_SECRET"))

# IDs de las bases de datos (Asegúrate de tenerlos en .env.local)
DBS = {
    "bitacora": os.getenv("NOTION_BITACORA_ID"),
    "roadmap": os.getenv("NOTION_ROADMAP_ID"),
    "vault": os.getenv("NOTION_VAULT_ID")
}

def sync_all():
    log_path = "logs/update.json"
    if not os.path.exists(log_path):
        print("❌ No se encontró logs/update.json para procesar.")
        return

    try:
        with open(log_path, "r", encoding="utf-8") as f:
            data = json.load(f)

        target = data.get("target", "bitacora").lower()
        db_id = DBS.get(target)
        
        if not db_id:
            print(f"⚠️ Target '{target}' no configurado. Usando Bitácora por defecto.")
            db_id = DBS["bitacora"]

        ahora = datetime.now()
        props = {}
        
        # --- LÓGICA DE PROPIEDADES SEGÚN EL DESTINO ---

        if target == "roadmap":
            # Estructura específica para el ROADMAP
            props = {
                "Tarea": {"title": [{"text": {"content": data.get("task", "Nueva Tarea")}}]},
                "Status": {"status": {"name": data.get("status", "Listo")}},
                "Especialista": {"select": {"name": data.get("agent", "🏗️ Orquestador")}},
                "Fase": {"select": {"name": data.get("phase", "Fase 4")}}
            }
        
        elif target == "vault":
            # Estructura específica para el VAULT (Baúl de conocimiento)
            props = {
                "Nombre del Documento": {"title": [{"text": {"content": data.get("task", data.get("title", "Doc Técnica"))}}]},
                "Categoría": {"select": {"name": data.get("category", "Técnico")}},
                "Estado": {"select": {"name": data.get("status", "Vigente")}}
            }

        else:
            # Estructura ULTRA-COMPLETA para la BITÁCORA
            props = {
                "Acción Realizada": {"title": [{"text": {"content": data.get("task", "Acción sin título")}}]},
                "Estado": {"status": {"name": "Listo"}},
                "Agente": {"select": {"name": data.get("agent", "Orquestador")}},
                "Fase": {"select": {"name": data.get("phase", "S4: SEO/Perf")}},
                "Categoría": {"select": {"name": data.get("category", "General")}},
                "Impacto": {"select": {"name": data.get("impact", "Medio")}},
                "Fecha": {"date": {"start": ahora.strftime("%Y-%m-%d")}},
                "Hora": {"rich_text": [{"text": {"content": ahora.strftime("%H:%M")}}]},
                "Duración": {"rich_text": [{"text": {"content": data.get("duration", "5m")}}]},
                "Archivos Tocados": {"rich_text": [{"text": {"content": data.get("files", "N/A")}}]},
                "Commit / Link (URL)": {"url": data.get("commit_url", "https://github.com/xavikuDEV/domus-bcn-2026")}
            }

        # --- CONTENIDO INTERNO DE LA PÁGINA ---
        summary_content = data.get("summary", data.get("content", "Sin descripción detallada."))
        
        children = [
            {
                "object": "block",
                "type": "heading_2",
                "heading_2": {"rich_text": [{"text": {"content": "Análisis Técnico y Detalles"}}]}
            },
            {
                "object": "block",
                "type": "paragraph",
                "paragraph": {"rich_text": [{"text": {"content": summary_content}}]}
            }
        ]

        # --- EJECUCIÓN ---
        notion.pages.create(
            parent={"database_id": db_id},
            properties=props,
            children=children
        )
        
        print(f"✅ Sincronización Luxury Ultra exitosa en {target.upper()}")
        os.remove(log_path) # Limpieza de seguridad
        
    except Exception as e:
        print(f"🔴 Error crítico en sync_master.py: {e}")

if __name__ == "__main__":
    sync_all()