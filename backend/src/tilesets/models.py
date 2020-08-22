from django.db import models

# for "no such table" error: python manage.py migrate --run-syncdb


class TileSet(models.Model):
    set_name = models.CharField(max_length=20)
    set_header = models.CharField(max_length=100)

    def __str__(self):
        return self.set_name


class Tile(models.Model):
    title = models.CharField(max_length=20)
    image = models.URLField()
    content = models.TextField()
    tile_set = models.ForeignKey(
        to=TileSet, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.title
