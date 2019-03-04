class LazyLoad {
    constructor() {
        this.lastImageIndex = 0;
        this.main = document.getElementById('collectionDiv');
        this.loadimage = new LoadImage();
    }
    lazyloading() {
        if (this.lastImageIndex == 0) {
            this.lastImageIndex = this.loadimage.loadImages(this.lastImageIndex);
            this.openImage();
        } else {

            let scrollHeight = this.main.scrollHeight;
            let totalHeight = (this.main.scrollTop + this.main.offsetTop + 700);
            if (scrollHeight < totalHeight) {
                this.lastImageIndex = this.loadimage.loadImages(this.lastImageIndex);
            } else {
                this.openImage();
            }

        }
    }

    openImage() {
        let images = document.querySelectorAll('.thumbnail');
        images.forEach(image => {
            if ((image.offsetTop <= this.main.offsetTop + this.main.scrollTop + 550)
                && (image.offsetTop >= this.main.offsetTop + this.main.scrollTop - image.clientHeight)) {
                let imageid = image.getAttribute('imageid');
                let { url } = JSON.parse(sessionStorage.getItem('image' + (imageid - 1)));
                image.setAttribute('src', url);
                image.setAttribute('class', 'proper-img');
            }


        })
    }
}