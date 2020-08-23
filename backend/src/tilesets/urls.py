from django.urls import path

from .views import TileListView, TileDetailView, categoryParse

urlpatterns = [
    path('tiles', TileListView.as_view()),
    path('tiles/<int:pk>', TileDetailView.as_view()),
    path('tiles/<slug:slug>', categoryParse, name='categoryParse')
]
