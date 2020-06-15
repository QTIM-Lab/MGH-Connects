import logging, ssl, os, uuid

from flask import Flask

from flask_login import LoginManager

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

from flask_bootstrap import Bootstrap

from config import Config
# from recreate_db import recreate_db
# App initialization and config
app = Flask(__name__)
app.secret_key = str(uuid.uuid4())  # Replace with your secret key
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app)
Bootstrap(app)
login_manager = LoginManager()
login_manager.setup_app(app)
logging.basicConfig(level=logging.DEBUG)

# https needs ssl context
# context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)




from app import routes, models

