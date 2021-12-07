# Create your views here.
from rest_framework.generics import ListAPIView
from .models import Zone
from .serializers import ZoneSerializer, CreateZoneSerializer
from rest_framework.response import Response
from rest_framework import status

class ZoneAPIView(ListAPIView):
    queryset = Zone.objects.all()
    serializer_class = ZoneSerializer

class CreateZoneAPIView(ListAPIView):
    serializer_class = CreateZoneSerializer
    queryset = Zone.objects.all()
    def post(self, request, *args, **kwargs):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        print(self.request, request, request.data)
        serializer = self.serializer_class(data = request.data)
        print(serializer, 'serializer is here')
        if serializer.is_valid():
            print('True')
            guest_can_pause = serializer.data.get('guest_can_pause')
            host = self.request.session.session_key
            votes_to_skip = serializer.data.get('votes_to_skip')
            zone_queryset = Zone.objects.filter(host = host)
            if zone_queryset.exists():
                zone_queryset = zone_queryset[0]
                zone_queryset.guest_can_pause = guest_can_pause
                zone_queryset.votes_to_skip = votes_to_skip
                zone_queryset.save(update_fields = ['guest_can_pause', 'votes_to_skip'])
            else:
                zone_queryset = Zone.objects.create(host = host, guest_can_pause = guest_can_pause, votes_to_skip = votes_to_skip)
                zone_queryset.save()
            serialized = ZoneSerializer(zone_queryset)
            return Response(serialized.data, status = status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(f'Something went wrong {serializer.errors}' , status = status.HTTP_400_BAD_REQUEST)

                



