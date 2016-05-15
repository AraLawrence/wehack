from sqlalchemy.orm import sessionmaker
from models import Quotes, db_connect, create_messages_table

class QuoteTable(object):
    def __init__(self):
        engine = db_connect()
        create_quotes_table(engine)
        self.Session = sessionmaker(bind=engine)

    def get_quote(self):
        session = self.Session()
        quote = session.query(Quote).get(1)
