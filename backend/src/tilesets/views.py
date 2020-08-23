from rest_framework.generics import ListAPIView, RetrieveAPIView
from django.http import JsonResponse

from .models import Tile
from .serializers import TileSerializer


class TileListView(ListAPIView):
    queryset = Tile.objects.all()
    serializer_class = TileSerializer


class TileDetailView(RetrieveAPIView):
    queryset = Tile.objects.all()
    serializer_class = TileSerializer


def categoryParse(request, slug):
    # Stage field in Tile database has capitalized first letter (may change)
    stage = slug.capitalize()
    tiles = list(Tile.objects.filter(stage=stage).values())
    return JsonResponse(tiles, safe=False)
