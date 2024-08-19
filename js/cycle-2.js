'use strict';

const dollarsPrice = 27;
for (let dollarsAmount = 10; dollarsAmount <= 100; dollarsAmount += 10) {
  const valueInUAH = dollarsPrice * dollarsAmount;
  document.write(`${dollarsAmount} USD = ${valueInUAH} UAH<br>`);
}
