from django import forms


class action_check_form(forms.Form):
    action = forms.CharField()


class action_check_form2(forms.Form):
    action = forms.CharField()


class crop_name_check_form(forms.Form):
    crop_name_value = forms.CharField()


class units_info_check_form(forms.Form):
    action = forms.CharField()
