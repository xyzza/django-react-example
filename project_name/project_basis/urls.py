from django.conf.urls import url, include
from django.contrib import admin


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # include apps urls:
    url(r'^api/v0/', include('api_v0.urls')),
]
