'use strict';

const createUser = (name, age) => {
  let _name = name;
  let _age = age;

  return {
    getName: () => _name,
    setName: (newName) => {
      _name = newName;
    },
    getAge: () => _age,
    setAge: (newAge) => {
      if (typeof newAge === 'number' && newAge >= 0 && newAge <= 120) {
        _age = newAge;
      } else {
        console.error('Помилка: Вік має бути від 0 до 120');
      }
    },
  };
};

const user = createUser('Alex', 24);
console.log(user.getName());
user.setName('Alice');
console.log(user.getName());

console.log(user.getAge());
user.setAge(123);
console.log(user.getAge());
user.setAge(26);
console.log(user.getAge());
