from sqlalchemy import Column, String, Text, DateTime, ForeignKey, Integer, LargeBinary
from sqlalchemy.dialects.postgresql import UUID, BYTEA
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .database import Base
import uuid


class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    username = Column(String(255), unique=True, nullable=False, index=True)
    email = Column(String(255), unique=True, nullable=False, index=True)
    password_hash = Column(String(255), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    documents = relationship("Document", back_populates="user", cascade="all, delete-orphan")
    media_files = relationship("Media", back_populates="user", cascade="all, delete-orphan")


class Document(Base):
    __tablename__ = "documents"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    title = Column(String(255), nullable=False)
    content_blob = Column(BYTEA, nullable=False)  # Store content as binary blob
    is_public = Column(Integer, default=0)  # 0 = private, 1 = public
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    user = relationship("User", back_populates="documents")
    
    @property
    def content(self):
        """Decode content from blob"""
        if self.content_blob:
            return self.content_blob.decode('utf-8')
        return ""
    
    @content.setter
    def content(self, value):
        """Encode content to blob"""
        if value:
            self.content_blob = value.encode('utf-8')
        else:
            self.content_blob = b""


class Media(Base):
    __tablename__ = "media"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    filename = Column(String(255), nullable=False)
    original_filename = Column(String(255), nullable=False)
    content_type = Column(String(100), nullable=False)
    file_size = Column(Integer, nullable=False)
    file_data = Column(BYTEA, nullable=False)  # Store file as binary blob
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # Relationships
    user = relationship("User", back_populates="media_files")
