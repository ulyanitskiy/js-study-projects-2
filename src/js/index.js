'use strict';

const length = prompt('Введіть довжину масиву:');
const array = [];
for (let i = 0; i < length; i++) {
  array.push(Number(prompt(`Введіть елемент ${i + 1}:`)));
}
console.log('Початковий масив:', array);

array.sort((a, b) => a - b);
console.log('Відсортований масив:', array);

array.splice(1, 3);
console.log('Масив після видалення елементів з 2 до 4:', array);

console.log('Кінцевий масив:', array);
