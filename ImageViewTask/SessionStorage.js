class SessionStorage {

    storeDataInSessionStorage(apiData) {
        var newdata = JSON.parse(apiData);
        return new Promise(function (resolve, reject) {
            for (let i = 0; i < newdata.length; i++) { // each image details is a object
                var key = "image"; // key for localStorage
                key = key + i; // e.g. image0, image1, image2, . . . .
                sessionStorage.setItem(key, JSON.stringify(newdata[i])); // store JSON object as string
            }
            resolve();
        })
    }
    getDataFromSessionStorage(key) {
        return sessionStorage.getItem(key);
    }
}