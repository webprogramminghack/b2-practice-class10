'use strict';

{
  function sum(a, b) {
    return a + b;
  }

  // console.log(sum(1, 2));
}

{
  function sumAll(...args) {
    // console.log('args :>> ', args);

    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
  }

  // console.log(sumAll(1, 2, 3));
}

function showName() {
  // console.log(arguments);
  // console.log(Array.isArray(arguments));

  [...arguments].forEach((arg) => {
    console.log(arg);
  });
}

// showName('John', 'Wick');

// console.log(Math.max(3, 12, 5, 10, 1));

const numbers = [3, 12, 5, 10, 1];

// console.log(Math.max(...numbers));

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedWithConcat = arr1.concat(arr2);
// console.log('mergedArr :>> ', mergedWithConcat);

let mergedWithSpread = [...arr1, ...arr2];
// console.log('mergedWithSpread :>> ', mergedWithSpread);

let str = 'Hello';
// console.log([...str]);

let arr = [1, 2, 3];
let arrCopy = [...arr];

// console.log(arr === arrCopy);

let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj };

// console.log(obj === objCopy);

let obj2 = { a: 1, b: { x: 100, y: 200 }, c: 3 };
let objCopy2 = { ...obj2 };

// console.log(obj2.b === objCopy2.b);

let objCopy3 = { ...obj2, b: { ...obj2.b } };

console.log(obj2.b === objCopy3.b);

// console.log('objCopy2 :>> ', objCopy2);
// console.log('objCopy3 :>> ', objCopy3);

const person = {
  name: 'John',
  age: 30,
  hobby: 'Playing games',
};

const person2 = { ...person, hobby: 'Billiard' };
// console.log('person2 :>> ', person2);
