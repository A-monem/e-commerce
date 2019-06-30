from django.db import models

# Create your models here.
class Product(models.Model):
    title = models.CharField(max_length=30)
    price = models.FloatField(default=0.0)
    company = models.CharField(max_length=30)
    description = models.TextField(blank=True)
    incart = models.BooleanField(default=False)
    count = models.IntegerField(default=0)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='producImage', null=True)