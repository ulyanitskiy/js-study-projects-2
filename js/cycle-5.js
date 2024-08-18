'use strict';

let product = BigInt(1);
for (let i = 15; i <= 35; i++) {
  product *= BigInt(i);
}
document.write(`Добуток усіх цілих чисел від 15 до 35 = ${product.toString()}`);
