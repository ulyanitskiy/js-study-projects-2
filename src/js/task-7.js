'use strict';

const arr = [4, 12, -35, 4, 47];
const evenPositiveElementSum = arr.filter((num) => num > 0 && num % 2 === 0)
  .reduce((acc, num) => acc + num, 0);

console.log(`Сума парних позитивних елементів: ${evenPositiveElementSum}`);
