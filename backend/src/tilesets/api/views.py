from rest_framework.generics import ListAPIView, RetrieveAPIView

from tilesets.models import TileSet
from .serializers import TileSetSerializer


class TileSetListView(ListAPIView):
    queryset = Tileset.objects.all()
    serializer_class = TileSetSerializer


class TileSetDetailView(RetrieveAPIView):
    queryset = Tileset.objects.all()
    serializer_class = TileSetSerializer
