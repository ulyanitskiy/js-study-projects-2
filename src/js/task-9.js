'use strict';

const arr = [4, 12, -35, 4, 47];
const productPositiveElements = arr.filter((num) => num > 0)
  .reduce((acc, num) => acc * num, 1);

console.log(`Добуток позитивних елементів: ${productPositiveElements}`);
