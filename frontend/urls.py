from django.urls import path
from frontend.views import index

urlpatterns = [
    path('', index, name='home'),
    path('cart/', index, name='cart'),
    path('details/', index, name='details'),
]