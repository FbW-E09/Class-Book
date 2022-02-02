let animals = ["cat", "dog", "mouse", "cat", "monkey", "dog"];

let noDuplicates = [];

console.log("Does animals contain a dog?", animals.indexOf("dog") !== -1);
console.log("Does animals contain a giraffe?", animals.indexOf("giraffe") !== -1);
console.log("Does animals contain a dog?", animals.includes("dog"));
console.log("Does animals contain a dog?", animals.includes("giraffe"));

/**
 * 1. go through the array animals 1 element at a time
 * 2. check if the noDuplicates array includes the current animal
 * 3. if it doesn't include it, push the current animal to the noDuplicates array
 * 4. otherwise, don't do anything
 */

let inputArray = [1, 2, 3, 4];
let outputArray = [];

for (let i = 0; i < inputArray.length; i++) {

    outputArray.push(inputArray[i]);

}
