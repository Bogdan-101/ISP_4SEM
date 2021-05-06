from django.urls import path
from rest_framework import routers
from .views import BoardViewSet, ThreadViewSet, CommentViewSet

router = routers.SimpleRouter()
router.register('board', BoardViewSet, basename='board')
router.register('thread', ThreadViewSet, basename='thread')
router.register('comment', CommentViewSet, basename='comment')

urlpatterns = [] + router.urls
