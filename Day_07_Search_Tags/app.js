var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btnRemoveAll = document.querySelector('.remove-all-btn')

var tags = ['HTML', 'CSS']

function renderTags() {
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i]
        content.innerHTML += 
        `<li>
            ${tag}
            <i class="fas fa-times" onclick="removeTags(${i})"></i>
        </li>`
    }

    content.appendChild(input)
    input.focus()
}

function removeTags(index) {
    tags.splice(index, 1)
    renderTags()
}

renderTags()

input.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        if (tags.indexOf(input.value) == -1) {
            tags.push(input.value.trim())
            input.value = ""
            renderTags()
        }
    }
})

btnRemoveAll.addEventListener('click', function() {
    tags = []
    renderTags()
})