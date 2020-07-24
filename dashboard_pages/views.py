from rest_framework.permissions import AllowAny
from django.shortcuts import render

from rest_framework.views import APIView

from .forms import action_check_form, crop_name_check_form, action_check_form2
from rest_framework.response import Response
from visiting_pages.models import registered_users
from django.urls import reverse
from .responses import API_response
from .serializers import dashboard_get_request_serializer, crop_info_serializer
from .models import crops
# Create your views here.


def dashboard_page(request):
    template_name = "dashboard_pages/dashboard.html"
    user_id = -1
    try:
        user_id = request.session['user_id']
    except:
        user_id = -1
        template_name = "dashboard_pages/error_404_page.html"
    context = {
        "dashboard_page_get_request_api_url": reverse('dashboard_page_get_request_api'),
        "log_out_api_url": reverse('logout_api'),
        "user_id_value": user_id,


    }
    return render(request, template_name, context)


def crop_info(request, crop_name):
    template_name = "dashboard_pages/crop_info.html"
    user_id = request.session['user_id']
    context = {
        "user_id_value": user_id,
        "crop_name": crop_name,
        "crop_info_api_url": reverse('crop_info_api'),
    }
    return render(request, template_name, context)


class dashboard_page_get_request_api(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        # try:
        uesr_id = request.session["user_id"]
        user_set = registered_users.objects.filter(user_id=uesr_id)
        searialized_data = dashboard_get_request_serializer(
            user_set, many=True).data
        return Response(API_response().user_information(searialized_data))
        # except:
        #     return Response(API_response().invalid_request())


class logout_api(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        form = action_check_form(request.POST)
        if form.is_valid():
            action = form.cleaned_data["action"]
            if action == "clear the session for logout":
                request.session.flush()
                return Response(API_response().log_out_is_successful())
            else:
                return Response(API_response().wrong_action())
        else:
            return Response(API_response().invalid_request())


class crop_info_api(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        form = action_check_form2(request.GET)
        if form.is_valid():
            action = form.cleaned_data["action"]
            if action == "get the crop info":
                new_form = crop_name_check_form(request.GET)
                if new_form.is_valid():
                    crop_name_value = new_form.cleaned_data["crop_name_value"]
                    crop_info = crops.objects.filter(crop_name=crop_name_value)
                    serialized_data = crop_info_serializer(
                        crop_info, many=True).data
                    return Response(API_response().crop_information_found(serialized_data))
                else:
                    return Response(API_response().invalid_request())
            else:
                return Response(API_response().wrong_action())
        else:
            return Response(API_response().invalid_request())
