function sayName() {
  console.log(`My name is ${this.name}`);
}

sayName();

let animal = {
  type: "cat",
  name: "Tom",
  color: "grey",
  age: 3,
  sayName2: sayName,
  /*
  sayName2: function() {
    console.log(`My name is ${this.name}`);
  },
  */
  speak: function () {
    console.log("meow");
  },
  describe: function () {
    //   console.log(`${animal.name} is a ${animal.age} years old ${animal.color} ${animal.type}`);
    console.log(
      `${this.name} is a ${this.age} years old ${this.color} ${this.type}`
    );
  },
};

// access values in objects
console.log(animal.name);
console.log(animal["color"]);

let propertyName = "age";
console.log(animal[propertyName]);
animal.speak();

animal.describe();

// the value of "this" is determined by how (or where) the function is called

// here the value of "this" will depend on what comes before the dot. In this case it will be equal to "animal"
animal.sayName2(); 


// we can change the value of "this" manually by using methods like .bind(), .call(), .apply()