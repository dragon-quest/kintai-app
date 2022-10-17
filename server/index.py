from flask import Flask,render_template
from dotenv import dotenv_values


config = dotenv_values(".env")
app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World"


@app.route("/test")
def test():
    return "Test.."


if __name__ == "__main__":
    app.run(debug=True)
