from rest_framework import serializers
from visiting_pages.models import registered_users
from .models import crops, product_details


class units_info_serializer(serializers.ModelSerializer):
    class Meta:
        model = product_details
        fields = ('value_per_unit', 'availability',)


class dashboard_get_request_serializer(serializers.ModelSerializer):
    units_info_data = serializers.SerializerMethodField()

    class Meta:
        model = registered_users
        fields = ('username', 'state', 'units_info_data',)

    def get_units_info_data(self, object):
        return units_info_serializer(product_details.objects.all(), many=True).data


class crop_info_serializer(serializers.ModelSerializer):

    class Meta:
        model = crops
        fields = ('crop_name', 'land_preparation', 'seed_selection', 'seed_sowing',
                  'irrigation', 'crop_growth', 'fertilizing', 'harvesting',)
