function getImages() {
    const xhr = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/photos";
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload = () => {
        var newdata = JSON.parse(xhr.responseText);
        console.log(newdata.length)
        storeDataInLocal(newdata);
    }
}

function storeDataInLocal(newdata) {
    for (i = 0; i < newdata.length; i++) {
        var image = "image";
        image = image + i;
        sessionStorage.setItem(image, JSON.stringify(newdata[i]));
    }
    console.log("done");
}
function loadImages() {

    var viewDiv = document.getElementById('collectionDiv');
    for (let i = 0; i <= 100; i++) {
        var images = "image" + i;
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
    run();
}

function run() {

    function lazyload() {
        let images = document.querySelectorAll('.thumbnail');
        let main = document.getElementById('collectionDiv');
        console.log("hello from lazyload")
        images.forEach(image => {
            console.log(image.offsetTop, main.offsetHeight, main.offsetTop);
            console.log("=>",main.scrollTop);
            if ( (image.offsetTop <=  main.offsetTop + main.scrollTop + 550) && (image.offsetTop >=  main.offsetTop+main.scrollTop-image.clientHeight ) ) {
                image.parentElement.nextSibling.setAttribute('class', 'viewRight');
                image.parentElement.setAttribute('class', 'viewLeft');
                let imageid = image.getAttribute('imageid');
                let { url, ...a } = JSON.parse(sessionStorage.getItem('image' + (imageid - 1)));
                image.setAttribute('src', url);
                image.setAttribute('class', 'proper-img');
            }
        })
    }
    lazyload();
    document.getElementById('collectionDiv').addEventListener('scroll', function () {
        setTimeout(() => lazyload(), 1000)
    });
}
