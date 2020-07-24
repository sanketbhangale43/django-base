class API_response():
    def __init__(self):
        self.response = {}
# sign up

    def invalid_request(self):
        self.response['msg'] = 'invalid request'
        self.response['data'] = {}
        self.response['error_flag'] = 1
        self.response['error'] = "invalid request"
        return self.response

    def Account_created_successfully(self):
        self.response['msg'] = 'Account created successfully'
        self.response['data'] = {}
        self.response['error_flag'] = 0
        self.response['error'] = ""
        return self.response

    def Account_Already_Exists(self):
        self.response['msg'] = 'Account Already Exists'
        self.response['data'] = {}
        self.response['error_flag'] = 1
        self.response['error'] = "Account Already Exists"
        return self.response

    def Something_Goes_Wrong(self):
        self.response['msg'] = 'Something Goes Wrong'
        self.response['data'] = {}
        self.response['error_flag'] = 1
        self.response['error'] = "Something Goes Wrong"
        return self.response

# log in

    def Logged_in_successfully(self):
        self.response['msg'] = 'Logged in successfully'
        self.response['data'] = {}
        self.response['error_flag'] = 0
        self.response['error'] = ""
        return self.response

    def user_not_found(self):
        self.response['msg'] = 'user not found'
        self.response['data'] = {}
        self.response['error_flag'] = 1
        self.response['error'] = "multiple users exists"
        return self.response

    def password_is_wrong(self):
        self.response['msg'] = 'password is wrong'
        self.response['data'] = {}
        self.response['error_flag'] = 1
        self.response['error'] = "password is wrong"
        return self.response

    def request_is_invalid(self):
        self.response['msg'] = 'request is invalid'
        self.response['data'] = {}
        self.response['error_flag'] = 1
        self.response['error'] = "request is invalid"
        return self.response

    def data_found(self, data):
        self.response['msg'] = 'data found'
        self.response['data'] = data
        self.response['error_flag'] = 0
        self.response['error'] = "data found"
        return self.response

    def data_posted(self):
        self.response['msg'] = 'data posted'
        self.response['data'] = {}
        self.response['error_flag'] = 0
        self.response['error'] = "data posted"
        return self.response
