/**
 * Complete the code for the function simpleMap():

 * - it should take a string and a function in input
 * - it should return the result of applying that function to the string
 *
 */

function simpleMap(number, callback) {
  let result = callback(number);

  return result;
}

function greet(string) {
  return "Hey " + string;
}

function reverse(string) {
  return string.split("").reverse().join("");
}

function capitalizeFirstAndLast(string) {
  return (
    string[0].toUpperCase() +
    string.slice(1, string.length - 1) +
    string[string.length - 1].toUpperCase()
  );
}

console.log(simpleMap("Mark", greet)); // expected output: "Hey Mark"
console.log(simpleMap("Lenny", reverse)); // expected output: "ynneL"
console.log(simpleMap("pizza", capitalizeFirstAndLast)); // expected output: "PizzA"
