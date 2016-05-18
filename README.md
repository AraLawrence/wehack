# Setup:

Install the following dependencies:
- Python 2.6+
- pip
- virtualenv
- virtualenvwrapper

pip is used to install python packages. Python uses a shared library, so it is good to store projects in
seperate virtualenvs. virtualenvwrapper is not necessary, but adds many helpful commands.

When finished installing the dependencies, run the following commands:
- mkvirtualenv neil
  - When you work on the project in the future you will want to use the command 'workon neil' which will allow you to work in the env 'neil' and will add (neil) at the front of your terminal line. To deactivate
  the env, use the command 'deactivate'

Then cd into the wehack/app directory and run the following commands to get the app running locally:
- pip install -r requirements.txt
- (Enter your psql terminal) CREATE DATABASE neil_base (quit psql);
- python seed.py
- python __init__.py

The final command here will set the app up running on localhost:5000

To develop on the frontend you will have to run the following commands (from wehack dir):
- npm install
- gulp

Gulp is setup here to work with Babel to transpile both JSX and es2015, so all
es6 features can be used on the frontend. When transpiling gulps works from the src folder, and transpiles
into app/static
