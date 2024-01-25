fetch('output.json')
  .then(response => response.json())
  .then(data => {
    const table = document.getElementById('data-table');
    const headers = Object.keys(data[0]);

    // Create table headers
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
      const headerCell = document.createElement('th');
      headerCell.textContent = header;
      headerRow.appendChild(headerCell);
    });
    table.querySelector('thead').appendChild(headerRow);

    // Create table rows
    data.forEach(row => {
      const rowElement = document.createElement('tr');
      Object.values(row).forEach(cellData => {
        const cell = document.createElement('td');
        cell.textContent = cellData;
        rowElement.appendChild(cell);
      });
      table.querySelector('tbody').appendChild(rowElement);
    });

    // Implement sorting and filtering functionality (add your preferred logic here)
  })
  .catch(error => console.error('Error fetching or parsing JSON:', error));
