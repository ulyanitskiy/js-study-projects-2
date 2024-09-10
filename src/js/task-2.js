'use strict';

const arr = [4, 12, -35, 4, 47];
const minElement = arr.reduce((min, num) => (num < min ? num : min), arr[0]);
const indexNumber = arr.indexOf(minElement);

console.log(`Мінімальний елемент: ${minElement}, Порядковий номер: ${indexNumber}`);
