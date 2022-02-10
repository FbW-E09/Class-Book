let products = [
  {
    type: "T-Shirt",
    color: "blue",
    price: 19.99,
  },
  {
    type: "Jeans",
    color: "red",
    price: 29.99,
  },
  {
    type: "Shirt",
    color: "black",
    price: 39.99,
  },
  {
    type: "Jacket",
    color: "brown",
    price: 99.99,
  },
  {
    type: "Shoes",
    color: "green",
    price: 49.99,
  },
  {
    type: "Hat",
    color: "green",
    price: 19.99,
  },
];

/**
 * Get an array containing only the types of products that cost more than 30
 *
 * expected output: ["Shirt", "Jacket", "Shoes"]
 */

/**
 * it's a 2-step process:
 * - first we filter out elements that are cheaper than 30
 * - then we map the resulting array to get only the product type
 */

let productsThatCostMoreThan30 = products.filter(
  (product) => product.price > 30
);

console.log("productsThatCostMoreThan30", productsThatCostMoreThan30);

let filteredProductTypes = productsThatCostMoreThan30.map(
  (product) => product.type
);

console.log("filteredProductTypes", filteredProductTypes);

let productTypesThatCostMoreThan30 = products
  .filter((product) => product.price > 30)
  .map((product) => product.type);

console.log(productTypesThatCostMoreThan30);



console.log("-------------")


const animals = [
    "cat",
    "dog",
    "mouse",
    "giraffe",
    "koala",
    "crocodile",
    "cangaroo",
  ];
  
  /**
   * - if the animal starts with c, capitalize the first letter
   * - if the animal starts with d, capitalize the last letter
   * - if the animal starts with k, make it all uppercase
   * - if the animal starts with m, add underscores before and after
   */
  
  function transformAnimals(animal) {
    if (animal.startsWith("c")) {
      return animal[0].toUpperCase() + animal.slice(1);
    } else if (animal.startsWith("d")) {
      return (
        animal.slice(0, animal.length - 1) +
        animal[animal.length - 1].toUpperCase()
      );
    } else if (animal.startsWith("k")) {
      return animal.toUpperCase();
    } else if (animal.startsWith("m")) {
      return "_" + animal + "_";
    } else {
      return animal;
    }
  }
  
let transformedAnimals = animals.map(transformAnimals);

let transformedAnimalsWithC = transformedAnimals.filter((animal) => animal[0].toLowerCase() === "c")
console.log(transformedAnimalsWithC);

