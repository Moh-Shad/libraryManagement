fetch('/api/pendingRequests') // Replace with your actual API endpoint
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    data.forEach(request => { 
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${request.user.firstName} ${request.user.lastName}</td> 
        <td>${request.book.title}</td>
        <td>${request.requestDate}</td> 
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error fetching pending requests data:', error);
    // Display an error message to the user
    alert('Error fetching pending requests. Please try again later.');
  });