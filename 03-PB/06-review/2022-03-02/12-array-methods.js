let numbers = [5, 9, 1, 0, -12, 1230, 99, 74, 12, 495843, 1023, -15, 29];
// .map()
/**
 * map() returns a new array of the same length as the original one.
 * We can apply a function to each element of the array to transform them how we want
 *
 */

let doubled = numbers.map((number) => number * 2);
console.log(doubled);

// .filter()
/**
 * filter() returns a new array containing only items that satisfy the condition inside the callback function
 *
 * If the callback function returns true for a certain value, this value will be appended to the result array
 * If the callback function returns false for a certain value, this value will be discarded
 */
let positiveNumbers = numbers.filter((number) => number >= 0);
console.log(positiveNumbers);

// .reduce()
let total = numbers.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, 0);
console.log(total);

/**
 * as a result we want an object like this:
 *
 * {
 *  positive: [5, 9, 1, 0 ...]
 *  negative: [-12, -15]
 * }
 */

let organizedNumbers = numbers.reduce((result, currentNumber) => {
//   if (result.positive === undefined) {
//     result.positive = [];
//   }
//   if (result.negative === undefined) {
//     result.negative = [];
//   }
  if (currentNumber >= 0) {
    result.positive.push(currentNumber);
  } else {
    result.negative.push(currentNumber);
  }
  return result;
}, {positive: [], negative: []});

console.log(organizedNumbers);


// let organizedNumbers = {};

// if (organizedNumbers.positive === undefined) {
//     organizedNumbers.positive = [];
// }

// if (organizedNumbers.negative === undefined) {
//     organizedNumbers.negative = [];
// }
// organizedNumbers.positive.push(1);

// organizedNumbers.negative.push(-50);

// console.log(organizedNumbers);