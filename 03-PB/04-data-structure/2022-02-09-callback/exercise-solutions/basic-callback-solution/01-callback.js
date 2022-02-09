/**
 * The map() function below takes a number and a function in input
 * 
 * It should return the result of applying that function to the number.
 * Complete the code below to get the correct output
 */

function simpleMap(number, callback) {
  let result = callback(number);

  return result;
}

function double(number) {
  return number * 2;
}

console.log(simpleMap(2, double)); // expected output: 4
console.log(simpleMap(3, double)); // expected output: 6
console.log(simpleMap(50, double)); // expected output: 100
console.log(simpleMap(0, double)); // expected output: 0
