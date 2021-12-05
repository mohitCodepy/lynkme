# Create your views here.
from rest_framework.generics import ListCreateAPIView
from .models import Zone
from .serializers import ZoneSerializer


class ZoneAPIView(ListCreateAPIView):
    queryset = Zone.objects.all()
    serializer_class = ZoneSerializer
