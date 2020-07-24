states_arr = ['Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',]

for (i = 0; i < states_arr.length; i += 1) {
    $('#select_list').append(
        ''.concat(
            '<option>', states_arr[i], '</option>',
        )
    );
}
email = $('#email_field').val();
username = $('#username_field').val();
password = $('#password_field').val();
confirm_password = $('#confirm_password_field').val();
address = $('#address').val();

sign_up_form = $('#sign_up_form');
sign_up_form.on('submit', (event) => {
    event.preventDefault();
    $.ajax({
        url: sign_up_form.attr('action'),
        type: 'POST',
        data: {
            first_name: $('#first_name_field').val(),
            middle_name: $('#middle_name_field').val(),
            last_name: $('#last_name_field').val(),
            email: $('#email_field').val(),
            country: $('#country_field').val(),
            state: $('#select_list option:selected').text(),
            username: $('#username_field').val(),
            password: $('#password_field').val(),
            confirm_password: $('#confirm_password_field').val(),
            phone_number: $('#telephone_field').val(),
            address: $('#address').val(),
        },

        dataType: 'json',

        success(json) {
            if (json.error_flag !== undefined && json.error_flag === 0) {
                // Process msg and data
                switch (json.msg) {
                    case 'Account created successfully':
                        $('#Account_successfully_created_alert_div').removeClass('d-none');
                        $('#Invalid_request_alert_div').addClass('d-none');
                        $('#Account_already_exists_alert_div').addClass('d-none');
                        $('#something_goes_wrong_alert_div').addClass('d-none');
                        $("#confirm_password_alert_div").addClass('d-none')


                        $('#email_field').css('border-color', '');
                        $('#username_field').css('border-color', '');
                        $('#password_field').css('border-color', '');
                        $('#confirm_password_field').css('border-color', '');
                        break;
                    default:
                }
            } else {
                // Error occured
                switch (json.msg) {
                    case 'invalid request':
                        alert('sss');
                        $('#Invalid_request_alert_div').removeClass('d-none');
                        $('#Account_already_exists_alert_div').addClass('d-none');
                        $('#something_goes_wrong_alert_div').addClass('d-none');
                        $("#confirm_password_alert_div").addClass('d-none')

                        $('#email_field').css('border-color', 'red');
                        $('#username_field').css('border-color', 'red');
                        $('#password_field').css('border-color', 'red');
                        $('#confirm_password_field').css('border-color', 'red');

                        break;
                    case 'Account Already Exists':
                        $('#Account_already_exists_alert_div').removeClass('d-none');
                        $('#Account_successfully_created_alert_div').addClass('d-none');
                        $('#Invalid_request_alert_div').addClass('d-none');
                        $('#something_goes_wrong_alert_div').addClass('d-none');
                        $("#confirm_password_alert_div").addClass('d-none')

                        break;
                    case 'Something Goes Wrong':
                        $('#something_goes_wrong_alert_div').removeClass('d-none');
                        $('#Account_already_exists_alert_div').addClass('d-none');
                        $('#Invalid_request_alert_div').addClass('d-none');
                        $("#confirm_password_alert_div").addClass('d-none')

                        break;
                    default:
                }
            }
        },
    });
});