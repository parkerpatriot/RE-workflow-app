from django.urls import path

from .views import TileSetListView, TileSetDetailView, TileListView, TileDetailView

urlpatterns = [
    path('tilesets', TileSetListView.as_view()),
    path('tilesets/<pk>', TileSetDetailView.as_view()),
    path('tiles', TileListView.as_view()),
    path('tiles/<pk>', TileDetailView.as_view())
]
