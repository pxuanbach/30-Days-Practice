var form = document.querySelector('.form')
var inputTodo = document.querySelector('.form input')
var todoList = document.querySelector('.todos')

function addTodoElement(todo) {
    var li = document.createElement('li')

    li.innerHTML = `
            <span>${todo.text}</span>
            <i class="fas fa-trash"></i>`
    
    if (todo.status === 'completed') {
        li.setAttribute('class', 'completed')
    }

    li.addEventListener('click', function() {
        this.classList.toggle('completed')
        saveTodoList()
    })

    li.querySelector('i').addEventListener('click', function() {
        this.parentElement.remove()
        saveTodoList()
    })

    todoList.appendChild(li)
}

function saveTodoList() {
    var todos = document.querySelectorAll('li')
    let todoStorage = []
    todos.forEach(function(item) {
        let text = item.querySelector('span').innerText
        let status = item.getAttribute('class')

        todoStorage.push({
            text,
            status
        })
    })
    localStorage.setItem('todoList', JSON.stringify(todoStorage))
}

function loadTodoList() {
    let data = JSON.parse(localStorage.getItem('todoList'))
    data.forEach(function(item) {
        addTodoElement(item)
    })
}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    let value = inputTodo.value.trim()
    
    if (value) {
        addTodoElement({
            text: value,
        })
        saveTodoList()
    }

    inputTodo.value = ""
})

loadTodoList()