// updateUser.js
const updateUserForm = document.querySelector('form');

updateUserForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const userId = document.getElementById('userId').value;
    const username = document.getElementById('username').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Basic validation (can be more robust)
    if (!userId || !username || !firstName || !lastName) {
        alert('Please fill in all fields.');
        return;
    }

    // Send update user request to server
    // (Replace with actual AJAX call)
    fetch('/admin/users/update', {
        method: 'PUT', // Use PUT for updates
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, username, firstName, lastName })
    })
    .then(response => {
        if (response.ok) {
            alert('User updated successfully!');
            // Optionally, redirect to user list or dashboard
        } else {
            alert('Failed to update user.');
        }
    })
    .catch(error => {
        console.error('Error during user update:', error);
        alert('An error occurred while updating the user.');
    });
});