from sqlalchemy.orm import sessionmaker
from models import Quotes, db_connect, create_quotes_table

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
        quote = session.query(Quotes).get(2)
        session.close()
        return quote
