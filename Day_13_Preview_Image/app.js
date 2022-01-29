const inputImg = document.querySelector('#input-img')

inputImg.addEventListener('change', function(e) {
    let file = e.target.files[0]

    if (!file) return

    let img = document.createElement('img')
    img.src = URL.createObjectURL(file)

    document.querySelector('.preview').appendChild(img)
})