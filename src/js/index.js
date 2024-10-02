'use strict';

const container = document.getElementById('table-container');
const table = document.createElement('table');
let number = 1;

for (let i = 0; i < 10; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement('td');
    cell.textContent = number;
    if (number % 2 === 0) {
      cell.style.backgroundColor = 'lightcyan';
    } else {
      cell.style.backgroundColor = 'lavender';
    }
    row.appendChild(cell);
    number++;
  }
  table.appendChild(row);
}

container.appendChild(table);
