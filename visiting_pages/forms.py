from django import forms


class signup_form(forms.Form):
    first_name = forms.CharField()
    middle_name = forms.CharField()
    last_name = forms.CharField()
    email = forms.EmailField()
    country = forms.CharField()
    state = forms.CharField()
    username = forms.CharField()
    password = forms.CharField()
    phone_number = forms.IntegerField()
    address = forms.CharField()


class login_form(forms.Form):
    username = forms.CharField()
    password = forms.CharField()


class signup_form_filling_action_check(forms.Form):
    action = forms.CharField()


class order_form_fields_checking_form(forms.Form):
    full_name = forms.CharField()
    care_of_name = forms.CharField()
    address = forms.CharField()
    country = forms.CharField()
    state = forms.CharField()
    city = forms.CharField()
    mobile_number = forms.IntegerField()
    product_id_value = forms.IntegerField()
