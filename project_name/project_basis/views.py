from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = 'project_basis/index.html'
