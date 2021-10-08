const signIn = document.querySelector('.button-sign-in');
const username = document.querySelector('.name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const error = document.querySelectorAll('.error');
const successIcon = document.querySelectorAll('.success-icon');
const failureIcon = document.querySelectorAll('.failure-icon');

signIn.addEventListener('click', () => {
    if (!username.value) {
        error[0].innerHTML = 'Username cannot be blank';
        username.style.border = "3px solid red";
        failureIcon[0].style.opacity = "1"
        successIcon[0].style.opacity = "0";
    } else {
        error[0].innerHTML = '';
        username.style.border = "3px solid green";
        successIcon[0].style.opacity = "1";
        failureIcon[0].style.opacity = "0";

    };

    if (!email.value) {
        error[1].innerHTML = 'Email cannot be blank'
        email.style.border = "3px solid red"
        failureIcon[1].style.opacity = "1";
        successIcon[1].style.opacity = "0";
    } else {
        error[1].innerHTML = '';
        email.style.border = "3px solid green";
        successIcon[1].style.opacity = "1";
        failureIcon[1].style.opacity = "0";
    };

    if (!password.value) {
        error[2].innerHTML = 'Password cannot be blank'
        password.style.border = "3px solid red";
        failureIcon[2].style.opacity = "1";
        successIcon[2].style.opacity = "0";
    } else {
        error[2].innerHTML = '';
        password.style.border = "3px solid green";
        successIcon[2].style.opacity = "1";
        failureIcon[2].style.opacity = "0";
    };
});