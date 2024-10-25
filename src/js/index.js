'use strict';

const product = {
  _name: '',
  _price: 0,
  quantity: 0,
};

Object.defineProperty(product, 'name', {
  get() {
    return this._name;
  },
  set(value) {
    if (typeof value === 'string' && value.trim() !== '') {
      this._name = value;
    } else {
      console.error('Помилка: Ім\'я має бути пустим рядком');
    }
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(product, 'price', {
  get() {
    return this._price;
  },
  set(value) {
    if (typeof value === 'number' && value > 0) {
      this._price = value;
    } else {
      console.error('Помилка: Ціна повинна бути більшою за число 0');
    }
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(product, 'totalValue', {
  get() {
    return this._price * this.quantity;
  },
  enumerable: true,
  configurable: false,
});

product.name = 'Ананас';
product.price = 20;
product.quantity = 2;

console.log(product.name);
console.log(product.price);
console.log(product.totalValue);
product.name = '';
product.price = -2;
