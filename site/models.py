from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.engine.url import URL

import settings

DeclarativeBase = declarative_base()

def db_connect():
    return create_engine(URL(**settings.DATABASE))

def create_quotes_table(engine):
    DeclarativeBase.metadata.create_all(engine)

class Quotes(DeclarativeBase):
    __tablename__ = "quotes"

    id = Column(Integer, primary_key=True)
    message = Column('quote', String)
