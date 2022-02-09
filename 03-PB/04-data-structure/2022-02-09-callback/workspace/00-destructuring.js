let animals = ["cat", "dog", "mouse", "monkey", "elephant"];

/**
 *  const favourite = animals[0];
 *  const nicest = animals[1];
 *  const alsoCute = animals.slice(2);
 */
const [favourite, nicest, ...alsoCute] = animals;

console.log("favourite", favourite);
console.log("nicest", nicest);
console.log("alsoCute", alsoCute);

let myAnimals = [favourite, nicest, alsoCute];
console.log("myAnimals", myAnimals);
/**
 * firstAnimal
 * secondAnimal
 */
const [firstAnimal, secondAnimal] = animals;
console.log("firstAnimal", firstAnimal);
console.log("secondAnimal", secondAnimal);
console.log("animals", animals);

/**
 * get only third and fifth animal using destructuring assignment
 */

const [, , thirdAnimal, , fifthAnimal] = animals;

console.log("thirdAnimal", thirdAnimal);
console.log("fifthAnimal", fifthAnimal);

let person = {
  firstName: "Mike",
  lastName: "Smith",
  age: 28,
  address: {
    street: "somestreet",
    number: 16,
    city: "Berlin",
  },
};

/**
 * to destructure an object, we need to use variable name
 * matching property names inside the object
 */

/**
 * assign firstName and lastName to 2 separate variables called
 * firstName and lastName
 */

const { firstName, lastName } = person;

// console.log(firstName);
console.log(firstName);
console.log(lastName);

