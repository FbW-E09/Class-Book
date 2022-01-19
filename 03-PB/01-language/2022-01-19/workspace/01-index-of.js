/**
 * indexOf()
 */

const animals = ["dog", "cat", "giraffe", "mouse", "gorilla"];

console.log("The mouse is at index:", animals.indexOf("mouse"));
console.log("The gorilla is at index:", animals.indexOf("gorilla"));
console.log("The monkey is at index:", animals.indexOf("monkey"));

console.log(
  "At what index is the monkey?",
  animals.indexOf("monkey") === -1
    ? "There are no monkyes"
    : animals.indexOf("monkey")
);


const people = ["mark", "jen", "mary", "philip", "jen", "jen", "joseph"];

console.log("Give me the first index with jen", people.indexOf("jen"));
console.log("Give me the first index with jen after index 3", people.indexOf("jen", 3));

// let nestedArray = [[1, 2, 3], [4, 5, 6]];
// console.log(nestedArray.indexOf([1, 2, 3]));


// find the index of an element starting from the end

people.lastIndexOf('jen');