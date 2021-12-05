from django.contrib import admin
from .models import CustomUser, Zone
from django.contrib import admin
# Register your models here.

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    class Meta:
        model = CustomUser
        list_display = ('__all__')

@admin.register(Zone)
class ZoneAdmin(admin.ModelAdmin):
    class Meta:
        model = Zone
        list_display = ('__all__')
