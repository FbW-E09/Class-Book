/**
 * Primitive data types:
 * 
 * - they are immutable
 * 
 * number
 * string
 * boolean
 * undefined
 * null
 * 
 * 
 * Objects:
 * 
 * object
 * (array)
 * function
 * 
 * 
 * (Symbol) 
 * 
 * 
 * 
 * 
 * NaN
 */

2 + 1;

let a = 2;
let sum = 2 + 1;
let b = 3;

let string = "hello";

string[2] = "Z";

console.log(string);

let numbers = [1, 2, 3];

numbers[2] = "Z";

console.log(numbers);

let array1 = [];
let array2 = [];
let array3 = [];

console.log(array1 === array2); // false

let array4 = array3;

array4.push("a");

console.log(array4); // ["a"]
console.log(array3); // ["a"]