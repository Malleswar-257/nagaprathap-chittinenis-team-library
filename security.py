# security.py

from flask import request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from itsdangerous import URLSafeTimedSerializer, SignatureExpired, BadSignature
from nagaprathap_chittinenis_team_library import db
from nagaprathap_chittinenis_team_library.models import User

def hash_password(password):
    """Hash a password for storing."""
    return generate_password_hash(password)

def verify_password(stored_password, provided_password):
    """Verify a stored password against one provided by user"""
    return check_password_hash(stored_password, provided_password)

def generate_confirmation_token(email):
    """Generate a confirmation token to email a user a verification email."""
    serializer = URLSafeTimedSerializer('SECRET_KEY', salt='email-confirmation-salt')
    return serializer.dumps(email, salt='email-confirmation-salt')

def confirm_token(token, expiration=3600):
    """Confirm a token within an expiration time."""
    serializer = URLSafeTimedSerializer('SECRET_KEY', salt='email-confirmation-salt')
    try:
        email = serializer.loads(
            token,
            salt='email-confirmation-salt',
            max_age=expiration
        )
    except SignatureExpired:
        return False
    except BadSignature:
        return False
    return email

def get_current_user():
    """Get the current user."""
    return User.query.filter_by(email=get_jwt_identity()).first()

def is_admin():
    """Check if the current user is an admin."""
    return get_current_user().is_admin

def is_manager():
    """Check if the current user is a manager."""
    return get_current_user().is_manager

def is_member():
    """Check if the current user is a member."""
    return get_current_user().is_member