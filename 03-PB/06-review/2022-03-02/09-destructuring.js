let animals = ["dog", "cat", "giraffe", "koala", "mouse"];

// assign "dog" and "cat" to 2 variables called dog and cat
// let dog = animals[0];
// let cat = animals[1];
let [dog, cat] = animals;

console.log(dog);
console.log(cat);

// let's assing the other animals to a variable called otherAnimals
let [favouriteAnimal, secondFavouriteAnimal, ...otherAnimals] = animals;

let [, , ...otherAnimals2] = animals;

console.log(favouriteAnimal);
console.log(secondFavouriteAnimal);
console.log(otherAnimals);

let animal = {
  type: "cat",
  name: "Tom",
  color: "grey",
  age: 3,
};

let { name, type } = animal;

console.log(name);
console.log(type);
