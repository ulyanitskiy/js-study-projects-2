'use strict';

const elementsList = document.querySelectorAll('#ulId li');
elementsList.forEach((element) => console.log(element.textContent));

const ulElement = document.querySelector('#ulId');
const attributesArray = [];
for (let attr of ulElement.attributes) {
  attributesArray.push(attr.value);
}
console.log(attributesArray);

const attributeNamesArray = [];
for (let attr of ulElement.attributes) {
  attributeNamesArray.push(attr.name);
}
console.log(attributeNamesArray);

ulElement.lastElementChild.textContent = 'Hi, my name is Alex!';

const firstLi = ulElement.firstElementChild;
firstLi.setAttribute('data-my-name', 'Alex');

ulElement.removeAttribute('data-dog-tail');
