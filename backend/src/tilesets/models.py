from django.db import models

# for "no such table" error: python manage.py migrate --run-syncdb


class Tile(models.Model):
    stage = models.CharField(max_length=20)
    title = models.CharField(max_length=20)
    image = models.URLField()
    content = models.TextField()

    def __str__(self):
        return self.title
