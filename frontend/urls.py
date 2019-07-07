from django.urls import path,re_path
from frontend.views import index, page_not_found

urlpatterns = [
    path('', index, name='home'),
    path('cart/', index, name='cart'),
    path('details/', index, name='details'),
    re_path('((.)+)/', page_not_found, name='404')
]