'use strict';

{
  let arr = ['John', 'Smith'];

  const [firstName, surName] = arr;

  // console.log(firstName);
  // console.log(surName);
}

{
  let [first, , third] = [
    'Julius',
    'Caesar',
    'Consul',
    'of the Roman Republic',
  ];

  // console.log(third);
}

{
  let [x, y, z] = 'abc';
  // console.log('a :>> ', x);
  // console.log('b :>> ', y);
  // console.log('c :>> ', z);

  let [one, two, three] = new Set([1, 2, 3]);

  // console.log('one :>> ', one);
  // console.log('two :>> ', two);
  // console.log('three :>> ', three);
}

let guest = 'Jane';
let admin = 'Pete';

[guest, admin] = [admin, guest];

// console.log('guest :>> ', guest);
// console.log('admin :>> ', admin);

{
  let [name = 'Guest', surname = 'Anonymous', something] = [];
  // console.log('name :>> ', name);
  // console.log('surname :>> ', surname);
  // console.log('something :>> ', something);
}

{
  let options = {
    title: 'Menu',
    width: 100,
    height: 100,
  };

  let { title, width, height } = options;

  // console.log('title :>> ', title);
  // console.log('width :>> ', width);
  // console.log('height :>> ', height);
}

{
  let options1 = {
    title: 'Menu 1',
    width: 100,
    height: 100,
  };

  let options2 = {
    title: 'Menu 2',
    width: 200,
    height: 200,
  };

  let { title: t1, width: w1, height: h1 } = options1;
  let { title: t2, width: w2, height: h2 } = options2;

  // console.log('title :>> ', t1);
  // console.log('width :>> ', w1);
  // console.log('height :>> ', h1);
}

{
  let options = {
    title: 'Menu',
    width: 100,
    height: 100,
  };

  let { title, ...rest } = options;

  // console.log(rest.width);
  // console.log(rest.height);
}

{
  function showMenu({
    title = 'Untitled',
    width = 200,
    height = 100,
    items = [],
  } = {}) {
    console.log(`${title} ${width} ${height}`);
    console.log(items);
  }

  const object = { title: 'My menu', items: ['Item 1', 'Item 2'] };

  // showMenu(object);
}

{
  const person = {
    firstName: 'John',
    lastName: 'Smith',
  };

  function printName(obj) {
    console.log(obj.firstName);
    console.log(obj.lastName);
  }

  function printName2({ firstName, lastName }) {
    console.log(firstName);
    console.log(lastName);
  }

  // printName(person);
  printName2(person);
}
