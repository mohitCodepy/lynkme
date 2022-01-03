from datetime import time, timedelta
from requests import post
import requests
from .models import SpotifyToken
from django.utils import timezone
from datetime import timedelta
from .credentials import CLIENT_ID, CLIENT_SECRET, REDIRECT_URL


def get_user_token(session_id):
    user_token = SpotifyToken.objects.filter(user = session_id)
    if user_token.exists():
        return user_token[0]
    return None

def update_or_create_token(session_id, access_token, token_type, refresh_token, expires_in):
    token = get_user_token(session_id)
    expires_in = timezone.now() + timedelta(seconds= 3600)
    if token:
        token.access_token = access_token
        token.token_type = token_type
        token.refresh_token = refresh_token
        token.expires_in = expires_in
        token.save(update_fields = ['access_token', 'token_type', 'refresh_token', 'expires_in'])
    else:
        token = SpotifyToken.objects.create(user = session_id, access_token = access_token, token_type = token_type, refresh_token = refresh_token, expires_in = expires_in)
        token.save()

def is_spotify_authenticated(session_id):
    token = get_user_token(session_id)
    if token.exists():
        expiry = token.expiry
        if expiry <= timezone.now():
            refresh_spotify_token(session_id)
        return True
    return False

def refresh_spotify_token(session_id):
    refresh_token = get_user_token(session_id).refresh_token
    response = post('https://accounts.spotify.com/api/token', data = {
        'grant_type' : 'refresh_token', 
        'refresh_token' : refresh_token,
        'client_id' : CLIENT_ID,
        'client_secret': CLIENT_SECRET
    }).json()

    access_token = response.get('access_token')
    token_type = response.get('token_type')
    refresh_token = response.get('refresh_token')
    expires_in = response.get('expires_in')
    error = response.get('error')
    update_or_create_token(session_id, access_token, token_type, expires_in, refresh_token)
