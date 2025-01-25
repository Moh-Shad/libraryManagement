
fetch('/api/books') 
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('tbody');
        data.forEach(book => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td>
                    <button class="edit-button">Edit</button> 
                    <button class="delete-button">Delete</button> 
                </td>
            `;
            tableBody.appendChild(row);
        });

       
        const editButtons = document.querySelectorAll('.edit-button');
        editButtons.forEach(button => {
            button.addEventListener('click', () => {
                const row = button.closest('tr'); 
                const bookId = row.cells[0].textContent;
                window.location.href = `/admin/books/edit/${bookId}`; 
                
            });
        });

        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const row = button.closest('tr');
                const bookId = row.cells[0].textContent;
          
                // Send a DELETE request to the server to delete the book
                fetch(`/api/books/${bookId}`, { method: 'DELETE' })
                  .then(response => {
                    if (response.ok) {
                      row.remove(); // Remove the row from the table
                      alert('Book deleted successfully!');
                    } else {
                      alert('Failed to delete book.');
                    }
                  })
            });
        });
    })
    .catch(error => {
        console.error('Error fetching book data:', error);
       
    });