from sqlalchemy.orm import sessionmaker
from models import Quotes, db_connect, create_quotes_table
from random import randint

class QuoteTable(object):
    def __init__(self):
        engine = db_connect()
        create_quotes_table(engine)
        self.Session = sessionmaker(bind=engine)

    def add_quote(self, message):
        session = self.Session()
        quote = Quotes(message=message)

        try:
            session.add(quote)
            session.commit()
        except:
            session.rollback()
            raise
        finally:
            session.close()

        return quote

    def get_quote(self):
        session = self.Session()
        initial = session.query(Quotes).first().id
        final = session.query(Quotes).order_by(Quotes.id.desc()).first().id
        quote = session.query(Quotes).get(randint(initial, final))
        session.close()
        return quote
