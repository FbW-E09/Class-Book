// Arrow functions are shorter and more convenient, especially for simple one line actcions.

// fundtion declaration
function add(num1, num2) {
  return num1 + num2;
}

// function Expression
const add = function (num1, num2) {
  return num1 + num2;
};
// add(2,1) --> this won't work
const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => {
  return num1 * num2;
};

const sum = add(1, 3);
const subtracted = subtract(3, 1);
const multiplied = multiply(3, 2);

console.log(sum);
console.log(subtracted);
console.log(multiplied);
