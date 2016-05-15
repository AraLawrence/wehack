# Setup:

Install the following dependencies:
- Python 3.5
- pip
- virtualenv
- virtualenvwrapper

pip is used to install python packages, which are contained in a shared library.
Because these are contained in a shared library it is good to store projects in
seperate virtualenvs. virtualenvwrapper is not necessary, but adds many helpful
commands.

When finished installing the dependencies, run the following commands
(after cd'ing into wehack directory):
- mkvirtualenv neil
- pip install -r requirements.txt
- (Enter your psql terminal) CREATE DATABASE neil_base (quit psql);
- python3 seed.py
- python3 app.py

To develop on the frontend you will have to run the following commands:
-npm install
-gulp

Gulp is setup here to work with Babel to transpile both JSX and es2015, so all
es6 features can be used on the frontend.
