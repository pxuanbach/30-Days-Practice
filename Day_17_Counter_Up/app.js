const face = document.querySelector('.counter.face h2')
const youtube = document.querySelector('.counter.youtube h2')
const tiktok = document.querySelector('.counter.tiktok h2')

function counterUp(elm, to) {
    let speed = 200
    let from = 0
    let step = to/speed

    const counter = setInterval(function() {
        from += step
        if (from > to) {
            clearInterval(counter)
            elm.innerText = to
        } else {
            elm.innerText = Math.ceil(from)
        }
    })
}

counterUp(face, 2000)
counterUp(youtube, 3000)
counterUp(tiktok, 9999)