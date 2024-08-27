'use strict';

function padString(str, length, char, isLeft = false) {
  // Проверка наличия всех аргументов
  if (str === undefined) {
    return 'Error: строка не была передана';
  }
  if (length === undefined) {
    return 'Error: длина строки не была передана';
  }
  if (char === undefined) {
    return 'Error: символ для дополнения строки не был передан';
  }
  if (typeof str !== 'string') {
    return 'Error: первый аргумент должен быть строкой';
  }
  if (typeof length !== 'number' || length < 0) {
    return 'Error: второй аргумент должен быть положительным числом';
  }
  if (typeof char !== 'string' || char.length !== 1) {
    return 'Error: третий аргумент должен быть строкой длиной 1 символ';
  }
  if (typeof isLeft !== 'boolean') {
    return 'Error: четвертый аргумент должен быть булевым значением';
  }

  // Если длина строки уже больше или равна нужной
  if (str.length >= length) {
    return str;
  }

  // Подсчёт, сколько символов нужно добавить
  const paddingLength = length - str.length;
  const padding = char.repeat(paddingLength);

  // Добавление символов слева или справа
  return isLeft ? padding + str : str + padding;
}

// Примеры вызова функции:
console.log(padString('hello', 8, '*', true));
console.log(padString('world', 10, '#'));
console.log(padString('JS', 2, '!'));
console.log(padString('test', 6, '-', false));
