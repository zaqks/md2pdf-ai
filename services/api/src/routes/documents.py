from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from uuid import UUID
from ..database import get_db
from ..models import User, Document
from ..schemas import DocumentCreate, DocumentUpdate, DocumentResponse, DocumentListResponse
from ..dependencies import get_current_user

router = APIRouter(prefix="/api/documents", tags=["documents"])


@router.post("", response_model=DocumentResponse, status_code=status.HTTP_201_CREATED)
async def create_document(
    document_data: DocumentCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Create a new document"""
    new_document = Document(
        user_id=current_user.id,
        title=document_data.title,
        content=document_data.content,
        is_public=1  # Always public
    )
    
    db.add(new_document)
    db.commit()
    db.refresh(new_document)
    
    return new_document


@router.get("", response_model=List[DocumentListResponse])
async def list_documents(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """List all documents for the current user"""
    documents = db.query(Document).filter(Document.user_id == current_user.id).order_by(Document.updated_at.desc()).all()
    return documents


@router.get("/{document_id}", response_model=DocumentResponse)
async def get_document(
    document_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get a specific document by ID"""
    document = db.query(Document).filter(Document.id == document_id).first()
    
    if not document:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Document not found"
        )
    
    # Check if user owns the document or if it's public
    if document.user_id != current_user.id and not document.is_public:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="You don't have permission to access this document"
        )
    
    return document


@router.get("/share/{document_id}", response_model=DocumentResponse)
async def get_shared_document(
    document_id: UUID,
    db: Session = Depends(get_db)
):
    """Get a public document by ID (no authentication required)"""
    document = db.query(Document).filter(
        Document.id == document_id,
        Document.is_public == 1
    ).first()
    
    if not document:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Document not found or not public"
        )
    
    return document


@router.put("/{document_id}", response_model=DocumentResponse)
async def update_document(
    document_id: UUID,
    document_data: DocumentUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Update a document"""
    document = db.query(Document).filter(
        Document.id == document_id,
        Document.user_id == current_user.id
    ).first()
    
    if not document:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Document not found"
        )
    
    # Update fields if provided
    if document_data.title is not None:
        document.title = document_data.title
    if document_data.content is not None:
        document.content = document_data.content
    # is_public is always 1, no need to update
    
    db.commit()
    db.refresh(document)
    
    return document


@router.delete("/{document_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_document(
    document_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Delete a document"""
    document = db.query(Document).filter(
        Document.id == document_id,
        Document.user_id == current_user.id
    ).first()
    
    if not document:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Document not found"
        )
    
    db.delete(document)
    db.commit()
    
    return None
