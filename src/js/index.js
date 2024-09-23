'use strict';

const accumulateSum = () => {
  let currentSum = 0;

  return (value) => {
    currentSum += value;
    return currentSum;
  };
};

const addValue = accumulateSum();

console.log(addValue(3));
console.log(addValue(5));
console.log(addValue(20));
