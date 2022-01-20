/**
 * concat()
 * We can use concat() to merge 2 or more arrays
 */

let array1 = ["a", "b", "c"];
let array2 = ["d", "e", "f"];
let array3 = ["g", "h", "i"];

// array1.push(array2);
// console.log(array1);
let first2Arrays = array1.concat(array2);
console.log("The first 2 arrays merged together:", first2Arrays);

let all3Arrays = array1.concat(array2, array3);
console.log("All arrays merged together:", all3Arrays);