'use strict';

const arr = [4, 12, -35, 4, 47];
const positiveElements = arr.filter((num) => num > 0);
const sumPositive = positiveElements.reduce((acc, num) => acc + num, 0);
const countPositive = positiveElements.length;

console.log(`Сума позитивних елементів: ${sumPositive}`);
console.log(`Кількість позитивних елементів: ${countPositive}`);
