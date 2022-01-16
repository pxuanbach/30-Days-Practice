var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal__header i')
var btnClose = document.querySelector('.modal__footer button')

function toggleModal() {
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e) {
    //curentTarget = modal; target = The thing under the mouse
    if (e.target == e.currentTarget) { 
        toggleModal();
    }
})