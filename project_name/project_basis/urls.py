from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from django.conf import settings
from project_basis.views import IndexView


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # include apps urls:
    url(r'^', IndexView.as_view()),
    url(r'^api/v0/', include('api_v0.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
