from django.contrib import admin
from django.contrib.admin.decorators import register

from .models import SpotifyToken

# Register your models here.
@admin.register(SpotifyToken)
class SpotifyTokenAdmin(admin.ModelAdmin):
    class Meta:
        list_display = '__all__'