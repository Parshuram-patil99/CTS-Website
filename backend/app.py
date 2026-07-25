import os
import sqlite3
import threading
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from init_db import init_db, get_db_engine, DB_PATH

load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize DB tables on startup
init_db()

def db_execute(query_pg, query_sqlite, params=()):
    """Executes an INSERT / UPDATE statement against PostgreSQL or SQLite."""
    conn, engine_type = get_db_engine()
    cursor = conn.cursor()
    if engine_type == "postgres":
        cursor.execute(query_pg, params)
    else:
        cursor.execute(query_sqlite, params)
    conn.commit()
    conn.close()

def db_fetchall(query):
    """Fetches all records for a SELECT query from PostgreSQL or SQLite."""
    conn, engine_type = get_db_engine()
    if engine_type == "postgres":
        import psycopg2.extras
        cursor = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
        cursor.execute(query)
        rows = [dict(row) for row in cursor.fetchall()]
    else:
        cursor = conn.cursor()
        cursor.execute(query)
        rows = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return rows

def send_email_async(subject, html_body):
    """Sends email notification asynchronously in a background thread to prevent blocking API responses."""
    smtp_server = os.environ.get("SMTP_SERVER", "smtp.gmail.com")
    smtp_port = int(os.environ.get("SMTP_PORT", 587))
    smtp_username = os.environ.get("SMTP_USERNAME", "cts.udgir@gmail.com")
    smtp_password = os.environ.get("SMTP_PASSWORD", "")
    recipient = os.environ.get("NOTIFICATION_EMAIL", "cts.udgir@gmail.com")

    if not smtp_password:
        print("[SMTP Notice] SMTP_PASSWORD not set in environment. Skipping email dispatch.")
        return

    def _send():
        try:
            msg = MIMEMultipart("alternative")
            msg["Subject"] = subject
            msg["From"] = smtp_username
            msg["To"] = recipient

            msg.attach(MIMEText(html_body, "html"))

            with smtplib.SMTP(smtp_server, smtp_port, timeout=10) as server:
                server.starttls()
                server.login(smtp_username, smtp_password)
                server.sendmail(smtp_username, recipient, msg.as_string())
            print(f"[SMTP Notification] Email dispatched successfully to {recipient}: {subject}")
        except Exception as e:
            print(f"[SMTP Notification Error] Failed to send email: {e}")

    thread = threading.Thread(target=_send)
    thread.daemon = True
    thread.start()

@app.route('/', methods=['GET'])
def index():
    return jsonify({
        "status": "success",
        "message": "Chaitanya Tech Solutions Backend API is running",
        "database": "PostgreSQL"
    })

# --- Enquiries Endpoint ---
@app.route('/api/enquiry', methods=['POST'])
def submit_enquiry():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No input data provided"}), 400

    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    subject = data.get('subject', 'General Enquiry')
    message = data.get('message')

    if not name or not email or not phone or not message:
        return jsonify({"error": "Name, email, phone, and message are required"}), 400

    db_execute(
        "INSERT INTO enquiries (name, email, phone, subject, message) VALUES (%s, %s, %s, %s, %s)",
        "INSERT INTO enquiries (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)",
        (name, email, phone, subject, message)
    )

    # Trigger Email Notification
    html_content = f"""
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #2563eb;">New Enquiry Received - CTS Website</h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; width: 150px;">Name:</td><td style="padding: 8px;">{name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">{email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">{phone}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Subject:</td><td style="padding: 8px;">{subject}</td></tr>
        </table>
        <h4 style="margin-top: 15px;">Message:</h4>
        <div style="background-color: #f1f5f9; padding: 15px; border-radius: 6px; border-left: 4px solid #2563eb;">
            {message}
        </div>
    </div>
    """
    send_email_async(f"New Enquiry: {subject} from {name}", html_content)

    return jsonify({"status": "success", "message": "Enquiry submitted successfully!"}), 201

