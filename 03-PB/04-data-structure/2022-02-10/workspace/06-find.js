const animals = [
  "cat", // 0
  "dog", // 1
  "mouse", // 2
  "giraffe", // 3
  "koala", // 4 (animals.length / 2)
  "crocodile", // 5
  "elephant", // 6
  "cangaroo", // 7
];

function startsWithC(string) {
  return string[0].toLowerCase() === "c";
}
let firstAnimalWithC = animals.find(startsWithC);

console.log("The first animal that starts with c is:", firstAnimalWithC);

let animalsWithC = animals.filter(startsWithC);
console.log("All the animals that start with c are:", animalsWithC);

// find the first animal that starts with c in the second half of the array
let animalWithCInSecondHalf = animals.find((animal, index, array) => {
  return animal[0].toLowerCase() === "c" && index >= array.length / 2;
});

console.log(animalWithCInSecondHalf);

// first animal that starts with c and has an even index
let animalWithCEvenIndex = animals.find((animal, index) => {
  return animal[0].toLowerCase() === "c" && index % 2 === 0;
});

console.log(animalWithCEvenIndex);
