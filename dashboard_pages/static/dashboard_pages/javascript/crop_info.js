$('#navbar_back_icon').on('click', () => {
    window.open('/dashboard_page/', '_self');
});
$.ajax({
    url: crop_info_api_url,
    type: 'GET',
    data: {
        action: "get the crop info",
        crop_name_value: crop_name,
    },

    dataType: 'json',

    success(json) {
        if (json.error_flag !== undefined && json.error_flag === 0) {
            // Process msg and data
            switch (json.msg) {
                case 'information_found':
                    $('#crop_name').append(
                        ''.concat(
                            '', json.data[0].crop_name, '',
                        ),
                    );

                    $('#land_preparation_div').append(
                        ''.concat(
                            '', json.data[0].land_preparation, '',
                        ),
                    );

                    $('#seed_selection_div').append(
                        ''.concat(
                            '', json.data[0].seed_selection, '',
                        ),
                    );

                    $('#seed_sowing_div').append(
                        ''.concat(
                            '', json.data[0].seed_sowing, '',
                        ),
                    );

                    $('#irrigation_div').append(
                        ''.concat(
                            '', json.data[0].irrigation, '',
                        ),
                    );

                    $('#crop_growth_div').append(
                        ''.concat(
                            '', json.data[0].crop_growth, '',
                        ),
                    );

                    $('#fertilizing_div').append(
                        ''.concat(
                            '', json.data[0].fertilizing, '',
                        ),
                    );

                    $('#harvesting_div').append(
                        ''.concat(
                            '', json.data[0].harvesting, '',
                        ),
                    );
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