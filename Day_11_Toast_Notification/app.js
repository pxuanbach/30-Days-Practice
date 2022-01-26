const btnShows = document.querySelectorAll('.control button')

const toasts = {
    success: {
        icon: '<i class="fas fa-check-circle"></i>',
        msg: 'This is success message!',
    },
    error: {
        icon: '<i class="fas fa-exclamation-circle"></i>',
        msg: 'This is error message!',
    },
    warning: {
        icon: '<i class="fas fa-exclamation-triangle"></i>',
        msg: 'This is warning message!',
    }
}

function createToast(status) {
    let toast = document.createElement('div')
    toast.className = `toast ${status}`

    toast.innerHTML = `
        ${toasts[status].icon}
        <span class="msg">${toasts[status].msg}</span>
        <span class="countdown"></span>`

    document.querySelector('.toasts').appendChild(toast)

    setTimeout(() => {
        toast.style.animation = 'hide_toast 1s ease forwards'
    }, 4000)
    setTimeout(() => {
        toast.remove()
    }, 5000)
}

btnShows.forEach((btn) => {
    btn.addEventListener('click', function() {
        createToast(btn.getAttribute('class'))
    })
})