from django.db import models
from django.db.models import fields
from rest_framework import serializers 
from .models import Zone

class ZoneSerializer(serializers.ModelSerializer):

    class Meta:
        model = Zone
        fields = '__all__'


class CreateZoneSerializer(serializers.ModelSerializer):

    class Meta:
        model = Zone
        fields = ('guest_can_pause', 'votes_to_skip')