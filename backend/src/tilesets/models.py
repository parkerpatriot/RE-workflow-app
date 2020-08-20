from django.db import models


class TileSet(models.Model):
    title = models.CharField(max_length=25)
    content = models.TextField()

    def __str__(self):
        return self.title
