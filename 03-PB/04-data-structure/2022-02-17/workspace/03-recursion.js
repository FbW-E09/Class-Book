// Given an array of numbers, print the numbers from 1 to 6 to the console
/* 
Expected output:
1
2
3
4
5
6
*/
let numbers1 = [1, 2, 3, 4, 5, 6];

console.log("Exercise 1");
console.log("----------");
for (let number of numbers1) {
  console.log(number);
}

console.log("----------");
// Given nested arrays, print the numbers from 1 to 6
/* 
Expected output:
1
2
3
4
5
6
*/

console.log("Exercise 2");
console.log("----------");
let numbers2 = [
  [1, 2],
  [3, 4],
  [5, 6, 7, 8, 9, 10],
  [11, 12, 13],
];
for (let number of numbers2) {
  for (let nestedNumber of number) {
    console.log(nestedNumber);
  }
}

console.log("----------");

// Given nested arrays, print the numbers from 1 to 6 like in the examples above
let numbers3 = [1, 2, 3, [4, 5, 6]];
console.log("Exercise 3");
console.log("----------");
for (let item of numbers3) {
  if (Array.isArray(item)) {
    for (let nestedNumber of item) {
      console.log(nestedNumber);
    }
  } else {
    console.log(item);
  }
}

console.log("----------");

// Given nested arrays, print the numbers from 1 to 9
let numbers4 = [1, 2, 3, [4, 5, 6], 7, 8, 9];
console.log("Exercise 4");
console.log("----------");
for (let item of numbers4) {
  if (Array.isArray(item)) {
    for (let nestedNumber of item) {
      console.log(nestedNumber);
    }
  } else {
    console.log(item);
  }
}

console.log("----------");

// Given nested arrays, print the numbers from 1 to 9
let numbers5 = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12, [13, 14, 15]]]]];

console.log("Exercise 5");
console.log("----------");
for (let item of numbers5) {
  if (Array.isArray(item)) {
    for (let nestedNumber of item) {
      if (Array.isArray(nestedNumber)) {
        for (let nestedNestedNumber of nestedNumber) {
          console.log(nestedNestedNumber);
        }
      } else {
        console.log(nestedNumber);
      }
    }
  } else {
    console.log(item);
  }
}

function arrayExplorer(array) {
    for (let item of array) {
        if (Array.isArray(item)) {
            arrayExplorer(item);
        } else {
            console.log(item);
        }
    }
}

arrayExplorer(numbers5);

console.log("----------");
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

// function looper(array) {
//     for (let item of array) {
//         if (Array.isArray(item)) {
//             looper(item);
//         } else {
//             console.log(item);
//         }
//     }
// }

// looper(numbers2);
