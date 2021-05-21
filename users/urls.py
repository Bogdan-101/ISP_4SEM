from django.urls import path
from rest_framework import routers
from .views import LoginApiView, RegistrationAPIView

router = routers.SimpleRouter()
router.register('register', RegistrationAPIView, basename='users')
router.register('login', LoginApiView, basename='usersLogin')

urlpatterns = [] + router.urls
