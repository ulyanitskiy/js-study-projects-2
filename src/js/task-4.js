'use strict';

const inputString = 'hello world';
const charsToRemove = ['l', 'd'];

function removeChars(inputString, charsToRemove) {
  let result = '';

  const charsSet = new Set(charsToRemove);

  for (const char of inputString) {
    if (!charsSet.has(char)) {
      result += char;
    }
  }

  return result;
}

const result = removeChars(inputString, charsToRemove);
console.log(result);
