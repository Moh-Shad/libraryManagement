fetch('/api/overdueReturns') // Replace with your actual API endpoint
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    data.forEach(issue => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${issue.user.firstName} ${issue.user.lastName}</td> 
        <td>${issue.book.title}</td>
        <td>${issue.issueDate}</td>
        <td>${issue.dueDate}</td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error fetching overdue returns data:', error);
    // Display an error message to the user
    alert('Error fetching overdue returns. Please try again later.');
  });