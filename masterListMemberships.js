
fetch('/api/books') 
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('tbody');
        data.forEach(book => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${membership.type}</td>
                <td>${membership.durationInMonths} months</td>
                <td>${membership.fee}</td>
   
                <td>
                    <button class="edit-button">Edit</button> 
                    <button class="delete-button">Delete</button> 
                </td>
            `;
            tableBody.appendChild(row);
        });

        
    })
    .catch(error => {
        console.error('Error fetching book data:', error);
       
    });