# Create your views here.
from rest_framework.generics import ListAPIView
from .models import Zone
from .serializers import ZoneSerializer, CreateZoneSerializer


class ZoneAPIView(ListAPIView):
    queryset = Zone.objects.all()
    serializer_class = ZoneSerializer

class CreateZoneAPIView(ListAPIView):
    serializer_class = CreateZoneSerializer
    def post(self, request, *args, **kwargs):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            guest_can_pause = serializer.data['guest_can_pause']
            host = self.request.session.session_key
            votes_to_skip = serializer.data['votes_to_skip']
            serializer.save()

