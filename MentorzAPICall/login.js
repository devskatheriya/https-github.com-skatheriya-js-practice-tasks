
function login(user) {
    let userDetails = JSON.stringify(user);
    // console.log(user);
    // console.log(userDetails)

    const xhr = new XMLHttpRequest();
    var url = "http://stgapp.mentorz.com:8080/mentorz/api/v3/user/login";
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(userDetails);
    xhr.onload = (e) => {
        let dataObj = (JSON.parse(xhr.responseText));
        console.log(dataObj);

        localStorage.setItem('userD', dataObj);
        storeData(dataObj);
    }

}
function getFromDataForLogin() {

    let phone_number = new PhoneNumber('91', 'in', 9315561888);
    let device_info = new DeviceInfo("test_token", "IOS");
    let user = new UserLogin("", phone_number, "sachin", device_info);

    login(user);
}

function storeData(dataObj) {
    Object.size = function (obj) {
        var key, nestKey;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                // console.log("check 1")
                // console.log(obj[key]);
                var flag = obj[key];
                // console.log(typeof flag=='object');
                if (typeof flag == 'object') {
                    for (nestKey in flag) {
                        sessionStorage.setItem(nestKey, flag[nestKey]);
                        // console.log(nestKey, flag[nestKey]);
                    }
                } else {
                    sessionStorage.setItem(key, obj[key]);
                }
            }
        }

    };
    var size = Object.size(dataObj);

}