from rest_framework import serializers
from .models import TileSet
from .models import Tile


class TileSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = TileSet
        fields = '__all__'


class TileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tile
        fields = '__all__'
