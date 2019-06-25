from django.urls import path
from frontend.views import index

urlpatterns = [
    path('', index),
    path('cart/', index),
    path('details/', index),
]