from django.urls import path
from . import views

urlpatterns = [
    ###################################
    # Views urls
    ###################################
    path('page1/',
         views.my_first_page, name="page"),

    path('signup_page/',
         views.signup_page, name="signup_page"),
    path('login_page/',
         views.login_page, name="login_page"),
    path('order_processing_form/<int:product_id>/',
         views.order_processing_form, name="order_processing_form"),


    ###################################
    # API Views urls
    ###################################
    path('signup_form_api/',
         views.signup_form_api.as_view(), name="signup_form_api"),
    path('login_form_api/',
         views.login_form_api.as_view(), name="login_form_api"),
    path('signup_form_filling_get_request_api/',
         views.signup_form_filling_get_request_api.as_view(), name="signup_form_filling_get_request_api"),
    path('signup_form_posting_api/',
         views.signup_form_posting_api.as_view(), name="signup_form_posting_api"),
    path('page1_info_api/',
         views.page1_info_api.as_view(), name="page1_info_api"),

]
