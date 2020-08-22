from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import TileSet
from .serializers import TileSetSerializer


class TileSetListView(ListAPIView):
    queryset = TileSet.objects.all()
    serializer_class = TileSetSerializer


class TileSetDetailView(RetrieveAPIView):
    queryset = TileSet.objects.all()
    serializer_class = TileSetSerializer
