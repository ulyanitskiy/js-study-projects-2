'use strict';

const insertWordInto = (initialString) => {
  const words = initialString.split(' ');
  const insertPositions = [0];

  for (let i = 0; i < words.length; i++) {
    insertPositions.push(insertPositions[i] + words[i].length + (i > 0 ? 1 : 0));
  }
  let currentIndex = 0;

  return (word) => {
    const position = insertPositions[currentIndex];
    currentIndex = (currentIndex + 1) % (words.length + 1);

    if (position === 0) {
      return word + ' ' + initialString;
    } if (position === initialString.length) {
      return initialString + ' ' + word;
    }
    return initialString.slice(0, position) + ' ' + word + ' ' + initialString.slice(position).trim();
  };
};

const insert = insertWordInto('this is a city with a special culture and history');
const firstResult = insert('Odesa');
const secondResult = insert('Odesa');
const thirdResult = insert('Odesa');
const fourthResult = insert('Odesa');
const fifthResult = insert('Odesa');
const sixthResult = insert('Odesa');
const seventhResult = insert('Odesa');
