login_form = $('#login_form');

login_form.on('submit', (event) => {
    event.preventDefault();
    $.ajax({
        url: login_form.attr('action'),
        type: 'POST',
        data: {
            username: $('#username').val(),
            password: $('#password').val(),
        },

        dataType: 'json',

        success(json) {
            if (json.error_flag !== undefined && json.error_flag === 0) {
                // Process msg and data
                switch (json.msg) {
                    case 'Logged in successfully':
                        $('#request_is_invalid_alert_div').addClass('d-none');
                        $('#password_is_wrong_alert_div').addClass('d-none');
                        window.open('/dashboard_page/', '_self');
                        break;
                    default:
                }
            } else {
                // Error occured
                switch (json.msg) {
                    case 'user not found':
                        $('#user_not_found_alert_div').removeClass('d-none');
                        $('#password_is_wrong_alert_div').addClass('d-none');

                        break;
                    case 'password is wrong':
                        $('#password_is_wrong_alert_div').removeClass('d-none');
                        $('#user_not_found_alert_div').addClass('d-none');
                        break;
                    case 'request is invalid':
                        $('#request_is_invalid_alert_div').removeClass('d-none');
                        $('#user_not_found_alert_div').addClass('d-none');
                        $('#password_is_wrong_alert_div').addClass('d-none');

                        break;
                    default:
                }
            }
        },
    });

});