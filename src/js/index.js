'use strict';

const countNumbers = () => {
  let currentNumber = 1;
  return () => currentNumber++;
};

const createTable = (rows, columns, counter) => {
  const table = document.createElement('table');

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement('td');
      const number = counter();
      cell.textContent = number;
      cell.style.backgroundColor = (number % 2 === 0) ? 'lightcyan' : 'lavender';
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  return table;
};

const insertTable = (container, table) => container.appendChild(table);
const container = document.getElementById('table-container');
const counter = countNumbers();
const table = createTable(10, 10, counter);
insertTable(container, table);
