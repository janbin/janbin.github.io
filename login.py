from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/data")
def data():
    with open("data.json") as f:
        jsonf = json.load(f)

    return jsonf


if __name__ == "__main__":
    app.run()