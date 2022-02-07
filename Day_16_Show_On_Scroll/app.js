const elmShowOnScroll = document.querySelectorAll('.show-on-scroll')

function isElmDisplay(elm) {
    let rect = elm.getBoundingClientRect()

    let viewHeight = window.innerHeight || document.documentElement.clientHeight

    return (
        (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
		(rect.top >= 0 && rect.bottom <= viewHeight)
    )
}

function loopScroll() {
    elmShowOnScroll.forEach((item) => {
        if (isElmDisplay(item)) {
            item.classList.add('start')
        } else {
            item.classList.remove('start')
        }
    })
}

window.onscroll = loopScroll

loopScroll()