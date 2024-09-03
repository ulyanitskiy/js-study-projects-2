'use strict';

const mixedArray = [20, 'hello', true, 40, 90, 'world'];

function averageOfNumbers(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      arr.splice(i, 1);
      i--;
    } else {
      sum += arr[i];
      count++;
    }
  }

  if (count === 0) return 0;

  return sum / count;
}

console.log(averageOfNumbers(mixedArray));
