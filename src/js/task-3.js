'use strict';

const arr = [4, 12, -35, 4, 47];
const maxElement = arr.reduce((max, num) => (num > max ? num : max), arr[0]);
const indexNumber = arr.indexOf(maxElement);

console.log(`Максимальний елемент: ${maxElement}, Порядковий номер: ${indexNumber}`);
