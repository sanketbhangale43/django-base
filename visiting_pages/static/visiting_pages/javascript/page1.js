$('#register_button').on('click', () => {
    window.open('/signup_page', '_self');
});

$('#login_button').on('click', () => {
    window.open('/login_page', '_self');
});




$.ajax({
    url: page1_info_api_url,
    type: 'GET',
    data: {
        action: "Get the page1 data",
    },
    dataType: 'json',

    success(json) {
        if (json.error_flag !== undefined && json.error_flag === 0) {
            // Process msg and data
            switch (json.msg) {
                case 'data found':
                    units = json.data
                    for (i = 0; i < units.length; i++) {

                        value_of_unit = units[i].value_per_unit
                        availability = units[i].availability
                        if (availability != 0) {
                            $(`#product_value_${i}`).append(
                                ''.concat(
                                    '', value_of_unit, '',
                                )
                            )
                            $(`#products_available_${i}`).append(
                                ''.concat(
                                    '', availability, '',
                                )
                            )
                        }
                        if (availability == 0) {
                            $(`#buy_now_button_${i + 1}`).prop('disabled', true);
                            $(`#product_value_${i}`).append(
                                ''.concat(
                                    '', value_of_unit, '',
                                )
                            )
                            $(`#products_available_${i}`).append(
                                ''.concat(
                                    '', availability, '',
                                )
                            )
                        }
                    }

                    break;
                default:
            }
        } else {
            // Error occured
            switch (json.msg) {
                case 'request is invalid':


                    break;
                case 'wrong action':

                    break;
                default:
            }
        }
    },
});

$('#buy_now_button_1').on('click', () => {
    window.open('/login_page', '_self');
})
$('#buy_now_button_2').on('click', () => {
    window.open('/login_page', '_self');
})
$('#buy_now_button_3').on('click', () => {
    window.open('/login_page', '_self');
})
$('#buy_now_button_4').on('click', () => {
    window.open('/login_page', '_self');
})
$('#buy_now_button_5').on('click', () => {
    window.open('/login_page', '_self');
})
$('#buy_now_button_6').on('click', () => {
    window.open('/login_page', '_self');
})
$('#buy_now_button_7').on('click', () => {
    window.open('/login_page', '_self');
})
$('#buy_now_button_8').on('click', () => {
    window.open('/login_page', '_self');
})