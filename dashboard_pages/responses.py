class API_response():
    def __init__(self):
        self.response = {}

    def invalid_request(self):
        self.response['msg'] = ''
        self.response['data'] = {}
        self.response['error_flag'] = 1
        self.response['error'] = "invalid request"
        return self.response

    def user_information(self, data):
        self.response['msg'] = 'data received'
        self.response['data'] = data
        self.response['error_flag'] = 0
        self.response['error'] = ""
        return self.response

    def log_out_is_successful(self):
        self.response['msg'] = 'logout is successful'
        self.response['data'] = {}
        self.response['error_flag'] = 0
        self.response['error'] = ""
        return self.response

    def crop_information_found(self, data):
        self.response['msg'] = 'information_found'
        self.response['data'] = data
        self.response['error_flag'] = 0
        self.response['error'] = ""
        return self.response

    def wrong_action(self):
        self.response['msg'] = 'wrong action'
        self.response['data'] = {}
        self.response['error_flag'] = 1
        self.response['error'] = "wrong action"
        return self.response

    def units_calculated(self, data):
        self.response['msg'] = 'units calculated'
        self.response['data'] = data
        self.response['error_flag'] = 0
        self.response['error'] = "units calculated"
        return self.response
