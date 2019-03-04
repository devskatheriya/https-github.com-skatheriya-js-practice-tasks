class APIRequest {
    constructor(url) {
        this.url = url;
    }
    callAPI() {
        console.log('calling api')
        const xhr = new XMLHttpRequest();
        const url = this.url;
        xhr.open('GET', url, true);
        xhr.send();
        return new Promise(function (resolve, reject) {
            xhr.onloadend = () => {
                APIRequest.prototype.jsonData = xhr.responseText;
                if (APIRequest.prototype.jsonData == xhr.responseText) {
                    console.log('its done')
                    resolve('done');
                }
            }
        })
    }
    getAPIData() {
        console.log('data return success');
        return this.jsonData;

    }
}


