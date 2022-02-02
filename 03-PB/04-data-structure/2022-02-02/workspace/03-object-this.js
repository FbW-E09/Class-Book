/**
 * Create an object representing a person.
 *
 * This object should contain a method introduce() that when called will print a message like:
 *
 * "Hello, my name is Kate and I am 28 years old"
 */
let person = {
  firstName: "Kate",
  age: 28,
  introduce: function () {
    return `Hello my name is ${this.firstName} and I am ${this.age} years old.`;
  },
};
console.log(person.introduce());

let cat = {
  name: "Alita",
  color: "black",
  type: "cat",
  age: 3,
  speak: function () {
    console.log("I'm going to take a nap.");
  },
  eat: function (food) {
    console.log("I just ate some nice " + food);
  },
};

function describeAnimal(animal) {
  console.log(
    `${animal.name} is a ${animal.age} years old ${animal.color} ${animal.type}`
  );
}

describeAnimal(cat);

let mathStuff = {
  add: (a, b) => a + b,
};

console.log(mathStuff.add(2, 3));
