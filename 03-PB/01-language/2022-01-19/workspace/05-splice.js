/**
 * splice()
 * This method changes the original array by removing elements from it:
 *
 * - we can specify the starting index
 * - we can also specify how many elements do we want to remove
 *
 * For example, to remove 3 elements starting at index 1, we would write:
 * array.splice(1, 3)
 *
 * We modify the original array.
 * As a result, we get another array containing the elements we removed.
 */
let animals = ["cat", "monkey", "dog", "giraffe", "elephant"];

// let splicedAnimals = animals.splice(1);
// console.log(splicedAnimals); ["monkey", "dog", "giraffe", "elephant"]
// console.log(animals); // ["cat"]

// let's remove 3 elements starting at position 1
// let splicedAnimals = animals.splice(1, 3);
// console.log("Spliced animals are", splicedAnimals); // ["monkey", "dog", "giraffe"]
// console.log("The original animals are now", animals); // ["cat", "elephant"]

// let's remove 0 elements starting at position 1
// let splicedAnimals = animals.splice(1, 0);
// console.log("Spliced animals are", splicedAnimals); // ["monkey", "dog", "giraffe"]
// console.log("The original animals are now", animals); // ["cat", "elephant"]

// let's remove dog and giraffe from the original array
let splicedAnimals = animals.splice(2, 2);
console.log("Spliced animals are", splicedAnimals); // ["dog", "giraffe"]
console.log("The original animals are now", animals); // ["cat", "monkey", "elephant"]

const months = ["Jan", "March", "April", "June"];

// let's add Feb between Jan and March
months.splice(1, 0, "Feb");
console.log(months);
// [ 'Jan', 'Feb', 'March', 'April', 'June' ]

// let's add May after April
// [ 'Jan', 'Feb', 'March', 'April', 'May', 'June' ]
months.splice(4, 0, "May");
console.log(months);

let numbers = [1, 2, 3, 7, 8, 9];

// let's add 4, 5 and 6 in their right place
numbers.splice(3, 0, 4, 5, 6);
console.log(numbers);


let letters = ["a", "b", "c", "x", "y", "z", "g", "h", "i"]

// let's remove x, y and z, and put the correct ones: d, e, f

let splicedLetters = letters.splice(3, 3, "d", "e", "f");
console.log(letters);

// let's put the letters we removed at the end of the original array
letters.push(splicedLetters);
console.log(letters);

