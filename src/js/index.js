'use strict';

function mainFunction(callback) {
  const num1 = parseFloat(prompt('Введіть перше число:'));
  const num2 = parseFloat(prompt('Введіть друге число:'));
  callback(num1, num2);
}

function exponentiation(base, exponent) {
  const result = base ** exponent;
  alert(`Результат: ${base}^${exponent} = ${result}`);
}

function multiply(num1, num2) {
  const result = num1 * num2;
  alert(`Результат: ${num1} * ${num2} = ${result}`);
}

function division(num1, num2) {
  if (num2 !== 0) {
    const result = num1 / num2;
    alert(`Результат: ${num1} / ${num2} = ${result}`);
  } else {
    alert('Помилка: поділ на нуль!');
  }
}

function modulo(num1, num2) {
  if (num2 !== 0) {
    const result = num1 % num2;
    alert(`Результат: ${num1} % ${num2} = ${result}`);
  } else {
    alert('Помилка: поділ на нуль!');
  }
}

mainFunction(exponentiation);

mainFunction(multiply);

mainFunction(division);

mainFunction(modulo);
