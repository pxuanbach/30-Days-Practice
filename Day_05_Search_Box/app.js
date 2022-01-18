var btnSearch = document.querySelector('.search-box__btn')

btnSearch.addEventListener('click', function() {
    this.parentElement.classList.toggle('open') //get search-box element
    this.previousElementSibling.focus()         //get search-box__input element
    //nextElementSibling
})