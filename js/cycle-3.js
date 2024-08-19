'use strict';

const N = 250;
for (let i = 1; i <= 100; i++) {
  if (i * i > N) {
    break;
  }
  document.write(`${i} `);
}
