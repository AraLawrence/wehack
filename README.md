# Setup:

Install the following dependencies:
- Python 3.5
- pip
- virtualenv
- virtualenvwrapper

pip is used to install python packages. Python uses a shared library, so it is good to store projects in
seperate virtualenvs. virtualenvwrapper is not necessary, but adds many helpful commands.

When finished installing the dependencies, run the following commands
(after cd'ing into wehack directory) to get the app running locally:
- mkvirtualenv -p /usr/local/bin/python3.5 [usually this, otherwise check 'which python3'] neil
- pip install -r requirements.txt
- (Enter your psql terminal) CREATE DATABASE neil_base (quit psql);
- python3 seed.py
- python3 app.py

The final command here will set the app up running on localhost:5000

To develop on the frontend you will have to run the following commands:
- npm install
- gulp

Gulp is setup here to work with Babel to transpile both JSX and es2015, so all
es6 features can be used on the frontend.
