'use strict';

function generateList(array) {
  const ul = document.createElement('ul');
  array.forEach((item) => {
    const li = document.createElement('li');

    if (Array.isArray(item)) {
      li.appendChild(generateList(item));
    } else {
      li.textContent = item;
    }

    ul.appendChild(li);
  });
  return ul;
}

const array1 = [1, 2, 3];
document.body.appendChild(generateList(array1));
const array2 = [1, 2, [1.1, 1.2, 1.3], 3];
document.body.appendChild(generateList(array2));
