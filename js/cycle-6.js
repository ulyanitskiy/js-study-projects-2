'use strict';

let sum = 0;
for (let i = 1; i <= 500; i++) {
  sum += i;
}
const average = Math.floor(sum / 500);
document.write(`Cереднє арифметичне всіх цілих чисел від 1 до 500 = ${average}`);
