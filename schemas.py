# schemas.py

from pydantic import BaseModel, EmailStr, validator
from typing import Optional

class UserBase(BaseModel):
    """Base schema for user."""
    username: str
    email: EmailStr
    full_name: Optional[str] = None

class UserCreate(UserBase):
    """Schema for creating a new user."""
    password: str

    @validator('password')
    def password_must_contain_uppercase(cls, v):
        if not any(char.isupper() for char in v):
            raise ValueError('Password must contain at least one uppercase letter')
        return v

class UserUpdate(UserBase):
    """Schema for updating an existing user."""
    password: Optional[str] = None

class User(UserBase):
    """Schema for user."""
    id: int

    class Config:
        orm_mode = True

class AssetBase(BaseModel):
    """Base schema for asset."""
    name: str
    description: Optional[str] = None

class AssetCreate(AssetBase):
    """Schema for creating a new asset."""
    pass

class AssetUpdate(AssetBase):
    """Schema for updating an existing asset."""
    pass

class Asset(AssetBase):
    """Schema for asset."""
    id: int

    class Config:
        orm_mode = True

class TeamBase(BaseModel):
    """Base schema for team."""
    name: str
    description: Optional[str] = None

class TeamCreate(TeamBase):
    """Schema for creating a new team."""
    pass

class TeamUpdate(TeamBase):
    """Schema for updating an existing team."""
    pass

class Team(TeamBase):
    """Schema for team."""
    id: int

    class Config:
        orm_mode = True

class Token(BaseModel):
    """Schema for token."""
    access_token: str
    token_type: str

class TokenData(BaseModel):
    """Schema for token data."""
    username: Optional[str] = None