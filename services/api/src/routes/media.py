from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File
from fastapi.responses import Response
from sqlalchemy.orm import Session
from typing import List
from uuid import UUID
import os
from ..database import get_db
from ..models import User, Media
from ..schemas import MediaResponse, MediaListResponse
from ..dependencies import get_current_user

router = APIRouter(prefix="/api/media", tags=["media"])

# Maximum file size (10MB)
MAX_FILE_SIZE = 10 * 1024 * 1024

# Allowed content types
ALLOWED_CONTENT_TYPES = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/svg+xml"
]


@router.post("", response_model=MediaResponse, status_code=status.HTTP_201_CREATED)
async def upload_media(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Upload a media file"""
    # Validate content type
    if file.content_type not in ALLOWED_CONTENT_TYPES:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"File type not allowed. Allowed types: {', '.join(ALLOWED_CONTENT_TYPES)}"
        )
    
    # Read file content to check size
    content = await file.read()
    file_size = len(content)
    
    if file_size > MAX_FILE_SIZE:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"File size exceeds maximum allowed size of {MAX_FILE_SIZE / 1024 / 1024}MB"
        )
    
    # Get file extension
    file_ext = os.path.splitext(file.filename)[1] if file.filename else ""
    
    # Create media record with blob storage
    new_media = Media(
        user_id=current_user.id,
        filename="",  # Will be set after generating UUID
        original_filename=file.filename,
        content_type=file.content_type,
        file_size=file_size,
        file_data=content  # Store file as binary blob
    )
    
    db.add(new_media)
    db.flush()  # Get the UUID without committing
    
    # Update filename with UUID
    new_media.filename = f"{new_media.id}{file_ext}"
    
    db.commit()
    db.refresh(new_media)
    
    # Generate URL for the media
    media_url = f"/api/media/{new_media.id}"
    
    return {
        "id": new_media.id,
        "user_id": new_media.user_id,
        "filename": new_media.filename,
        "original_filename": new_media.original_filename,
        "content_type": new_media.content_type,
        "file_size": new_media.file_size,
        "url": media_url,
        "created_at": new_media.created_at
    }


@router.get("", response_model=List[MediaListResponse])
async def list_media(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """List all media files for the current user"""
    media_files = db.query(Media).filter(Media.user_id == current_user.id).order_by(Media.created_at.desc()).all()
    
    return [
        {
            "id": media.id,
            "filename": media.filename,
            "original_filename": media.original_filename,
            "content_type": media.content_type,
            "file_size": media.file_size,
            "url": f"/api/media/{media.id}",
            "created_at": media.created_at
        }
        for media in media_files
    ]


@router.get("/{media_id}")
async def get_media(
    media_id: UUID,
    db: Session = Depends(get_db)
):
    """Get a media file by ID (public access)"""
    media = db.query(Media).filter(Media.id == media_id).first()
    
    if not media:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Media not found"
        )
    
    # Return the binary data with proper content type
    return Response(
        content=bytes(media.file_data),
        media_type=media.content_type,
        headers={
            "Content-Disposition": f'inline; filename="{media.original_filename}"'
        }
    )


@router.delete("/{media_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_media(
    media_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Delete a media file"""
    media = db.query(Media).filter(
        Media.id == media_id,
        Media.user_id == current_user.id
    ).first()
    
    if not media:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Media not found"
        )
    
    # Delete from database (no filesystem cleanup needed)
    db.delete(media)
    db.commit()
    
    return None
