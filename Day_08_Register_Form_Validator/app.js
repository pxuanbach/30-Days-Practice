var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')

    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')

    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(listInput) {
    let isEmpty = false;
    listInput.forEach(input => {
        input.value = input.value.trim()

        if (!input.value) {
            isEmpty = true;
            showError(input, `${input.getAttribute('placeholder')} is empty`)
        } else {
            showSuccess(input)
        }
    })

    return isEmpty;
}

function checkEmailError(input) {
    const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim()

    let isError = !regexEmail.test(input.value);
    if (regexEmail.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, 'Email Invalid')
    }

    return isError;
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim()

    if (input.value.length < min || input.value.length > max) {
        showError(input, `${input.getAttribute('placeholder')} should be between ${min}-${max} characters`)
        return true;
    }

    return false;
}

function checkMatchPasswordError(passwordInput, confirmPasswordInput) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, 'Password and confirm password does not match')
        return true;
    }
    return false;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isEmptyError = checkEmptyError([username, email, password, confirmPassword])
    let isEmailError = checkEmailError(email)
    let isUsernameLengthError = checkLengthError(username, 6, 32)
    let isPasswordLengthError = checkLengthError(password, 6, 32)
    let isMatchPasswordError = checkMatchPasswordError(password, confirmPassword)

    if (isEmptyError || isEmailError || isUsernameLengthError || isPasswordLengthError || isMatchPasswordError) {
        //do nothing
    } else {
        //logic, call API
    }
})