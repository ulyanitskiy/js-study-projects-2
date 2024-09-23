'use strict';

const customBind = (fn, context) => (...args) => fn.bind(context)(...args);

const obj = {
  x: 2,
};

function getX() {
  return this.x;
}

const boundGetX = customBind(getX, obj);
console.log(boundGetX());
