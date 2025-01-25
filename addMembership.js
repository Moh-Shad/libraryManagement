// addMembership.js
const addMembershipForm = document.querySelector('form');

addMembershipForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const type = document.getElementById('type').value;
    const duration = document.getElementById('duration').value;
    const fee = document.getElementById('fee').value;

    // Basic validation (can be more robust)
    if (!type || !duration || !fee) {
        alert('Please fill in all fields.');
        return;
    }

    // Send add membership request to server
    // (Replace with actual AJAX call)
    fetch('/admin/memberships/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type, duration, fee })
    })
    .then(response => {
        if (response.ok) {
            alert('Membership added successfully!');
            // Optionally, redirect to membership list or dashboard
        } else {
            alert('Failed to add membership.');
        }
    })
    .catch(error => {
        console.error('Error during membership addition:', error);
        alert('An error occurred while adding the membership.');
    });
});