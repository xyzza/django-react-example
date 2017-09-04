from django.conf.urls import url, include
from django.contrib import admin
from project_basis.views import IndexView


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # app urls:
    url(r'^', IndexView.as_view()),
    url(r'^api/v0/', include('api_v0.urls')),
]
