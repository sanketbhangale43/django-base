from rest_framework import serializers
from .models import registered_users
from dashboard_pages.models import product_details


class user_info_data(serializers.ModelSerializer):
    class Meta:
        model = registered_users
        fields = ('first_name', 'middle_name', 'last_name', 'email', 'country',
                  'state', 'phone_number', 'address',)


class units_info_data(serializers.ModelSerializer):
    class Meta:
        model = product_details
        fields = ('value_per_unit', 'availability',)
