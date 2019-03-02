
function register(user) {
    let userDetails = JSON.stringify(user);
    const xhr = new XMLHttpRequest();
    var url = "http://stgapp.mentorz.com:8080/mentorz/api/v3/user";
    xhr.open('PUT', url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(userDetails);
    xhr.onload = (e) => {
        // console.log(JSON.parse(xhr.responseText));
        console.log(xhr.status);

    }

}
function getFromDataForRegister() {

    let phone_number = new PhoneNumber('91', 'in', 9315561888);
    let device_info = new DeviceInfo("test_token", "IOS");
    let user_profile=new UserProfile("769564800000","sk","SD","");
    let user = new UserRegister(phone_number, "sachin", device_info,user_profile);

    register(user);
}
