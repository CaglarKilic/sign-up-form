function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirm]');
    if (confirm.value === password.value) {
        confirm.setCustomValidity('');
    } else {
        confirm.setCustomValidity('Passwords do not match');
    }
}

function showPassword(password, icon) {
    if (icon.textContent == 'visibility') {
        password.setAttribute('type', 'text')
        icon.textContent = 'visibility_off'
    } else {
        password.setAttribute('type', 'password')
        icon.textContent = 'visibility'
    }

    password.focus()
}