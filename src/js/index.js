'use strict';

const getRandomImage = () => {
  const randomNumber = Math.floor(Math.random() * 9) + 1;
  const img = document.createElement('img');
  img.src = `./images/${randomNumber}.jpg`;
  img.alt = `Image ${randomNumber}`;
  img.title = `Image ${randomNumber}`;
  document.body.appendChild(img);
};
getRandomImage();
