'use strict';

let student = {
  name: 'John',
  age: 3,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null,
};

let json = JSON.stringify(student);

// console.log('json :>> ', json);
// console.log('student :>> ', student);

{
  let room = {
    number: 23,
  };

  let meetup = {
    title: 'Conference',
    participants: ['john', 'ann'],
    place: room,
  };

  room.occupiedBy = meetup;

  // console.log(JSON.stringify(meetup));
  console.log(
    JSON.stringify(meetup, ['title', 'participants', 'place', 'number'], 2)
  );
}

{
  let user = {
    name: 'John',
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true,
    },
  };

  // console.log(JSON.stringify(user, null, 2));
}

{
  let json =
    '{"name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3]}';

  let user = JSON.parse(json);

  // console.log(user);
}
