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

function viewImage(target) {
    let image = target.children[0].children[0];
    sessionStorage.setItem('albumId',image.getAttribute('albumId'));
    sessionStorage.setItem('title',image.getAttribute('title'));
    sessionStorage.setItem('url',image.getAttribute('url'));
    sessionStorage.setItem('imageId',image.getAttribute('imageId'));

    window.location='detailsPage.html';

}
