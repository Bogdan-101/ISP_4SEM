from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

from mainapp.views import index, board_detail, thread_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    # path('board/<int:id>', board_detail),
    # path('thread/<int:id>', thread_detail),
    path('api/', include('mainapp.api.urls')),
    path('users/', include('users.urls'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
