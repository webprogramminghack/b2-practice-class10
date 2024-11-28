'use strict';

{
  let user = {
    name: 'John',
    age: 30,
  };

  // console.log(Object.keys(user));
  // console.log(Object.values(user));
  // console.log(Object.entries(user));
}

{
  let user = {
    name: 'John',
    age: 30,
  };

  // for (let value of Object.values(user)) {
  //   console.log(value);
  // }

  // Object.keys(user).forEach((key) => {
  //   console.log(key);
  // });
}

{
  // object
  let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };

  // array 2 dimensi
  // let prices2 = [[banana, 1][(orange, 2)][(meat, 4)]];

  let transformedPrices = Object.entries(prices);
  let transformedDoublePrices = transformedPrices.map(([key, value]) => [
    key,
    value * 2,
  ]);

  // console.log('transformedDoublePrices :>> ', transformedDoublePrices);

  let transformedBackPrices = Object.fromEntries(transformedDoublePrices);

  // console.log('transformedBackPrices :>> ', transformedBackPrices);

  let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );

  // );

  console.log('doublePrices :>> ', doublePrices);

  // const numbers = [1, 2, 3];

  // const doubleNumbers = numbers.map((item) => `Nilainya adalah ${item * 2}`);
  // console.log('doubleNumbers :>> ', doubleNumbers);
}

// let prices = [
//   ['banana', 1],
//   ['banana', 2],
//   ['meat', 4],
// ];

// let objPrices = Object.fromEntries(prices);

// console.log('objPrices :>> ', objPrices);
