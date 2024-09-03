'use strict';

function doMath(x, znak, y) {
  let result;
  switch (znak) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '%':
      result = x % y;
      break;
    case '^':
      result = x ** y;
      break;
    default:
      result = 'Неправильний знак операції';
  }
  return result;
}

console.log(doMath(5, '+', 3));
console.log(doMath(5, '^', 3));
