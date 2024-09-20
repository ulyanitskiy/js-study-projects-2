'use strict';

function getFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
}
console.log(getFactorial(3));

function pow(num, degree) {
  if (degree === 0) {
    return 1;
  }
  return num * pow(num, degree - 1);
}
console.log(pow(3, 5));

function recursiveSum(a, b) {
  if (b === 0) {
    return a;
  }
  return recursiveSum(++a, --b);
}
console.log(recursiveSum(9, 6));
