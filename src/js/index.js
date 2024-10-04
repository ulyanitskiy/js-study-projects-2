'use strict';

const generateElements = () => {
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.id = 'inputField';
  inputField.placeholder = 'Наведіть фокус на мене';

  const infoBox = document.createElement('div');
  infoBox.id = 'infoBox';
  infoBox.textContent = 'Зробив домашку?';

  return { inputField, infoBox };
};

const insertElements = (inputField, infoBox) => {
  document.body.appendChild(inputField);
  document.body.appendChild(infoBox);
};

const { inputField, infoBox } = generateElements();
insertElements(inputField, infoBox);

inputField.addEventListener('focus', () => {
  infoBox.style.display = 'block';
});

inputField.addEventListener('focusout', () => {
  infoBox.style.display = 'none';
});
