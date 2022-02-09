function doublesNumbersInArray(numbers) {
  let result = [];
  for (const number of numbers) {
    result.push(number * 2);
  }
  return result;
}

console.log(doublesNumbersInArray([1, 2, 3])); // [2, 4, 6]
console.log(doublesNumbersInArray([2, 4, 8])); // [4, 8, 16]
console.log(doublesNumbersInArray([0, 0, 7])); // [0, 0, 14]

// write a function that calculates the squares of numbers in an array

function squareNumbersInArray(numbers) {
  let result = [];
  for (const number of numbers) {
    result.push(number * number);
  }
  return result;
}

console.log(squareNumbersInArray([1, 2, 3])); // [1, 4, 9]
console.log(squareNumbersInArray([2, 4, 8])); // [4, 16, 64]

// a function that adds 100 to every number in an array
function add100ToNumbersInArray(numbers) {
  let result = [];
  for (const number of numbers) {
    result.push(number + 100);
  }
  return result;
}

console.log(add100ToNumbersInArray([1, 2, 3])); // [101, 102, 103]
console.log(add100ToNumbersInArray([2, 4, 8])); // [102, 104, 108]

// a function that subtracts 2 from every number in an array
function subtracts2FromNumbersInArray(numbers) {
  let result = [];
  for (const number of numbers) {
    result.push(number - 2);
  }
  return result;
}

console.log(subtracts2FromNumbersInArray([1, 2, 3])); // [ -1, 0, 1 ]
console.log(subtracts2FromNumbersInArray([2, 4, 8])); // [0, 2, 6]

function applyOperationToNumbersInArray(numbers, operation) {
  let result = [];
  for (const number of numbers) {
    result.push(operation(number));
  }
  return result;
}

let firstMath = function (number) {
  return number * 3;
};

function multiplyNumberBy3(n) {
  return n * 3;
}

function multiplyNumberBy2(number) {
  return number * 2;
}

function square(number) {
  return number ** 2;
}

console.log(applyOperationToNumbersInArray([1, 2, 3], multiplyNumberBy3)); // [3, 6, 9]
console.log(applyOperationToNumbersInArray([1, 2, 3], multiplyNumberBy2)); // [3, 6, 9]
console.log(applyOperationToNumbersInArray([1, 2, 3], square)); // [3, 6, 9]

console.log(applyOperationToNumbersInArray([1, 2, 3], (number) => number * 4)); // [3, 6, 9]

function myMap(array, callback) {
  let result = [];
  for (const item of array) {
    result.push(callback(item));
  }
  return result;
}

function greet(string) {
  return "Hey " + string;
}
console.log(myMap(["Carlo", "Helon", "Ahmad"], greet));
