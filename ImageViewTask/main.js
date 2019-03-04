function getImages() {

    let apirequest = new APIRequest("https://jsonplaceholder.typicode.com/photos");
    apirequest.callAPI().then(function () {
        let apiData = apirequest.getAPIData();
        let storage = new SessionStorage();
        storage.storeDataInSessionStorage(apiData).then(function () {
            let lazyload = new LazyLoad();
            lazyload.lazyloading();

            document.getElementById('collectionDiv').addEventListener('scroll', function () {
                setTimeout(() => lazyload.lazyloading(), 1000)
            });
        })
    })
}

