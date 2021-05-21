"""lab3_isp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from mainapp.views import index, board_detail, thread_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    # path('board/<int:id>', board_detail),
    # path('thread/<int:id>', thread_detail),
    path('api/', include('mainapp.api.urls')),
    path('users/', include('users.urls'))
]
