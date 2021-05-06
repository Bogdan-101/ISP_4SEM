from django.urls import path
from rest_framework import routers
from .views import BoardViewSet
from .views import ThreadViewSet

router = routers.SimpleRouter()
router.register('board', BoardViewSet, basename='board')
router.register('thread', ThreadViewSet, basename='thread')

urlpatterns = [] + router.urls
