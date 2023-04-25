const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

    if (!email || !password) {
        alert('Заповніть всі поля');
        return;
    }

    const formData = {
        email,
        password,
    };

    console.log(formData);

    loginForm.reset();
}
