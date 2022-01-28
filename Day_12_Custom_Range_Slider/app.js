const body = document.querySelector('body')
const title = document.querySelector('h1')
const range = document.querySelector('.range')
const rangeBar = document.querySelector('.range-bar')

function setRangeBar(percent) {
    let value = percent * 255 / 100

    title.style.color = `rgb(${value}, ${value}, ${value})`
    rangeBar.style.width = `${percent}%`
    rangeBar.querySelector('span').innerText = `${percent}%`
    body.style.backgroundColor = `rgba(0,0,0, ${percent / 100})`
}

setRangeBar(15)

range.addEventListener('mousemove', function (e) {
    const process = e.pageX - this.offsetLeft
    let percent = (process / this.offsetWidth) * 100

    percent = Math.ceil(percent)
    setRangeBar(percent)
})