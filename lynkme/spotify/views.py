from django.shortcuts import redirect, render
import requests
from requests.sessions import session
from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from .credentials import CLIENT_ID, CLIENT_SECRET, REDIRECT_URL
from requests import Request, post
from .utils import update_or_create_token, is_spotify_authenticated

# Create your views here.
class AuthUrlView(ListAPIView):
    def get(self, request, *args, **kwargs):
        scopes = 'user-read-playback-state user-modify-playback-state user-read-currently-playing'
        url =  Request('GET', 'https://accounts.spotify.com/authorize', params= {
            'scope' : scopes,
            'response_type' : 'code',
            'redirect_uri' : REDIRECT_URL,
            'client_id' : CLIENT_ID,
        }).prepare().url
        return Response({'url': url}, status= status.HTTP_200_OK)
        
def spotify_callback(request):
    code = request.GET.get('code')
    error = request.GET.get('error')
    response = post('https://accounts.spotify.com/api/token', data={
        'grant_type' : 'authorization_code',
        'code' : code,
        'redirect_uri' : REDIRECT_URL,
        'client_id' : CLIENT_ID,
        'client_secret': CLIENT_SECRET
    }).json()
    access_token = response.get('access_token')
    token_type = response.get('token_type')
    refresh_token = response.get('refresh_token')
    expires_in = response.get('expires_in')
    error = response.get('error')

    if request.session.exists(request.session.session_key):
        request.session.create()
    update_or_create_token(request.session.session_key, access_token, token_type, expires_in, refresh_token)
    return redirect('/')

class IsAuthenticated(ListAPIView):
    def get(self, request, *args, **kwargs):
        is_authenticated  =is_spotify_authenticated(request.session.session_key)
        return Response({'status' : 200, 'isAuthencated' : is_authenticated }, status= status.HTTP_200_OK)

