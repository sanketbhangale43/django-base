from django.db import models

# Create your models here.


class crops(models.Model):
    crop_name = models.CharField(max_length=255, primary_key=True)
    land_preparation = models.TextField()
    seed_selection = models.TextField()
    seed_sowing = models.TextField()
    irrigation = models.TextField()
    crop_growth = models.TextField()
    fertilizing = models.TextField()
    harvesting = models.TextField()


class product_details(models.Model):
    product_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    availability = models.IntegerField()
    items_sold = models.IntegerField()
    value_per_unit = models.IntegerField()
