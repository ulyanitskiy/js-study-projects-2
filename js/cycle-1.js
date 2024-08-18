'use strict';

let result = '';
for (let i = 10; i <= 20; i++) {
  if (i === 20) {
    result += ` ${i}`;
    continue;
  }
  result += `${i}, `;
}
document.write(result);
