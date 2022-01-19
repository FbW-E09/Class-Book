const animals = ["dog", "cat", "mouse"];

// let's add an element at the end of the array
animals[3] = "monkey";
console.log(animals);

// if I don't know the length of the array, I can add an extra element like this

animals[animals.length - 1] = "elephant";
console.log(animals);

/**
 * push()
 * The push() method adds 1 or more elements to the end of the array.
 * 
 * The method also returns (gives you back) the new length of the array after adding the elements.
 */

animals.push("crow");
console.log("The animals now are:", animals);

animals.push("pig", "horse", "monkey");
console.log("The animals now are:", animals);

let newLength = animals.push("koala");
console.log(`The array now contains ${newLength} elements:`, animals);

newLength = animals.push("giraffe");
console.log(`The array now contains ${newLength} elements:`, animals);

let string = "hello";
let uppercaseString = string.toUpperCase();
console.log(string);


let numbers = [1, 2, 3]; // length is 3

numbers.push([4, 5, 6], [7, 8], 9);
console.log(`The array numbers contains ${numbers.length} element:`, numbers);


/**
 * pop()
 * 
 * pop() removes the last element from an array and returns (gives you back) the element that it just removed
 */

const objects = ["pen", "pencil", "cup", "bottle", "table"];
objects.pop();

console.log("Now objects contain:", objects);
objects.pop();
objects.pop();
console.log("Now objects contain:", objects);

const poppedElement = objects.pop();
console.log(`We just removed a ${poppedElement} from the array`);


/**
 * unshift()
 * Like push(), but it adds the element at the beginning
 * It returns (gives back) the new length of the array
 */

let letters = ["a", "b", "c"];
let newLettersLength = letters.unshift("z");
console.log("The array letters is now:", letters);
console.log(`The array has now ${newLettersLength} elements`);

/**
 * shift()
 * Like pop(), but it removes the element from the beginning
 * It returns (gives back) the element it just removed
 */

let shiftedElement = letters.shift();
console.log("We just removed the element:", shiftedElement);
console.log("The array letters is now:", letters);