// login.js
const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (can be more robust)
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
        return;
    }

    // Send login request to server (replace with actual AJAX call)
    // Example using fetch API:
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            // Successful login, redirect to appropriate dashboard
            window.location.href = '/adminDashboard'; // Replace with actual redirect URL
        } else {
            alert('Invalid username or password.');
        }
    })
    .catch(error => {
        console.error('Error during login:', error);
        alert('An error occurred during login.');
    });
});