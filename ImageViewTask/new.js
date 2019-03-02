
var images = document.querySelectorAll('.thumbnail');
var main = document.getElementById('collectionDiv');
function lazyload() {
    console.log("hello from lazyload")
    console.log(images);
    
    images.forEach(image => {
        if (image.offsetTop < main.offsetTop + 500) {
            image.parentElement.nextSibling.setAttribute('class', 'viewRight');
            image.parentElement.setAttribute('class', 'viewLeft');
            image.setAttribute('class', 'proper-img');
        }
    })
}
lazyload()

window.addEventListener('scroll',lazyload)
window.addEventListener('resize',lazyload)
