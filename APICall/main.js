
class User {
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
  function getFromData() {
  
    let phone_number = new PhoneNumber('91', 'in', 9315561868);
    let device_info = new DeviceInfo("test_token", "IOS");
    let user = new User("", phone_number, "sachin", device_info);
  
    login(user);
  }
  
  function login(user) {
    let userDetails = JSON.stringify(user);
    console.log(user);
    console.log(userDetails)
  
    const xhr = new XMLHttpRequest();
    var url = "http://stgapp.mentorz.com:8080/mentorz/api/v3/user/login";
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    xhr.send(userDetails);
    xhr.onreadystatechange = (e) => {
      console.log(xhr.responseText);
    }
  
  }