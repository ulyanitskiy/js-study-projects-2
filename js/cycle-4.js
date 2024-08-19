'use strict';

const num = 17;
let isSimple = true;
if (num <= 1) {
  isSimple = false;
} else {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      isSimple = false;
      break;
    }
  }
}
document.write(`Чи є число ${num} простим? - ${isSimple}`);
