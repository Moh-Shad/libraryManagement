// updateMembership.js
const updateMembershipForm = document.querySelector('form');

updateMembershipForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const membershipId = document.getElementById('membershipId').value;
    const type = document.getElementById('type').value;
    const duration = document.getElementById('duration').value;
    const fee = document.getElementById('fee').value;

    // Basic validation (can be more robust)
    if (!membershipId || !type || !duration || !fee) {
        alert('Please fill in all fields.');
        return;
    }

    // Send update membership request to server
    fetch('/admin/memberships/update', {
        method: 'PUT', // Use PUT for updates
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ membershipId, type, duration, fee })
    })
    .then(response => {
        if (response.ok) {
            alert('Membership updated successfully!');
            // Optionally, redirect to membership list or dashboard
            window.location.href = '/admin/memberships'; // Replace with actual redirect URL
        } else {
            alert('Failed to update membership.');
        }
    })
    .catch(error => {
        console.error('Error during membership update:', error);
        alert('An error occurred while updating the membership.');
    });
});