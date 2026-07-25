import os

# Automatically bind Gunicorn to Render's dynamic PORT (defaults to 10000 / 5000)
port = os.environ.get("PORT", "5000")
bind = f"0.0.0.0:{port}"

# Production worker configuration
workers = 2
threads = 2
timeout = 120
