'use strict';

const number = 69;
let isPowerOfThree = false;
let isNumberProduct = 1;
while (isNumberProduct <= number) {
  if (isNumberProduct === number) {
    isPowerOfThree = true;
    break;
  }
  isNumberProduct *= 3;
}
document.write(`Чи можна одержати число ${number} шляхом зведення числа 3 у ступінь? - ${isPowerOfThree}`);
