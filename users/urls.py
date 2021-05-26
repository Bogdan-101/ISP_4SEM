from django.urls import path
from rest_framework import routers
from .views import LoginApiView, RegistrationAPIView, UserRetrieveUpdateAPIView

router = routers.SimpleRouter()
router.register('register', RegistrationAPIView, basename='register')
router.register('login', LoginApiView, basename='login')
router.register('auth_token', UserRetrieveUpdateAPIView, basename='auth_token')

urlpatterns = [] + router.urls
