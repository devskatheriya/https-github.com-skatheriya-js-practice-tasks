class LoadImage {
    
    loadImages(firstImageIndex) {
        var lastImageIndex = firstImageIndex + 20;
        var viewDiv = document.getElementById('collectionDiv');
        for (let i = firstImageIndex; i < lastImageIndex; i++) {
            var images = "image" + i;

            let sessionData = sessionStorage.getItem(images);

            let { id, title, albumId, url, thumbnailUrl } = JSON.parse(sessionData);
            var row = document.createElement('div');
            row.setAttribute('class', 'row');
            row.setAttribute('id', 'row');
            row.setAttribute('onclick', 'viewImage(this)');
            let imageDiv = document.createElement('div');
            imageDiv.setAttribute('class', 'imageDiv');
            imageDiv.setAttribute('id', 'imageDiv');
            let image = document.createElement('img');
            image.setAttribute('src', thumbnailUrl);
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('id', 'thumbnail');
            image.setAttribute('imageid', id);
            image.setAttribute('albumId', albumId);
            image.setAttribute('title', title);
            image.setAttribute('url', url);
            imageDiv.appendChild(image);
            let textDiv = document.createElement('div');
            textDiv.setAttribute('class', 'detailsDiv');
            textDiv.setAttribute('id', 'detailsDiv');
            let album = document.createElement('h4');
            album.innerHTML = "Album ID : " + albumId;
            let imageTitle = document.createElement('p');
            imageTitle.innerHTML = title;
            textDiv.appendChild(album);
            textDiv.appendChild(imageTitle);
            row.appendChild(imageDiv);
            row.appendChild(textDiv);
            var hr = document.createElement('hr');
            // let link = document.createElement('a');
            // link.setAttribute('href',url+'/'+id);
            // link.appendChild(row);
            viewDiv.appendChild(row);
            viewDiv.appendChild(hr);

        }
        return lastImageIndex;
    }
}