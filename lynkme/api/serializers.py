from django.db import models
from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from .models import Zone

class ZoneSerializer(ModelSerializer):
    class Meta:
        model = Zone
        fields = '__all__'

class CreateZoneSerializer(ModelSerializer):
    class Meta:
        model = Zone
        fields = ('guest_can_pause', 'votes_to_skip')