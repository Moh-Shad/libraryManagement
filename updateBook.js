// updateBook.js
const updateBookForm = document.querySelector('form');

updateBookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const bookId = document.getElementById('bookId').value;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Basic validation (can be more robust)
    if (!bookId || !title || !author || !isbn) {
        alert('Please fill in all fields.');
        return;
    }

    // Send update book request to server
    // (Replace with actual AJAX call)
    fetch('/admin/books/update', {
        method: 'PUT', // Use PUT for updates
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ bookId, title, author, isbn })
    })
    .then(response => {
        if (response.ok) {
            alert('Book updated successfully!');
            // Optionally, redirect to book list or dashboard
        } else {
            alert('Failed to update book.');
        }
    })
    .catch(error => {
        console.error('Error during book update:', error);
        alert('An error occurred while updating the book.');
    });
});