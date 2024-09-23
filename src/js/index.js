'use strict';

const unpackArray = (...args) => {
  if (args.length !== 1) {
    throw new Error('Function accepts only 1 argument, too much arguments provided');
  }

  const array = args[0];

  const extractElements = (arr) => arr.reduce((acc, item) => (Array.isArray(item)
    ? acc.concat(extractElements(item))
    : acc.concat(item)), []);

  return extractElements(array);
};

const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];

console.log(unpackArray(complexArray));
