const colorEl = document.getElementById('color')
const btnEraser = document.getElementById('eraser')
const btnDecrease = document.getElementById('decrease')
const sizeEl = document.getElementById('size')
const btnIncrease = document.getElementById('increase')
const saveEl = document.getElementById('save')
const btnClear = document.getElementById('clear')
const canvas = document.getElementById('canvas')

const context = canvas.getContext('2d')

let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x, y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

document.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

/*
const drawCircle = ({x, y}) => {
    context.beginPath()
    context.arc(x, y, size, 0, Math.PI*2)
    context.fillStyle = color
    context.fill()
}
*/

function drawCircle(x, y) {
	context.beginPath()
	context.arc(x, y, size, 0, Math.PI * 2)
	context.fillStyle = color
	context.fill()
}

function drawLine(x1, y1, x2, y2) {
	context.beginPath()
	context.moveTo(x1, y1)
	context.lineTo(x2, y2)
	context.strokeStyle = color
	context.lineWidth = size * 2
	context.stroke()
}

colorEl.addEventListener('change', function(e) {
    color = e.target.value
})

btnEraser.addEventListener('click', function() {
    color = '#fff'
})

function updateSizeDisplay() {
    sizeEl.innerText = size
}

btnDecrease.addEventListener('click', function() {
    size--

    if (size < 1) {
        size = 1
    }

    updateSizeDisplay()
})

btnIncrease.addEventListener('click', function() {
    size++

    if (size > 50) {
        size = 50
    }

    updateSizeDisplay()
})

btnClear.addEventListener('click', function() {
    context.clearRect(0, 0, canvas.width, canvas.height)
})

saveEl.addEventListener('click', function(e) {
    const imgURI = canvas.toDataURL('image/png')
    e.currentTarget.href = imgURI
})