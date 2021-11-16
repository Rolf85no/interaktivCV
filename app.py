from flask import Flask, render_template, redirect
from flask_session import Session
from tempfile import mkdtemp
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


@app.route("/")
def index():

    return render_template("index.html")

@app.route("/cv")
def cv():
    return render_template("cv.html")