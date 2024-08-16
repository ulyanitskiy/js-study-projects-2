'use strict';

const hours = Number(prompt("Введите кол-во часов для продуктивного обучения"));
const seconds = hours * 3600;

let hourWord;

if (hours === 1) {
    hourWord = "часе";
} else {
    hourWord = "часах";
}

alert(`В ${hours} ${hourWord} ${seconds} секунд.`);