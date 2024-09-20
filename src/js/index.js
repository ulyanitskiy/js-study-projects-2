'use strict';

function insertWordInto(initialString) {
  const words = initialString.split(' ');
  const insertPositions = [0];

  for (let i = 0; i < words.length; i++) {
    insertPositions.push(insertPositions[i] + words[i].length + (i > 0 ? 1 : 0));
  }

  let currentIndex = 0;

  return function (word) {
    let position;
    if (currentIndex === 0) {
      position = insertPositions[1];
    } else if (currentIndex === 1) {
      position = insertPositions[0];
    } else if (currentIndex === 2) {
      position = insertPositions[2];
    } else {
      position = insertPositions[0];
    }
    currentIndex = (currentIndex + 1) % 4;

    if (position === 0) {
      return word + ' ' + initialString;
    } if (position === initialString.length) {
      return initialString + ' ' + word;
    }
    return initialString.slice(0, position) + ' ' + word + ' ' + initialString.slice(position).trim();
  };
}

const insert = insertWordInto('hello world');
const result = insert('Odesa');
const secondResult = insert('Odesa');
const thirdResult = insert('Odesa');
const fourthResult = insert('Odesa');
