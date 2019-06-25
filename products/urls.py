from rest_framework import routers
from products.views import ProductViewSet

router = routers.DefaultRouter()
router.register('products', ProductViewSet, 'products')

urlpatterns=router.urls