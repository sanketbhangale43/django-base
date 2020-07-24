$('#navbar_back_icon').on('click', () => {
    window.open('/dashboard_page', '_self');
});

full_name = $('#full_name_form_field')
care_of = $('#care_of_form_field')
address = $('#address_form_field')
country = $('#country_form_field')
state = $('#state_form_field')
city = $('#city_form_field')
mobile_number = $('#mob_no_form_field')

$.ajax({
    url: signup_form_filling_get_request_api_url,
    type: 'GET',
    data: {
        action: "load the data in the form fields",
    },

    dataType: 'json',

    success(json) {
        if (json.error_flag !== undefined && json.error_flag === 0) {
            // Process msg and data
            switch (json.msg) {
                case 'data found':
                    full_name_value = `${json.data[0].first_name} ${json.data[0].middle_name} ${json.data[0].last_name}`
                    full_name.val(full_name_value)
                    address.val(json.data[0].address)
                    country.val(json.data[0].country)
                    state.val(json.data[0].state)
                    mobile_number.val(json.data[0].phone_number)


                    break;
                default:
            }
        } else {
            // Error occured
            switch (json.msg) {
                case 'invalid request':


                    break;
                case 'wrong action':

                    break;
                default:
            }
        }
    },
});

$('#order_form').on('submit', (event) => {
    event.preventDefault();
    $.ajax({
        url: $('#order_form').attr('action'),
        type: 'POST',
        data: {
            full_name: $('#full_name_form_field').val(),
            care_of_name: $('#care_of_form_field').val(),
            address: $('#address_form_field').val(),
            country: $('#country_form_field').val(),
            state: $('#state_form_field').val(),
            city: $('#city_form_field').val(),
            mobile_number: $('#mob_no_form_field').val(),
            product_id_value: product_id,
        },
        dataType: 'json',

        success(json) {
            if (json.error_flag !== undefined && json.error_flag === 0) {
                // Process msg and data
                switch (json.msg) {
                    case 'data posted':
                        window.open('/dashboard_page', '_self');
                        break;
                    default:
                }
            } else {
                // Error occured
                switch (json.msg) {
                    case 'request is invalid':
                        $('#something_goes_wrong_alert_div').removeClass('d-none');
                        $('#city_form_field').css('border-color', 'red');
                        $('#care_of_form_field').css('border-color', 'red');


                        break;
                    case 'wrong action':

                        break;
                    default:
                }
            }
        },
    });
});
