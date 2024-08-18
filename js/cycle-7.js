'use strict';

let sum = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
document.write(`Cума парних чисел в діапазоні від 30 до 80 = ${sum}`);
