var images = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.control__close')
var gallery = document.querySelector('.gallery')
var galleryImg = document.querySelector('.gallery__inner img')

var currentIndex = 0;

function showGallery() {
    if (currentIndex == 0) {
        prev.classList.add('hide')
    } else {
        prev.classList.remove('hide')
    }

    if (currentIndex == images.length - 1) {
        next.classList.add('hide')
    } else {
        next.classList.remove('hide')
    }

    //show
    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show')
}

function prevImg() {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
}

function nextImg() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showGallery();
    }
}


images.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentIndex = index;
        showGallery()
    })  
})

close.addEventListener('click', function() {
    gallery.classList.remove('show')
})


document.addEventListener('keydown', function(e) {
    console.log(e.keyCode);
    if (e.keyCode == 27) {  // ESC
        gallery.classList.remove('show')
    }
    if (e.keyCode == 39) {  // ->
        nextImg()
    }
    if (e.keyCode == 37) {  // <-
        prevImg()
    }
})

prev.addEventListener('click', prevImg)

next.addEventListener('click', nextImg)