# --- Student Registration Endpoint ---
@app.route('/api/register-student', methods=['POST'])
def register_student():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No input data provided"}), 400

    full_name = data.get('full_name')
    email = data.get('email')
    phone = data.get('phone')
    college = data.get('college')
    branch = data.get('branch')
    technology = data.get('technology')
    duration = data.get('duration')

    if not full_name or not email or not phone or not college or not technology:
        return jsonify({"error": "Required fields missing"}), 400

    db_execute(
        "INSERT INTO student_registrations (full_name, email, phone, college, branch, technology, duration) VALUES (%s, %s, %s, %s, %s, %s, %s)",
        "INSERT INTO student_registrations (full_name, email, phone, college, branch, technology, duration) VALUES (?, ?, ?, ?, ?, ?, ?)",
        (full_name, email, phone, college, branch, technology, duration)
    )

    # Trigger Email Notification
    html_content = f"""
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #16a34a;">New Student Registration - CTS Website</h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; width: 150px;">Full Name:</td><td style="padding: 8px;">{full_name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">{email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">{phone}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">College:</td><td style="padding: 8px;">{college}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Branch:</td><td style="padding: 8px;">{branch}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Technology:</td><td style="padding: 8px;">{technology}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Duration:</td><td style="padding: 8px;">{duration}</td></tr>
        </table>
    </div>
    """
    send_email_async(f"New Student Registration: {full_name} - {technology}", html_content)

    return jsonify({"status": "success", "message": "Student registration completed successfully!"}), 201

# --- Job Application Endpoint ---
@app.route('/api/apply-job', methods=['POST'])
def apply_job():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No input data provided"}), 400

    full_name = data.get('full_name')
    email = data.get('email')
    phone = data.get('phone')
    position = data.get('position')
    experience = data.get('experience')
    resume_link = data.get('resume_link', '')
    message = data.get('message', '')

    if not full_name or not email or not phone or not position:
        return jsonify({"error": "Required fields missing"}), 400

    db_execute(
        "INSERT INTO job_applications (full_name, email, phone, position, experience, resume_link, message) VALUES (%s, %s, %s, %s, %s, %s, %s)",
        "INSERT INTO job_applications (full_name, email, phone, position, experience, resume_link, message) VALUES (?, ?, ?, ?, ?, ?, ?)",
        (full_name, email, phone, position, experience, resume_link, message)
    )

    # Trigger Email Notification
    html_content = f"""
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #9333ea;">New Job Application Received - CTS Website</h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; width: 150px;">Full Name:</td><td style="padding: 8px;">{full_name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">{email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">{phone}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Position:</td><td style="padding: 8px;">{position}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Experience:</td><td style="padding: 8px;">{experience}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Resume Link:</td><td style="padding: 8px;"><a href="{resume_link}" target="_blank">{resume_link}</a></td></tr>
        </table>
        <h4 style="margin-top: 15px;">Cover Note / Message:</h4>
        <div style="background-color: #f1f5f9; padding: 15px; border-radius: 6px; border-left: 4px solid #9333ea;">
            {message}
        </div>
    </div>
    """
    send_email_async(f"New Job Application: {full_name} for {position}", html_content)

    return jsonify({"status": "success", "message": "Application submitted successfully!"}), 201

# --- Admin Submissions Retrieval Endpoint ---
@app.route('/api/admin/submissions', methods=['GET'])
def get_submissions():
    enquiries = db_fetchall("SELECT * FROM enquiries ORDER BY created_at DESC")
    registrations = db_fetchall("SELECT * FROM student_registrations ORDER BY created_at DESC")
    applications = db_fetchall("SELECT * FROM job_applications ORDER BY created_at DESC")

    return jsonify({
        "status": "success",
        "enquiries": enquiries,
        "registrations": registrations,
        "applications": applications
    })

if __name__ == '__main__':
    print("Starting CTS Backend Server on port 5000...")
    app.run(host='0.0.0.0', port=5000, debug=True)

