let number = 5;
let string = "hello";
let isMarried = false;

let numbers = [1, 2, 3];
let person = { name: "carlo", city: "Berlin" };

let anotherString = string;

function sum(a, b) {
  return a + b;
}

// let result = sum(2, 4);

let anotherSum = sum;
let anotherSum2 = function (a, b) {
  return a + b;
};

console.log(sum);
console.log(anotherSum);
// console.log(anotherSum(3, 8));
// console.log(sum(3, 8));
