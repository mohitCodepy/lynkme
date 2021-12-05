from django.urls import path
from django.urls.resolvers import URLPattern
from .views import ZoneAPIView

urlpatterns = [
    path('zone', ZoneAPIView.as_view())
]