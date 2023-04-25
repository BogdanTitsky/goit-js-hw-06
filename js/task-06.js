const input = document.querySelector('#validation-input');
console.log(input.getAttribute('data-length'));
input.addEventListener('blur', (event) => {
    const correctLength = Number(input.getAttribute('data-length'));

    if (event.currentTarget.value.length === correctLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
});
