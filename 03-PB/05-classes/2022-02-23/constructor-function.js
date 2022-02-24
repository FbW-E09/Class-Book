function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Employee(job) {
    this.job = job;
}

Object.setPrototypeOf(Employee, Person);

let person1 = new Person("carlo", 25);
let person2 = new Person("marty", 33);

// person1.introduce = function () {
//   console.log(`hey, my name is ${this.name}`);
// };

Person.prototype.introduce = function () {
  return `hey, my name is ${this.name}`;
};


console.log(person1);
console.log(person1.introduce());
console.log(person2);
console.log(person2.introduce());

// let's use the prototype to add a method

// ----------------

// let person3 = {
//   name: "John",
//   age: 15,
// };

// // add a method introduce to the object person2

// person3.introduce = function () {
//   console.log(`hey, my name is ${this.name}`);
// };

// console.log(person3);
// person3.introduce();
