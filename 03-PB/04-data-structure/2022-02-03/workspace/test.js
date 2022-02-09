// let book = {
//   title: "The Hitchhiker's Guide to the Galaxy",
//   title: "blabla",
//   author: "Douglas Adams",
//   publicationYear: 1979,
//   pages: 193,
// };

// console.log(book.title);

// let letters1 = {a: 1, b: 2};
// let letters2 = {b: 99, c: 3};

// let merge = Object.assign(letters1, letters2);
// console.log(merge);

let person = {
  name: "Carlo",
  city: "Berlin",
  // introduce is a method of the object person
  introduce: function () {
    return `my name is ${this.name} and I live in ${this.city}`;
  },
};

person.nationality = "Italian";

console.log(person);

// sayHi is a method of the object person
person.sayHi = function () {
  return `hi, my name is ${this.name}`;
};

console.log(person.sayHi());
console.log(person);

// this is not a method
function sayHello() {
  console.log("hello");
}

let person1 = {
  firstName: "Carlo",
  age: 30,
  address: {
    street: "blablastr",
    streetNumber: 2,
    city: "berlin",
  },
};

function largestNumber(array) {
  let largest = array[0];
  for (i = 1; i < array.length; i++) {
    if (array > largest);
    largest = array[i];
  }
  return largest;
}
let array = [1, 6, 83, 91, 0, -4, 1337, 5];
