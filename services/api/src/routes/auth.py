from fastapi import APIRouter, Depends, HTTPException, status, Request
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import User
from ..schemas import UserResponse, Token
from ..auth import create_access_token
from ..dependencies import get_current_user
import uuid

router = APIRouter(prefix="/api/auth", tags=["authentication"])


@router.post("/get-token", response_model=Token, status_code=status.HTTP_201_CREATED)
async def get_or_create_user(db: Session = Depends(get_db)):
    """Get or create anonymous user with UUID"""
    # Create new anonymous user with UUID
    user_id = uuid.uuid4()
    username = f"user_{str(user_id)[:8]}"
    
    new_user = User(
        id=user_id,
        username=username,
        email=f"{username}@anonymous.local",
        password_hash=""  # No password needed
    )
    
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    # Create access token
    access_token = create_access_token(data={"sub": str(new_user.id)})
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": new_user
    }


@router.get("/me", response_model=UserResponse)
async def get_current_user_info(current_user: User = Depends(get_current_user)):
    """Get current user information"""
    return current_user
