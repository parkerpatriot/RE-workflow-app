from django.db import models

# for "no such table" error: python manage.py migrate --run-syncdb


class TileSet(models.Model):
    set_name = models.CharField(max_length=20)
    set_header = models.CharField(max_length=20)
    tiles = models.ForeignKey('Tiles', on_delete=models.CASCADE)

    def __str__(self):
        return self.set_name


class Tiles(models.Model):
    title = models.CharField(
        max_length=20)
    image = models.URLField()
    content = models.TextField()

    def __str__(self):
        return self.title
