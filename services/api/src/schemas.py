from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime
from uuid import UUID


# User Schemas
class UserResponse(BaseModel):
    id: UUID
    username: str
    email: str
    created_at: datetime

    class Config:
        from_attributes = True


class Token(BaseModel):
    access_token: str
    token_type: str
    user: UserResponse


# Document Schemas
class DocumentCreate(BaseModel):
    title: str
    content: str = ""
    is_public: bool = False


class DocumentUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    is_public: Optional[bool] = None


class DocumentResponse(BaseModel):
    id: UUID
    user_id: UUID
    title: str
    content: str
    is_public: bool
    created_at: datetime
    updated_at: Optional[datetime]

    class Config:
        from_attributes = True


class DocumentListResponse(BaseModel):
    id: UUID
    title: str
    is_public: bool
    created_at: datetime
    updated_at: Optional[datetime]

    class Config:
        from_attributes = True


# Media Schemas
class MediaResponse(BaseModel):
    id: UUID
    user_id: UUID
    filename: str
    original_filename: str
    content_type: str
    file_size: int
    url: str
    created_at: datetime

    class Config:
        from_attributes = True


class MediaListResponse(BaseModel):
    id: UUID
    filename: str
    original_filename: str
    content_type: str
    file_size: int
    url: str
    created_at: datetime

    class Config:
        from_attributes = True
