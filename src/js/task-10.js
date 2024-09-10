'use strict';

const arr = [4, 12, -35, 4, 47];
const largestElement = arr.reduce((max, num) => (num > max ? num : max), arr[0]);
const zeroedElements = arr.map((num) => (num === largestElement ? num : 0));
console.log(`Масив після змін: ${zeroedElements}`);
