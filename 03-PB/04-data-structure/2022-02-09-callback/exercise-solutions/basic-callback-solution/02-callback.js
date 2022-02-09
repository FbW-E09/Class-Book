/**
 * The simpleMap() function below takes a number and a function in input
 * 
 * It should return the result of applying that function to the number.
 * 
 * Complete the code below by declaring the missing functions (double(), square(), triple())
 * to get the correct output
 */


function simpleMap(number, callback) {
  let result = callback(number);

  return result;
}

function double(number) {
  return number * 2;
}

function square(number) {
  return number * number;
}

function triple(number) {
  return number * 3;
}

console.log(simpleMap(2, double)); // expected output: 4
console.log(simpleMap(3, square)); // expected output: 9
console.log(simpleMap(50, triple)); // expected output: 150
console.log(simpleMap(4, square)); // expected output: 16
