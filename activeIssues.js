fetch('/api/activeIssues') // Replace with your actual API endpoint
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
    console.error('Error fetching active issues data:', error);
    // Display an error message to the user
    alert('Error fetching active issues. Please try again later.');
  });