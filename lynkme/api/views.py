# Create your views here.
from rest_framework.generics import ListAPIView
from .models import Zone
from .serializers import ZoneSerializer


class ZoneAPIView(ListAPIView):
    queryset = Zone.objects.all()
    serializer_class = ZoneSerializer
