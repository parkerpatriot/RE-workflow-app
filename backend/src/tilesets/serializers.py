from rest_framework import serializers
from .models import TileSet


class TileSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = TileSet
        fields = '__all__'
