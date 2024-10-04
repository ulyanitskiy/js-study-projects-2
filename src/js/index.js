'use strict';

const getRandomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const insertRandomImage = () => {
  const randomNumber = getRandomNumberInRange(1, 9);
  const img = document.createElement('img');
  img.src = `./images/${randomNumber}.jpg`;
  img.alt = `Image ${randomNumber}`;
  img.title = `Image ${randomNumber}`;
  document.body.appendChild(img);
};

insertRandomImage();
