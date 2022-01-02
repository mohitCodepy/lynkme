from django.urls import path
from django.urls.resolvers import URLPattern
from .views import ZoneAPIView, CreateZoneAPIView

urlpatterns = [
    path('zones', ZoneAPIView.as_view()),
    path('create-zone/', CreateZoneAPIView.as_view()),
    path('zone/<str:zone_num>', ZoneAPIView.as_view())
]