from sqlalchemy import Boolean, Column, Integer, String

from ..db.base_class import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    firstname = Column(String, nullable=False)
    lastname = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    phone_number = Column(String)
    password = Column(String, nullable=False)
    address = Column(String)