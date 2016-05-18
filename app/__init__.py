import requests
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

@app.route('/api/gif')
def get_gif():
    gif = requests.get('http://api.giphy.com/v1/gifs/translate?s=neil%20degrasse%20tyson&api_key=dc6zaTOxFJmzC').json()
    return jsonify(data=gif)

if __name__ == "__main__":
    app.run(debug=True)
