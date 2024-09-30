document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.querySelector('.container');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Intento de inicio de sesión');
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        console.log(`Inicio de sesión con email: ${email} y contraseña: ${password}`);
    });

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Intento de registro');
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        console.log(`Registro con nombre: ${name}, email: ${email} y contraseña: ${password}`);
    });

    const socialButtons = document.querySelectorAll('.social-container a');
    socialButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const network = this.querySelector('i').className.split('-')[2]; // 'facebook', 'google', o 'linkedin'
            console.log(`Intento de inicio de sesión con ${network}`);
        });
    });
});
