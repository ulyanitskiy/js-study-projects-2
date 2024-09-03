'use strict';

let rows = parseInt(prompt('Введіть кількість рядків (до 10):'));
let cols = parseInt(prompt('Введіть кількість стовпців (до 10):'));

function create2DArray() {
  const array = [];

  if (rows > 10) rows = 10;
  if (cols > 10) cols = 10;

  for (let i = 0; i < rows; i++) {
    const innerArray = [];
    for (let j = 0; j < cols; j++) {
      const value = prompt(`Введіть значення для елемента [${i}][${j}] (або залиште порожнім, щоб зупинити):`);
      if (value === null || value === '') {
        return array;
      }
      innerArray.push(value);
    }
    array.push(innerArray);
  }
  return array;
}

const userArray = create2DArray();
console.log(userArray);
