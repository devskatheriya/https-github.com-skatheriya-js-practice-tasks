function getImages() {
    // let httpRequest = new Sequest('https://jsonplaceholder.typicode.com/photos'); // Set URL for Request
    // httpRequest.callAPI(); // Calling API
    // let jsonData = httpRequest.getAPIData(); // Get Response Data from URL(API) , in JSON format
    // console.log(jsonData);
    const xhr = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/photos";
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload = () => {
        var jsonData =JSON.parse(xhr.responseText);
        // console.log(xhr.responseText);
        storeDataInSessionStorage(jsonData); // call localStorage to store data

    }
    
    run();
}

function storeDataInSessionStorage(newdata) {
    console.log(newdata.length);
    
    for (i = 0; i < newdata.length; i++) { // each image details is a object
        var image = "image"; // key for localStorage
        image = image + i; // e.g. image0, image1, image2, . . . .
        sessionStorage.setItem(image, JSON.stringify(newdata[i])); // store JSON object as string
    }
}

function loadImages(firstImageIndex) {
    var lastImageIndex = firstImageIndex + 20;
    var viewDiv = document.getElementById('collectionDiv');
    for (let i = firstImageIndex; i < lastImageIndex; i++) {
        var images = "image" + i;console.log(images);
        
        let { albumId, id, title, url, thumbnailUrl } = JSON.parse(sessionStorage.getItem(images));
        var row = document.createElement('div');
        row.setAttribute('class', 'row');
        row.setAttribute('id', 'row');
        let imageDiv = document.createElement('div');
        imageDiv.setAttribute('class', 'colleft');
        imageDiv.setAttribute('id', 'colleft');
        let image = document.createElement('img');
        image.setAttribute('src', thumbnailUrl);
        image.setAttribute('class', 'thumbnail');
        image.setAttribute('id', 'thumbnail');
        image.setAttribute('imageid', id);
        imageDiv.appendChild(image);

        let textDiv = document.createElement('div');
        textDiv.setAttribute('class', 'colright');
        textDiv.setAttribute('id', 'colright');
        let album = document.createElement('h4');
        album.innerHTML = "Album ID : " + albumId;
        let imageTitle = document.createElement('p');
        imageTitle.innerHTML = title;
        textDiv.appendChild(album);
        textDiv.appendChild(imageTitle);

        row.appendChild(imageDiv);
        row.appendChild(textDiv);
        var hr = document.createElement('hr');

        viewDiv.appendChild(row);
        viewDiv.appendChild(hr);

    }
    return lastImageIndex;
}

function run() {
    var lastImageIndex = 0;
    let main = document.getElementById('collectionDiv');

    function lazyload() {
        if (main == null) {
            lastImageIndex = loadImages(lastImageIndex);
        } else {
            let images = document.querySelectorAll('.thumbnail');
            let scrollHeight = main.scrollHeight;
            let totalHeight = (main.scrollTop + main.offsetTop + 700);
            console.log(scrollHeight, totalHeight);
            console.log(scrollHeight < totalHeight);
            if (scrollHeight < totalHeight) {
                console.log('condition in more load');
                lastImageIndex = loadImages(lastImageIndex);
            } else {
                console.log('condition in else');

                images.forEach(image => {
                    if ((image.offsetTop <= main.offsetTop + main.scrollTop + 550)
                        && (image.offsetTop >= main.offsetTop + main.scrollTop - image.clientHeight)) {
                        image.parentElement.nextSibling.setAttribute('class', 'viewRight');
                        image.parentElement.setAttribute('class', 'viewLeft');
                        let imageid = image.getAttribute('imageid');
                        let { url } = JSON.parse(sessionStorage.getItem('image' + (imageid - 1)));
                        image.setAttribute('src', url);
                        image.setAttribute('class', 'proper-img');
                    }

                })
            }
        }
    }
    lazyload();
    // document.getElementById('collectionDiv').addEventListener('change', function () {
    //     setTimeout(() => lazyload(), 1000)
    // });
    lazyload();

    document.getElementById('collectionDiv').addEventListener('scroll', function () {
        setTimeout(() => lazyload(), 1000)
    });

}
// window.addEventListener('load', function () {
//     setTimeout(() => run(), 1000)
// });