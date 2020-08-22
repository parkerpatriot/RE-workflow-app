from django.urls import path

from .views import TileSetListView, TileSetDetailView

urlpatterns = [
    path('', TileSetListView.as_view()),
    path('<pk>', TileSetDetailView.as_view())
]
