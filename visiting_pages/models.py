from django.db import models
from dashboard_pages.models import product_details


class registered_users(models.Model):
    user_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    phone_number = models.BigIntegerField()
    address = models.CharField(max_length=255)


class sales_data(models.Model):
    buyer_id = models.ForeignKey(registered_users, on_delete=models.CASCADE)
    product_id = models.ForeignKey(product_details, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=255)
    care_of_name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    mobile_number = models.BigIntegerField()
