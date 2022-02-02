let myObject = {};

console.log(typeof myObject);

let person = {
  firstName: "Carlo",
  lastName: "Trimarchi",
  creditCardNumber: 123,
  age: 39,
};

console.log(typeof person);

console.log("Person:", person);
console.log("My name is:", person.firstName);
// console.log("This:", this);
person.age = 26;
console.log("Person:", person);

/**
 * Objects seen so far:
 *
 * Math
 * String
 * Number
 *
 */

// let myMath = {
//     PI: 3.14,
//     max: function() {//...
//     },
//     min: function() {//...
//     },
// }

let cat = {
  name: "Alita",
  color: "black",
  age: 3,
  speak: function () {
    console.log("I'm going to take a nap.");
  },
  eat: function (food) {
    console.log("I just ate some nice " + food);
  },
};

cat.speak();

cat.eat("fish");


let person2 = {
    name: 'John!',
    age: 25,
    isMarried: false
  };
  
  console.log(person2.numChildren); // ????
  person2.lastName = 'Smith'; // ????
  console.log(person2);
//   person2.isMarried(); // ????