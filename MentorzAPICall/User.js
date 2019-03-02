
class UserLogin {
    constructor(email_id, phone_number, password, device_info) {
        this.email_id = email_id;
        this.phone_number = phone_number;
        this.password = password;
        this.device_info = device_info;
    }
}

class PhoneNumber {
    constructor(cc, iso_alpha_2_cc, number) {
        this.cc = cc;
        this.iso_alpha_2_cc = iso_alpha_2_cc;
        this.number = number;
    }
}

class DeviceInfo {
    constructor(device_token, device_type) {
        this.device_token = device_token;
        this.device_type = device_type;
    }
}
class UserProfile {
    constructor(birth_date, name, basic_info, video_bio_hres) {
        this.birth_date = birth_date;
        this.name = name;
        this.basic_info = basic_info;
        this.video_bio_hres = video_bio_hres;
    }
}

class UserRegister {
    constructor(phone_number, password, device_info,user_profile) {
        this.phone_number = phone_number;
        this.password = password;
        this.device_info = device_info;
        this.user_profile = user_profile;
    }
}