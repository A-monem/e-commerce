from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def page_not_found(request, *args, **kwargs):
    return render(request, 'page_not_found.html')    