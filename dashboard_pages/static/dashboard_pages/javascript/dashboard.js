$.ajax({
    url: dashboard_page_get_request_api_url,
    type: 'GET',
    data: {
    },

    dataType: 'json',

    success(json) {
        if (json.error_flag !== undefined && json.error_flag === 0) {
            // Process msg and data
            switch (json.msg) {
                case 'data received':

                    user_info = json.data;
                    actual_data = user_info[0];
                    user_name = actual_data.username;
                    user_state = actual_data.state;
                    units = actual_data.units_info_data;
                    for (i = 0; i < units.length; i++) {

                        value_of_unit = units[i].value_per_unit
                        availability = units[i].availability
                        if (availability != 0) {
                            $(`#buy_now_button_${i + 1}`).prop('disabled', false);

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
                    $('#state_value').append(
                        ''.concat(
                            '', user_state, '',
                        )
                    )
                    $('#user_name_value').append(
                        ''.concat(
                            '', user_name, '',
                        )
                    )

                    if (user_state == 'Andhra Pradesh') {
                        Andhra_Pradesh_crops_arr = [
                            'Pearl millet',
                            'Maize',
                            'Finger millet',
                            'Millet',
                            'Legume',
                            'Tobacco',
                            'Cotton',
                            'Sugarcane',
                        ]
                        for (i = 0; i < Andhra_Pradesh_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Andhra_Pradesh_crops_arr[i], '">', Andhra_Pradesh_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Arunachal Pradesh') {
                        Arunachal_Pradesh_crops_arr = [
                            'Rice',
                            'Maize',
                            'Millet',
                            'Wheat',
                            'Legume',
                            'Sugarcane',
                            'Ginger',

                        ]
                        for (i = 0; i < Arunachal_Pradesh_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Arunachal_Pradesh_crops_arr[i], '">', Arunachal_Pradesh_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Assam') {
                        Assam_crops_arr = [
                            'Jute',
                            'sugarcane',
                            'fruits',
                            'tea',
                            'pulses',
                            'coconut',
                            'potatos',
                            'cotton',
                            'arecanuts',

                        ]
                        for (i = 0; i < Assam_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Assam_crops_arr[i], '">', Assam_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Bihar') {
                        Bihar_crops_arr = [
                            'Rice',
                            'wheat',
                            'Arhar',
                            'urad',
                            'moong',
                            'gram',
                            'pea',
                            'lentils',
                            'khesaria',
                            'potato',
                            'onion',
                            'eggplant',
                            'cauliflower',
                        ]
                        for (i = 0; i < Bihar_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Bihar_crops_arr[i], '">', Bihar_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Chhattisgarh') {
                        Chhattisgarh_crops_arr = [
                            'Paddy',
                            'maize',
                            'jowar',
                            'groundnut',
                            'gram',
                            'wheat',
                        ]
                        for (i = 0; i < Chhattisgarh_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Chhattisgarh_crops_arr[i], '">', Chhattisgarh_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Goa') {
                        Goa_crops_arr = [
                            'rice',
                            'Maize',
                            'Sorghum',
                            'Pearl millet',
                            'Legume',
                            'coconut',
                            'Cashew',
                            'Areca nut',
                            'Mangoes',
                            'Jackfruit',
                            'Bananas',
                            'Pineapples',
                        ]
                        for (i = 0; i < Goa_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Goa_crops_arr[i], '">', Goa_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Gujarat') {
                        Gujarat_crops_arr = [
                            'tobacco',
                            'cotton',
                            'groundnuts',
                            'rice',
                            'wheat',
                            'jowar',
                            'bajra',
                            'maize',
                            'tur',
                            'gram',
                        ]
                        for (i = 0; i < Gujarat_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Gujarat_crops_arr[i], '">', Gujarat_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Haryana') {
                        Haryana_crops_arr = [
                            'wheat',
                            'rice',
                            'sugarcane',
                            'cotton',
                            'oilseeds',
                            'pulses',
                            'barley',
                            'maize',
                            'millet',
                        ]
                        for (i = 0; i < Haryana_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Haryana_crops_arr[i], '">', Haryana_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Himachal Pradesh') {
                        Himachal_Pradesh_crops_arr = [
                            'wheat',
                            'maize',
                            'rice',
                            'barley',
                            'seed-potato',
                            'ginger',
                            'vegetables',
                            'vegetable seeds',
                            'mushrooms',
                            'chicory seeds',
                            'hops',
                            'olives',
                            'Apple',
                        ]
                        for (i = 0; i < Himachal_Pradesh_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Himachal_Pradesh_crops_arr[i], '">', Himachal_Pradesh_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Jammu and Kashmir') {
                        Jammu_and_Kashmir_crops_arr = [
                            'Wheat',
                            'rice',
                            'Basmati rice',
                            'rajmash (pulses)',
                        ]
                        for (i = 0; i < Jammu_and_Kashmir_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Jammu_and_Kashmir_crops_arr[i], '">', Jammu_and_Kashmir_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Jharkhand') {
                        Jharkhand_crops_arr = [
                            'millet',
                            'Wheat',
                            'Legume',
                            'Chickpea',
                            'Mustard Plant',
                            'Rice',
                            'Maize',
                            'ground nuts',
                        ]
                        for (i = 0; i < Jharkhand_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Jharkhand_crops_arr[i], '">', Jharkhand_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Karnataka') {
                        Karnataka_crops_arr = [
                            'Rice',
                            'Finger millet',
                            'sorgum',
                            'Maize',
                            'Legume',
                            'Cashew',
                            'coconut',
                            'areca nut',
                            'cardamom',
                            'chilli pepper',
                            'cotton',
                            'sugarcane',
                            'tobacco',
                        ]
                        for (i = 0; i < Karnataka_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Karnataka_crops_arr[i], '">', Karnataka_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Kerala') {
                        Kerala_crops_arr = [
                            'coconut',
                            'rubber',
                            'tea',
                            'coffee',
                            'pepper',
                            'cardamom',
                            'areca nut',
                            'ginger',
                            'nutmeg',
                            'cinnamon',
                            'paddy tapioca',
                        ]
                        for (i = 0; i < Kerala_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Kerala_crops_arr[i], '">', Kerala_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Madhya Pradesh') {
                        Madhya_Pradesh_crops_arr = [
                            'Paddy',
                            'Wheat',
                            'Maize',
                            'Jowar',
                            'Cereals',
                            'Gram',
                            'Tur',
                            'Urad',
                            'Moong',
                            'Pulses',
                            'Soybean',
                            'Groundnut',
                            'Mustard',
                        ]
                        for (i = 0; i < Madhya_Pradesh_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Madhya_Pradesh_crops_arr[i], '">', Madhya_Pradesh_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Maharashtra') {
                        Maharashtra_crops_arr = [
                            'Mangoes',
                            'Grapes',
                            'Bananas',
                            'Orange',
                            'Wheat',
                            'Rice',
                            'Sorghum',
                            'Pearl millet',
                            'Legume',
                            'Peanut',
                            'Cotton',
                            'Sugarcane',
                            'Turmeric',

                        ]
                        for (i = 0; i < Maharashtra_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Maharashtra_crops_arr[i], '">', Maharashtra_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Manipur') {
                        Manipur_crops_arr = [
                            'wheat',
                            'maize',
                            'pulses',
                            'Potato',
                            'ginger',
                            'gram',
                            'cauliflower',
                            'cabbage',
                            'mustard',
                            'turmeric',
                            'pineapple',
                            'banana',
                            'lemon',
                            'orange',
                            'passion fruit',
                            'pomegranate',
                            'papaya',
                            'orchid',
                            'cashew',

                        ]
                        for (i = 0; i < Manipur_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Manipur_crops_arr[i], '">', Manipur_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Meghalaya') {
                        Meghalaya_crops_arr = [
                            'potatoes',
                            'rice',
                            'maize',
                            'pineapples',
                            'bananas',
                            'papayas',
                            'spices',

                        ]
                        for (i = 0; i < Meghalaya_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Meghalaya_crops_arr[i], '">', Meghalaya_crops_arr[i], '</optionli>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Mizoram') {
                        Mizoram_crops_arr = [
                            'Mandarin Orange',
                            'Banana',
                            'Passion Fruit',
                            'Grapes',
                            'Hatkora',
                            'Pineapple',
                            'Papaya',
                            'Anthurium',
                            'Bird of Paradise',
                            'Orchid',
                            'Chrysanthemum',
                            'Rose',

                        ]
                        for (i = 0; i < Mizoram_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Mizoram_crops_arr[i], '">', Mizoram_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Nagaland') {
                        Nagaland_crops_arr = [
                            'rice',
                            'millet',
                            'maize',
                            'pulses',
                            'sugarcane',
                            'potato',
                            'Coffee',
                            'cardamom',
                            'tea',

                        ]
                        for (i = 0; i < Nagaland_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Nagaland_crops_arr[i], '">', Nagaland_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Odisha') {
                        Odisha_crops_arr = [
                            'rice',
                            'pulses',
                            'oil seeds',
                            'jute',
                            'roselle',
                            'sugarcane',
                            'coconut',
                            'tea',
                            'cotton',
                            'rubber',

                        ]
                        for (i = 0; i < Odisha_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Odisha_crops_arr[i], '">', Odisha_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Punjab') {
                        Punjab_crops_arr = [
                            'wheat',
                            'rice',
                            'cotton',
                            'sugarcane',
                            'pearl millet',
                            'maize',
                            'barley',
                            'bajra',
                            'jowar',

                        ]
                        for (i = 0; i < Punjab_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Punjab_crops_arr[i], '">', Punjab_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Rajasthan') {
                        Rajasthan_crops_arr = [
                            'Wheat',
                            'barley',
                            'pulses',
                            'sugarcane',
                            'oilseeds',
                            'Cotton',
                            'tobacco',
                        ]
                        for (i = 0; i < Rajasthan_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Rajasthan_crops_arr[i], '">', Rajasthan_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Sikkim') {
                        Sikkim_crops_arr = [
                            'maize',
                            'millet',
                            'wheat',
                            'barley',
                            'oranges',
                            'tea',
                            'cardamom',
                        ]
                        for (i = 0; i < Sikkim_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Sikkim_crops_arr[i], '">', Sikkim_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Tamil Nadu') {
                        Tamil_Nadu_crops_arr = [
                            'rice',
                            'jowar',
                            'ragi',
                            'bajra',
                            'maize',
                            'cotton', ,
                            'sugarcane',
                            'tea',
                            'coffee',
                            'coconut',
                        ]
                        for (i = 0; i < Tamil_Nadu_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Tamil_Nadu_crops_arr[i], '">', Tamil_Nadu_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Telangana') {
                        Telangana_crops_arr = [
                            'Rice',
                            'cotton',
                            'sugar cane',
                            'mango',
                            'tobacco',
                            'sunflower',
                            'peanuts',
                        ]
                        for (i = 0; i < Telangana_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Telangana_crops_arr[i], '">', Telangana_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Tripura') {
                        Tripura_crops_arr = [
                            'Rice',
                            'potato',
                            'sugarcane',
                            'mesta',
                            'pulses',
                            'jute',
                        ]
                        for (i = 0; i < Tripura_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Tripura_crops_arr[i], '">', Tripura_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Uttar Pradesh') {
                        Uttar_Pradesh_crops_arr = [
                            'Wheat',
                            'rice',
                            'pulses',
                            'potatoes',
                            'Sugarcane',

                        ]
                        for (i = 0; i < Uttar_Pradesh_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Uttar_Pradesh_crops_arr[i], '">', Uttar_Pradesh_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'Uttarakhand') {
                        Uttarakhand_crops_arr = [
                            'Basmati rice',
                            'wheat',
                            'soybeans',
                            'groundnuts',
                            'coarse cereals',
                            'pulses',
                        ]
                        for (i = 0; i < Uttarakhand_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', Uttarakhand_crops_arr[i], '">', Uttarakhand_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    }
                    if (user_state == 'West Bengal') {
                        West_Bengal_crops_arr = [
                            'rice',
                            'maize',
                            'pulses',
                            'oil seeds',
                            'wheat',
                            'barley',
                            'potatoes',
                            'Tea',
                        ]
                        for (i = 0; i < West_Bengal_crops_arr.length; i += 1) {

                            $('#crops_list').append(
                                ''.concat(
                                    '<option value="', West_Bengal_crops_arr[i], '">', West_Bengal_crops_arr[i], '</option>',
                                ),
                            );
                        }
                        break;
                    } else {
                        break;
                    }

                default:
            }
        } else {
            // Error occured
            switch (json.msg) {
                case 'invalid request':

                    break;
                default:
            }
        }
    },
});


function check_crop_is_selected_or_not() {
    if ($('#crop_list').selected === true) {
        alert("fill the crop name")
        $('#crop_list').focus()
        return false
    } else {
        return true
    }
}
if (check_crop_is_selected_or_not()) {
    $('#go_button').removeClass('d-none').addClass('d-flex')
}

$('#log_out_button').on('click', () => {
    $.ajax({
        url: log_out_api_url,
        type: 'POST',
        data: {
            action: "clear the session for logout"
        },

        dataType: 'json',

        success(json) {
            if (json.error_flag !== undefined && json.error_flag === 0) {
                // Process msg and data
                switch (json.msg) {
                    case 'logout is successful':
                        window.open('/login_page/', '_self');
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
});

$('#go_button').on('click', () => {
    crop_selected = $('#crops_list').val()
    if (crop_selected === null) {
        alert("select the crop first")
    } else {
        window.open('/crop_info_page/' + crop_selected + '/', '_self');
    }

});


$('#buy_now_button_1').on('click', () => {
    if (user_id_value == -1) {
        alert("sorry");
    }
    id_value = $('#buy_now_button_1').attr('data');
    window.open('/order_processing_form/' + id_value + '/', '_self');
});


$('#buy_now_button_2').on('click', () => {
    if (user_id_value == -1) {
        alert("sorry");
    }
    id_value = $('#buy_now_button_2').attr('data');
    window.open('/order_processing_form/' + id_value + '/', '_self');
});

$('#buy_now_button_3').on('click', () => {
    if (user_id_value == -1) {
        alert("sorry");
    }
    id_value = $('#buy_now_button_3').attr('data');
    window.open('/order_processing_form/' + id_value + '/', '_self');
});

$('#buy_now_button_4').on('click', () => {
    if (user_id_value == -1) {
        alert("sorry");
    }
    id_value = $('#buy_now_button_4').attr('data');
    window.open('/order_processing_form/' + id_value + '/', '_self');
});
$('#buy_now_button_5').on('click', () => {
    if (user_id_value == -1) {
        alert("sorry");
    }
    id_value = $('#buy_now_button_5').attr('data');
    window.open('/order_processing_form/' + id_value + '/', '_self');
});
$('#buy_now_button_6').on('click', () => {
    if (user_id_value == -1) {
        alert("sorry");
    }
    id_value = $('#buy_now_button_6').attr('data');
    window.open('/order_processing_form/' + id_value + '/', '_self');
});
$('#buy_now_button_7').on('click', () => {
    if (user_id_value == -1) {
        alert("sorry");
    }
    id_value = $('#buy_now_button_7').attr('data');
    window.open('/order_processing_form/' + id_value + '/', '_self');
});
$('#buy_now_button_8').on('click', () => {
    if (user_id_value == -1) {
        alert("sorry");
    }
    id_value = $('#buy_now_button_8').attr('data');
    window.open('/order_processing_form/' + id_value + '/', '_self');
});
