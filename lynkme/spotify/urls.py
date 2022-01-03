from django.urls import path
from django.urls.resolvers import URLPattern
from .views import AuthUrlView, spotify_callback, IsAuthenticated

urlpatterns = [
    path('auth-url', AuthUrlView.as_view()),
    path('spotify-redirect', spotify_callback),
    path('is-authenticated', IsAuthenticated.as_view())
]