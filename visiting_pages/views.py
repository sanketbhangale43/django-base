from django.shortcuts import render
from django.contrib.auth import hashers
from rest_framework.views import APIView
from .forms import signup_form, login_form, signup_form_filling_action_check, order_form_fields_checking_form
from rest_framework.response import Response
from .models import registered_users, sales_data
from dashboard_pages.models import product_details

from django.urls import reverse
from .responses import API_response
from rest_framework.permissions import AllowAny
from .serializers import user_info_data, units_info_data
# Create your views here.


def my_first_page(request):
    template_name = "visiting_pages/page1.html"
    context = {
        "page1_info_api_url": reverse('page1_info_api'),
    }
    return render(request, template_name, context)


def order_processing_form(request, product_id):
    template_name = "visiting_pages/order_processing_form.html"
    user_id = -1
    try:
        user_id = request.session['user_id']
    except:
        user_id = -1
        template_name = "dashboard_pages/error_404_page.html"
    context = {
        "user_id_value": user_id,
        "product_id": product_id,
        "signup_form_filling_get_request_api_url": reverse('signup_form_filling_get_request_api'),
        "signup_form_posting_api_url": reverse('signup_form_posting_api'),
    }
    return render(request, template_name, context)


def signup_page(request):
    template_name = "visiting_pages/sign_up_page.html"
    context = {

    }
    return render(request, template_name, context)


def login_page(request):
    template_name = "visiting_pages/login_page.html"
    context = {

    }
    return render(request, template_name, context)


# password = hashers.make_password(form.cleaned_data["password"])
# hashers.check_password(password, actual_password)

class signup_form_api(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        form = signup_form(request.POST)
        if form.is_valid():
            first_name = form.cleaned_data["first_name"]
            middle_name = form.cleaned_data["middle_name"]
            last_name = form.cleaned_data["last_name"]
            email = form.cleaned_data["email"]
            country = form.cleaned_data["country"]
            state = form.cleaned_data["state"]
            username = form.cleaned_data["username"]
            password = hashers.make_password(form.cleaned_data["password"])
            phone_number = form.cleaned_data["phone_number"]
            address = form.cleaned_data["address"]
            try:
                query_set = registered_users.objects.filter(email=email)
                query_set2 = registered_users.objects.filter(
                    username=username)
                print(query_set)
                if query_set.count() == 0 and query_set2.count() == 0:
                    registered_users_obj = registered_users()
                    registered_users_obj.first_name = first_name
                    registered_users_obj.middle_name = middle_name
                    registered_users_obj.last_name = last_name
                    registered_users_obj.email = email
                    registered_users_obj.country = country
                    registered_users_obj.state = state
                    registered_users_obj.country = country
                    registered_users_obj.username = username
                    registered_users_obj.password = password
                    registered_users_obj.phone_number = phone_number
                    registered_users_obj.address = address
                    registered_users_obj.save()
                    return Response(API_response().Account_created_successfully())
                else:
                    return Response(API_response().Account_Already_Exists())
            except:
                return Response(API_response().Something_Goes_Wrong())
        else:
            return Response(API_response().invalid_request())


class login_form_api(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        form = login_form(request.POST)
        if form.is_valid():
            username = form.cleaned_data["username"]
            password = form.cleaned_data["password"]
            query_set = registered_users.objects.filter(username=username)
            if query_set.count() > 1 or query_set.count() == 0:
                return Response(API_response().user_not_found())
            else:
                actual_password = query_set[0].password
                if hashers.check_password(password, actual_password):
                    request.session["user_id"] = query_set[0].user_id
                    return Response(API_response().Logged_in_successfully())
                else:
                    return Response(API_response().password_is_wrong())
        else:
            return Response(API_response().request_is_invalid())


class signup_form_filling_get_request_api(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        form = signup_form_filling_action_check(request.GET)
        if form.is_valid():
            action = form.cleaned_data["action"]
            if action == "load the data in the form fields":
                user_id = request.session['user_id']
                user = registered_users.objects.filter(user_id=user_id)
                print(user)
                searialized_data = user_info_data(
                    user, many=True).data
                return Response(API_response().data_found(searialized_data))
            else:
                return Response(API_response().user_not_found())
        else:
            return Response(API_response().request_is_invalid())


class signup_form_posting_api(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        form = order_form_fields_checking_form(request.POST)
        if form.is_valid():
            full_name = form.cleaned_data["full_name"]
            care_of_name = form.cleaned_data["care_of_name"]
            address = form.cleaned_data["address"]
            country = form.cleaned_data["country"]
            state = form.cleaned_data["state"]
            city = form.cleaned_data["city"]
            mobile_number = form.cleaned_data["mobile_number"]
            product_id_value = form.cleaned_data["product_id_value"]

            user_id_value = request.session['user_id']
            registered_users_obj = registered_users.objects.get(
                user_id=user_id_value)
            product_details_obj = product_details.objects.get(
                product_id=product_id_value)

            sales_data_obj = sales_data()
            sales_data_obj.buyer_id = registered_users_obj
            sales_data_obj.product_id = product_details_obj
            sales_data_obj.full_name = full_name
            sales_data_obj.care_of_name = care_of_name
            sales_data_obj.address = address
            sales_data_obj.country = country
            sales_data_obj.city = city
            sales_data_obj.state = state
            sales_data_obj.mobile_number = mobile_number

            sales_data_obj.save()
            product_details_obj = product_details.objects.filter(
                product_id=product_id_value)[0]
            product_details_obj.availability -= 1
            product_details_obj.items_sold += 1
            product_details_obj.save()
            return Response(API_response().data_posted())
        else:
            return Response(API_response().request_is_invalid())


class page1_info_api(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        form = signup_form_filling_action_check(request.GET)
        if form.is_valid():
            action = form.cleaned_data["action"]
            if action == "Get the page1 data":
                searialized_data = units_info_data(
                    product_details.objects.all(), many=True).data
                return Response(API_response().data_found(searialized_data))
            else:
                return Response(API_response().user_not_found())
        else:
            return Response(API_response().request_is_invalid())
