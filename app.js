document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    // Registration 
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);
            localStorage.setItem('userFullName', fullname);

            window.location.href = 'login.html';
        });
    }

    // Login form 
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const userEmail = localStorage.getItem('userEmail');
            const userPassword = localStorage.getItem('userPassword');

            if (email === userEmail && password === userPassword) {
                window.location.href = 'index.html';
            } else {
                alert('Invalid login credentials.');
            }
        });
    }

    // Logout button 
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            window.location.href = 'register.html';
        });
    }

    // Display user's full name on the welcome page
    const userFullNameSpan = document.getElementById('userFullName');
    if (userFullNameSpan) {
        const userFullName = localStorage.getItem('userFullName');
        userFullNameSpan.textContent = userFullName ? ` ${userFullName}` : 'Welcome!';
    }
});