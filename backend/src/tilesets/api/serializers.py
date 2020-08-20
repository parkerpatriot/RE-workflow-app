from rest_framework import serializers
from tilesets.models import TileSet


class TileSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = TileSet
        fields = ('title', 'content')
