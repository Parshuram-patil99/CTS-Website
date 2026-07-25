import os
import sqlite3
from dotenv import load_dotenv

load_dotenv()

DB_PATH = os.path.join(os.path.dirname(__file__), "database.db")

def get_db_engine():
    """
    Attempts to establish a PostgreSQL connection.
    If psycopg2 is not installed or PostgreSQL connection fails, falls back to SQLite.
    Returns: (connection_object, engine_type_str)
    """
    database_url = os.environ.get("DATABASE_URL")
    db_host = os.environ.get("DB_HOST", "localhost")
    db_port = os.environ.get("DB_PORT", "5432")
    db_name = os.environ.get("DB_NAME", "cts_db")
    db_user = os.environ.get("DB_USER", "postgres")
    db_password = os.environ.get("DB_PASSWORD", "CTS@udgir")

    try:
        import psycopg2
        if database_url:
            if database_url.startswith("postgres://"):
                database_url = database_url.replace("postgres://", "postgresql://", 1)
            conn = psycopg2.connect(database_url)
        else:
            conn = psycopg2.connect(
                host=db_host,
                port=db_port,
                dbname=db_name,
                user=db_user,
                password=db_password
            )
        return conn, "postgres"
    except Exception as e:
        print(f"[DB Notice] PostgreSQL connection unfulfilled ({e}). Falling back to SQLite.")
        conn = sqlite3.connect(DB_PATH)
        conn.row_factory = sqlite3.Row
        return conn, "sqlite"


def init_db():
    conn, engine_type = get_db_engine()
    cursor = conn.cursor()

    pk_type = "SERIAL PRIMARY KEY" if engine_type == "postgres" else "INTEGER PRIMARY KEY AUTOINCREMENT"

    # Enquiries table
    cursor.execute(f'''
        CREATE TABLE IF NOT EXISTS enquiries (
            id {pk_type},
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            subject TEXT,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    # Student Registrations table
    cursor.execute(f'''
        CREATE TABLE IF NOT EXISTS student_registrations (
            id {pk_type},
            full_name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            college TEXT NOT NULL,
            branch TEXT NOT NULL,
            technology TEXT NOT NULL,
            duration TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    # Job Applications table
    cursor.execute(f'''
        CREATE TABLE IF NOT EXISTS job_applications (
            id {pk_type},
            full_name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            position TEXT NOT NULL,
            experience TEXT NOT NULL,
            resume_link TEXT,
            message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    conn.commit()
    conn.close()
    print(f"Database initialized successfully using {engine_type.upper()} engine.")

if __name__ == "__main__":
    init_db()

