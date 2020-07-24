from django.urls import path
from . import views

urlpatterns = [
    ###################################
    # Views urls
    ###################################

    path('dashboard_page/',
         views.dashboard_page, name="dashboard_page"),
    path('crop_info_page/<str:crop_name>/',
         views.crop_info, name="crop_info_page"),


    ###################################
    # API Views urls
    ###################################
    path('dashboard_page_get_request_api/',
         views.dashboard_page_get_request_api.as_view(), name="dashboard_page_get_request_api"),
    path('logout_api/',
         views.logout_api.as_view(), name="logout_api"),
    path('crop_info_api/',
         views.crop_info_api.as_view(), name="crop_info_api"),
    #     path('units_info_api/',
    #          views.units_info_api.as_view(), name="units_info_api"),

]
