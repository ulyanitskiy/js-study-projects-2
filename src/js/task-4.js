'use strict';

const arr = [4, 12, -35, 4, 47];
const negativeElementCount = arr.filter((num) => num < 0).length;

console.log(`Кількість негативних елементів: ${negativeElementCount}`);
