from django.test import TestCase
from django.urls import reverse, resolve
from .views import index

# Create your tests here.
class TestHomePage(TestCase):
    
    def test_home_url(self):
        response = self.client.get('/')
        self.assertEquals(response.status_code, 200)
        
    def test_home_url_by_name(self):
        response = self.client.get(reverse('home'))
        self.assertEquals(response.status_code, 200)

    def test_home_url_return_correct_template(self):
        response = self.client.get(reverse('home'))
        self.assertTemplateUsed(response, 'index.html')

class TestDetailsPage(TestCase):
    
    def test_details_url(self):
        response = self.client.get('/details/')
        self.assertEquals(response.status_code, 200)
        
    def test_details_url_by_name(self):
        response = self.client.get(reverse('details'))
        self.assertEquals(response.status_code, 200)

    def test_details_url_return_correct_template(self):
        response = self.client.get(reverse('details'))
        self.assertTemplateUsed(response, 'index.html')

class TestCartPage(TestCase):
    
    def test_cart_url(self):
        response = self.client.get('/cart/')
        self.assertEquals(response.status_code, 200)  
        
    def test_cart_url_by_name(self):
        response = self.client.get(reverse('cart'))
        self.assertEquals(response.status_code, 200)

    def test_cart_url_return_correct_template(self):
        response = self.client.get(reverse('cart'))
        self.assertTemplateUsed(response, 'index.html')        