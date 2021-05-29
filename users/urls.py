from django.urls import path
from rest_framework import routers
from .views import LoginApiView, RegistrationAPIView, UserRetrieveUpdateAPIView, UserRetrieveById

router = routers.SimpleRouter()
router.register('register', RegistrationAPIView, basename='register')
router.register('login', LoginApiView, basename='login')
router.register('auth_token', UserRetrieveUpdateAPIView, basename='auth_token')
router.register('user', UserRetrieveById, basename='user')

urlpatterns = [] + router.urls
