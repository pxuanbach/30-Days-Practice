const images = document.querySelectorAll('.list-img div img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var wrapImg = document.querySelector('.img-wrap img')

var currentIndex = 0

function showMainImage() {
    //show image
    wrapImg.src = images[currentIndex].src;

    //show active
    images[currentIndex].parentElement.classList.add('active')
}

function removeActive() {
    images[currentIndex].parentElement.classList.remove('active')
}

function prevImage() {
    removeActive()
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1
    }

    showMainImage()
}

function nextImage() {
    removeActive()
    currentIndex++;

    if (currentIndex > images.length - 1) {
        currentIndex = 0
    }

    showMainImage()
}

showMainImage()

images.forEach((item, index) => {
    item.addEventListener('click', function () {
        removeActive()
        currentIndex = index;
        showMainImage()
    })  
})

prev.addEventListener('click', prevImage)

next.addEventListener('click', nextImage)

document.addEventListener('keydown', function(e) {
    if (e.code === "ArrowLeft") {
        prevImage()
    }
    if (e.code === "ArrowRight") {
        nextImage()
    }
})