from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import TileSet
from .models import Tile
from .serializers import TileSetSerializer
from .serializers import TileSerializer


class TileSetListView(ListAPIView):
    queryset = TileSet.objects.all()
    serializer_class = TileSetSerializer


class TileSetDetailView(RetrieveAPIView):
    queryset = TileSet.objects.all()
    serializer_class = TileSetSerializer


class TileListView(ListAPIView):
    queryset = Tile.objects.all()
    serializer_class = TileSerializer


class TileDetailView(RetrieveAPIView):
    queryset = Tile.objects.all()
    serializer_class = TileSerializer
