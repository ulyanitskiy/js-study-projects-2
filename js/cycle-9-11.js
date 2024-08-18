'use strict';

const number = 228;
let result = '';
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    if (result !== '') {
      result += ', ';
    }
    result += i;
  }
}
document.write(`Дільники числа 228: ${result}<br>`);

const number2 = 228;
let evenDivisorsNum = 0;
for (let i = 1; i <= number2; i++) {
  if (number2 % i === 0 && i % 2 === 0) {
    evenDivisorsNum++;
  }
}
document.write(`Кількість парних дільників числа ${number2}: ${evenDivisorsNum}<br>`);

const number3 = 228;
let evenDivisorsSum = 0;
for (let i = 1; i <= number3; i++) {
  if (number3 % i === 0 && i % 2 === 0) {
    evenDivisorsSum += i;
  }
}
document.write(`Сума парних дільників числа ${number3}: ${evenDivisorsSum}`);
