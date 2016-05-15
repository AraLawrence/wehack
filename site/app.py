from flask import Flask, render_template, jsonify
from pipelines import QuoteTable

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/quote')
def get_quote():
    say = QuoteTable().get_quote()
    return jsonify(quote=say.message)

if __name__ == "__main__":
    app.run(debug=True)
