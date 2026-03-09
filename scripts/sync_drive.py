import os
import io
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from dotenv import load_dotenv

# Cargar variables desde .env.local
load_dotenv(".env.local")

# Configuración de permisos: acceso a ver y editar archivos que el script cree
SCOPES = ['https://www.googleapis.com/auth/drive.file']
FOLDER_ID = os.getenv("GOOGLE_DRIVE_FOLDER_ID")

def get_service():
    creds = None
    # El archivo token.json guarda tus claves de acceso tras el primer login
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    
    # Si no hay credenciales válidas, pedimos login
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists('credentials.json'):
                print("🔴 Error: No se encuentra 'credentials.json'. Descárgalo de Google Cloud Console.")
                return None
            flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        
        # Guardar las credenciales para la próxima vez
        with open('token.json', 'w') as token:
            token.write(creds.to_json())
            
    return build('drive', 'v3', credentials=creds)

def upload_file(local_path, folder_id):
    service = get_service()
    if not service: return

    base_name = os.path.basename(local_path)

    # 1. Buscar si el archivo ya existe
    query = f"name='{base_name}' and '{folder_id}' in parents and trashed=false"
    results = service.files().list(q=query, spaces='drive', fields='files(id, name)').execute()
    items = results.get('files', [])

    # 🔥 LA CLAVE: Forzamos el mimetype a 'text/plain' para NotebookLM
    media = MediaFileUpload(local_path, mimetype='text/plain', resumable=True)

    if not items:
        # 2. Si no existe, lo creamos
        file_metadata = {'name': base_name, 'parents': [folder_id]}
        file = service.files().create(body=file_metadata, media_body=media, fields='id').execute()
        print(f"✅ Creado en Drive (Modo Texto): {base_name}")
    else:
        # 3. Si existe, lo actualizamos
        file_id = items[0]['id']
        service.files().update(fileId=file_id, media_body=media).execute()
        print(f"🔄 Actualizado en Drive (Modo Texto): {base_name}")

if __name__ == "__main__":
    if not FOLDER_ID:
        print("🔴 Error: GOOGLE_DRIVE_FOLDER_ID no definido en .env.local")
    else:
        # 1. Archivos maestros de la raíz
        root_files = ["ARCHITECT_CONTEXT.md", "agents.md", "Structure.md", ".ai_context.md"]
        
        # 2. Archivos de Skills (.antigravity/skills)
        skill_files = [
            ".antigravity/skills/devops_sync.md",
            ".antigravity/skills/e2e_testing_specialist.md",
            ".antigravity/skills/ingestion_specialist.md",
            ".antigravity/skills/notion_sync.md",
            ".antigravity/skills/orchestrator.md",
            ".antigravity/skills/qa_specialist.md",
            ".antigravity/skills/security_specialist.md",
            ".antigravity/skills/seo_performance_expert.md",
            ".antigravity/skills/software_architect_specialist.md",
            ".antigravity/skills/sql_supabase_expert.md",
            ".antigravity/skills/technical_writer_specialist.md",
            ".antigravity/skills/ui_ux_specialist.md"
        ]

        files_to_sync = root_files + skill_files

        print(f"🚀 Iniciando sincronización con Drive (Folder: {FOLDER_ID})...")
        for f in files_to_sync:
            if os.path.exists(f):
                upload_file(f, FOLDER_ID)
            else:
                print(f"⚠️ Saltando: {f} (no existe localmente)")