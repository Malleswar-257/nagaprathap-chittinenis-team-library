import os
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, scoped_session
from sqlalchemy.orm.session import sessionmaker
from dotenv import load_dotenv

load_dotenv()

# Database connection URL
DATABASE_URL = os.getenv("DATABASE_URL")

# Create a database engine
engine = create_engine(DATABASE_URL)

# Create a configured "Session" class
Session = scoped_session(sessionmaker(bind=engine))

# Create a base class for declarative class definitions
Base = declarative_base()

def create_tables():
    """Create all tables in the engine."""
    Base.metadata.create_all(engine)

def drop_tables():
    """Drop all tables in the engine."""
    Base.metadata.drop_all(engine)