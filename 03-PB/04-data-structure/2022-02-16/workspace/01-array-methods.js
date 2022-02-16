let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Map
 *
 * Maps works on an array.
 * It returns a new array of the same length
 * We can use a callback to transform the elements inside the array however we want
 */

let doubledNumbers = numbers.map((number) => number * 2);
console.log("doubled numbers", doubledNumbers);

// ------------
function double(number) {
  return number * 2;
}
let doubledNumbers2 = numbers.map(double);
console.log("doubled numbers 2", doubledNumbers2);
// ------------

function double2(numbers) {
  return numbers.map((number) => number * 2);
}

const double3 = (numbers) => {
  return numbers.map((number) => number * 2);
};

console.log(double2([1, 2, 3]));
let doubledNumbers3 = double2([4, 5, 6]);
console.log(doubledNumbers3);

// transform the array of numbers into an array of objects, as follows:
/**
 * [
 *  {
 *      number: 1,
 *      isEven: false
 *  },
 *  {
 *      number: 2,
 *      isEven: true
 *  },
 *  {
 *      number: 3,
 *      isEven: false
 *  },
 *  ...
 * ]
 */

function numberToObject(number) {
  //   let object = {
  //     number: number,
  //     isEven: number % 2 === 0,
  //   };

  let object = {};
  object.number = number;
  object.isEven = number % 2 === 0;

  return object;
}

let transformedArray = numbers.map(numberToObject);
console.log("transformed array", transformedArray);

/**
 * Filter
 *
 * Filter works on an array
 * It returns a new array
 * We can use a callback to remove some elements based on a certain condition
 */

function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 === 1;
}

let evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
let oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);

console.log(transformedArray);
// filter the transformedArray based on the isEven property

function isEven2(object) {
  return object.isEven;
}

let transformedArrayEven = transformedArray
  .filter(isEven2)
  .map((object) => object.number);
console.log(transformedArrayEven);
