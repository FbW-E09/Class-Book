let string = "hello";

let stringArray = string.split("");
console.log(
  stringArray.map((character) => {
    console.log(character);
  })
);

console.log(
  string.split("").map((character) => {
    console.log(character);
  })
);

function getEvenNumbers(array) {
  let evenNumbers = array.filter((number) => number % 2 === 0);
  return evenNumbers;
}

function getMultiplesOfN(array, n) {
  let evenNumbers = array.filter((number) => number % n === 0);
  return evenNumbers;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getMultiplesOfN(numbers, 4));
console.log(getMultiplesOfN(numbers, 3));
console.log(getMultiplesOfN(numbers, 5));
