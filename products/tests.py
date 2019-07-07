from django.test import TestCase
from django.urls import reverse
from .models import Product

# Create your tests here.
class TestProductsUrls(TestCase):

    def test_api_url(self):
        response = self.client.get('/api/products/')
        self.assertEquals(response.status_code, 200)

class TestProductsModels(TestCase):

    def setUp(self):
        Product.objects.create(
            title = 'product 1',
            company = 'company',
            description = 'description'
        )

    def test_product_content(self):
        product_1 = Product.objects.get(id=1)
        self.assertEquals(product_1.title, 'product 1')
        self.assertEquals(product_1.company, 'company')
        self.assertEquals(product_1.description, 'description')

    def test_product_assign_default_values(self):
        product_1 = Product.objects.get(id=1)
        self.assertEquals(product_1.price, 0)
        self.assertEquals(product_1.incart, False)
        self.assertEquals(product_1.total, 0)
        self.assertEquals(product_1.count, 0)   
