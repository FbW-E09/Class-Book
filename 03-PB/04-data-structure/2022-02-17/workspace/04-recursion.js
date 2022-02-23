/**
 * Recursion
 * - we need an exit condition
 * - we need a recursive call (a call to the function itself)
 */

// function infinite() {
//     console.log("try to stop me");
//     infinite();
// }

// infinite();

// function myLoopFunction(n) {
//   console.log("on the way in", n);
//   if (n > 0) {
//     myLoopFunction(n - 1);
//   }
//   console.log("on the way out", n);
// }

// myLoopFunction(5);

/*
loop(5)
- loop(4)
- - loop(3)
- - - loop(2)
- - - - loop(1)
- - - - - loop(0)
- - - - loop(1)
- - - loop(2)
- - loop(3)
- loop(4)
loop(5)
*/

let numbers = [1, [2, 3], [4, 5, [6, 7, [8, 9]]], 10];

/*
array: [1, [2, 3], 4, 5]
index: 0
length: 4
array[index]: 1
-------
array: [1, [2, 3], 4, 5]
index: 1
length: 4
array[index]: [2, 3]
-------
    array: [2, 3]
    index: 0
    length: 2
    array[index]: 2
    -------
    array: [2, 3]
    index: 1
    length: 2
    array[index]: 3
    -------
    array: [2, 3]
    index: 2
    length: 2
    array[index]: 3
    -------
-------
array: [1, [2, 3], 4, 5]
index: 2
length: 4
array[index]: [2, 3]

*/
function arrayExplorer(array, index) {
  if (index < array.length) {
    if (Array.isArray(array[index])) {
      arrayExplorer(array[index], 0);
    } else {
      console.log(array[index]);
    }
    arrayExplorer(array, index + 1);
  }
}

arrayExplorer(numbers, 0);

console.log("bla");

let numbers9 = [
  1,
  2,
  3,
  { a: "test", bla: [1, 2, 3] },
  { b: "test2" },
  { c: "test3" },
  ["a", "b", "c"],
];

function printElement(array) {
  for (element of array) {
    if (Array.isArray(element)) printElement(element);
    else if (element instanceof Object) {
      console.log(...Object.values(element));
    } else console.log(element);
  }
}

// printElement(numbers9);
