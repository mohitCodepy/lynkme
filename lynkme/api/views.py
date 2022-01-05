# Create your views here.
from rest_framework.generics import ListAPIView
from .models import Zone
from .serializers import ZoneSerializer, CreateZoneSerializer
from rest_framework.response import Response
from rest_framework import status

class ZoneAPIView(ListAPIView):
    queryset = Zone.objects.all()
    serializer_class = ZoneSerializer

    def get(self, request, *args, **kwargs):
        if kwargs.get('zone_num') != None:
            zone_num = kwargs['zone_num']
            print(zone_num, 'zone_num', Zone.objects.filter(zone_num = zone_num).exists())
            if Zone.objects.filter(zone_num = zone_num).exists():
                print(zone_num, 'zone_num2')
                single_zone_obj = Zone.objects.filter(zone_num = zone_num)[0]

                serialized_zone =  self.serializer_class(single_zone_obj)
                return Response({'status' : 200, 'data' : serialized_zone.data}, status= status.HTTP_200_OK)
            return Response({'status' : 404, 'data' : 'Zone not exists'}, status= status.HTTP_404_NOT_FOUND)
        serialized_zones =  self.serializer_class(self.get_queryset(), many = True)
        return Response({'status' : 200, 'data' : serialized_zones.data}, status= status.HTTP_200_OK)


class CreateZoneAPIView(ListAPIView):
    serializer_class = CreateZoneSerializer
    queryset = Zone.objects.all()
    def post(self, request, *args, **kwargs):
        print(self.request.session.session_key, 'is the session key before update')
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        print(self.request, request, request.data)
        serializer = self.serializer_class(data = request.data)
        print(serializer, 'serializer is here')
        if serializer.is_valid():
            print('True')
            guest_can_pause = serializer.data.get('guest_can_pause')
            host = self.request.session.session_key
            print(host, 'host is here')
            votes_to_skip = serializer.data.get('votes_to_skip')
            zone_queryset = Zone.objects.filter(host = host)
            if zone_queryset.exists():
                zone_queryset = zone_queryset[0]
                print(zone_queryset, 'queryset is here')
                zone_queryset.guest_can_pause = guest_can_pause
                zone_queryset.votes_to_skip = votes_to_skip
                zone_queryset.save(update_fields = ['guest_can_pause', 'votes_to_skip'])
            else:
                print('zone created')
                zone_queryset = Zone.objects.create(host = host, guest_can_pause = guest_can_pause, votes_to_skip = votes_to_skip)
                zone_queryset.save()
                print('zone created')
            serialized = ZoneSerializer(zone_queryset)
            print(serialized.data, 'this is the data')
            return Response(serialized.data, status = status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(f'Something went wrong {serializer.errors}' , status = status.HTTP_400_BAD_REQUEST)

                
class UserToken(ListAPIView):
    pass


