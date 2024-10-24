# Task

Вам потрібно написати функцію DeepFreeze, яка приймає об'єкт і заморожує його та всі вкладені в нього об'єкти.

Створіть функцію, яка перебирає властивості об'єкта і «заморожує» всі об'єкти, які вона зустрічає, включаючи вихідний об'єкт:

Підказки: заморозити означає зробити так, щоб об'єкт не можна було змінювати.

Посилання:

Object.freeze

let user = {

data: {

a: 1,

b: 2,

c: 3,

d: {

a1: 1,

b1: 2,

c1: 3,

d1: {

a2: 3,

b2: 3,

c2: 3,
}
},
}
}
