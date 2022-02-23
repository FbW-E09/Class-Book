/**
 * - product
 *  - t-shirt
 *  - jeans
 *  - shoes
 *
 * - cart
 *
 * - payment method
 *
 * - user
 *  - guest
 *  - registered users
 *
 * - address
 */

//  let album = {
//     artist: "The Clash",
//     genre: "punk",
//     year: 1977,
//     tracklist: [
//       { title: "Janie Jones", duration: "2:05" },
//       { title: "Remote Control", duration: "3:00" },
//       { title: "I'm So Bored With The U.S.A.", duration: "2:24" },
//       { title: "White Riot", duration: "1:55" },
//       { title: "Hate & War", duration: "2:05" },
//       { title: "What's My Name", duration: "1:40" },
//       { title: "Deny", duration: "3:03" },
//       { title: "London's Burning", duration: "2:10" },
//       { title: "Career Opportunities", duration: "1:51" },
//       { title: "48 Hours", duration: "1:34" },
//       { title: "Garageland", duration: "3:13" },
//     ],
//   };

// class Album {
//     constructor(name) {
//         this.name = name;
//     }

//     calculateDuration() {}
//     play() {}
//     addToFavourite() {}
// }

// let album1 = new Album("My album");
/**
 * {
 *  name: "My album",
 *  calculateDuration: function() {},
 *  play: function() {},
 *  addToFavourite: function() {},
 * }
 */

let person1 = {
  name: "Julia",
  age: 28,
  introduce: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

let person2 = {
  name: "Lyn",
  age: 29,
  introduce: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

function makePerson(name, age) {
  const person = {};
  person.name = name;
  person.age = age;
  person.introduce = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
  return person;
}

let person3 = makePerson("Mark", 17);
let person4 = makePerson("Tom", 47);
let person5 = makePerson("Mary", 27);

console.log(person1, person2, person3, person4, person5);

person1.introduce();
person2.introduce();
person3.introduce();
person4.introduce();
person5.introduce();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
  }
}

let person6 = new Person("Hannah", 31);

// adding method to the object vs to the prototype

// prototype chain with subclassing

// album class

/**
 * {
 *  name: "Hannah",
 *  age: 31,
 *  prototype: {
 *      introduce: function() {...}
 *      // ...
 *      // ...
 *      // ...
 *  }
 * }
 */

console.log(person6);

person6.introduce();





class Array {
    join() {}
    sort() {}
    filter() {}
    map() {}
    //...
}