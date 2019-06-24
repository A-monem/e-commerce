from django.db import models

# Create your models here.
class Product(models.Model):
    title = models.CharField(max_length=30)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    company = models.CharField(max_length=30)
    description = models.TextField(blank=True)
    incart = models.BooleanField(default=False)
    count = models.IntegerField(default=0)
    total = models.DecimalField(max_digits=10, decimal_places=2)