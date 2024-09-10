'use strict';

const arr = [4, 12, -35, 4, 47];
const oddPositiveElementCount = arr.filter((num) => num > 0 && num % 2 !== 0).length;

console.log(`Кількість непарних позитивних елементів: ${oddPositiveElementCount}`);
