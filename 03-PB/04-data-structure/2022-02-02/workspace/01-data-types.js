/**
 * JavaScript data types
 *
 * Primitive data types:
 *
 * boolean
 * string
 * number
 * undefined
 * null
 *
 * Objects:
 *
 * function
 * array
 * object
 */

//
let a = 2;
let b = a;
let c = 4 - 2;
let d = c;

d = 3;

let string = "hello";
let string2 = "hello";

let string3 = string2;
let string4 = string3;

let string5 = "hel" + "lo";

string2 = "hey";

console.log(string === string5);
console.log(`is "hello" the same as "hel" + "lo"?`, "hello" === "hel" + "lo");

console.log([] === []);
console.log([1, 2, 3] === [1, 2, 3]);

// function myReverse(array) {
//   let revArray = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     revArray.push(array[i]);
//   }
//   return revArray;
// }

// let array = [1, 2, 3];
// console.log(myReverse(array));
// // array[0] = "z";
// console.log(array);

let me = [
  39,
  "Carlo",
  "Trimarchi",
  "Italian",
  "Messina",
  "green",
  "black",
  false,
  true,
  ["books", "comics", "music", "guitar", "tv series", "anime"],
  ["pizza", "pasta", "ice cream"],
];
