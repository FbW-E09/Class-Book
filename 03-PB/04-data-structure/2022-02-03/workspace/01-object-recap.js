let person1 = {
  firstName: "Mike",
  age: 28,
};

let person2 = {
  firstName: "Ilana",
  age: 34,
};

console.log(person2);

// read a property value

console.log("Name of person1 is:", person1.firstName);

// change the value of a property

person1.age = 40;

console.log(`Now person1 is ${person1.age} years old`);

person1.age++;
person1.age += 1;

console.log(`Now person1 is ${person1.age} years old`);

function describe(person) {
  return `${person.firstName} is ${person.age} years old`;
}

console.log(describe(person1));
console.log(describe(person2));

function older(person1, person2) {
  return person1.age > person2.age
    ? `${person1.firstName} is older than ${person2.firstName}`
    : `${person2.firstName} is older than ${person1.firstName}`;
}

console.log(older(person1, person2));

// create an object with a method

let cat = {
  name: "lily",
  color: "grey",
  age: 3,
  speak: () => {
     return "meow";
  },
  introduce: function() {
    return `my name is ${this.name}. I am a ${this.age} years old ${this.color} cat`;
  },
};

console.log(cat.speak());
console.log(cat.introduce());
