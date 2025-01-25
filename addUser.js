// addUser.js
const addUserForm = document.querySelector('form');


addUserForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
alert("Working");
    // Basic validation (can be more robust)
    if (!username || !password || !firstName || !lastName) {
        alert('Please fill in all fields.');
        return;
    }

    // Send add user request to server
    // (Replace with actual AJAX call)
    fetch('/admin/users/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, firstName, lastName })
    })
    .then(response => {
        if (response.ok) {
            alert('User added successfully!');
            // Optionally, redirect to user list or dashboard
        } else {
            alert('Failed to add user.');
        }
    })
    .catch(error => {
        console.error('Error during user addition:', error);
        alert('An error occurred while adding the user.');
    });
});