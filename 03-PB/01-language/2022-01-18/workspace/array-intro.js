// array

const myArray = [1, 2, 3, 4, 5];
const myArray2 = [12345];

let evenNumbers = [2, 4, 6, 8, 10, 12];
let vowels = ["a", "e", "i", "o", "u"];
let mixedArray = [true, 2, 4, "a", "pizza", null, NaN, [1, 2, 3]];


// reading a value from an array
console.log(evenNumbers[1]); // 1

// get the last element of an array
console.log(vowels[vowels.length - 1]);
console.log(myArray.length); // 5
console.log(evenNumbers.length); // 6
console.log(mixedArray.length); // 8
console.log(mixedArray[7].length); // 
console.log(mixedArray[mixedArray.length - 1].length); // 


let nestedArray = [[[[[[[[[[[[[["hey"]]]]]]]]]]]]]]
console.log(nestedArray[0][0][0][0][0][0][0][0][0][0][0][0][0]);

let table = [
                [0], [1], [2],
                [3], [4], [5],
                [6], [7], [8]
            ];

console.log(table[0][0]); // 
console.log(table[4][0]); // 

console.log(table[0][0] + table[4][0]);


let letters = ["a", "b", "c", "d", "e"];

console.log(letters[2 + 1]); // "d"


let index = 4;
console.log(letters[index]); // "e"

let name = "carlo";
let upperCaseName = name.toUpperCase();
name[0] = "C";

console.log(name);
console.log(upperCaseName);
console.log(name[0]);


let dinner = ["pizza", "beer", "ice cream"];
dinner[1] = "wine";
dinner[2] = "tiramisu";
console.log(dinner);


const breakfast = ["eggs", "orange juice", "coffee"];
breakfast[0] = "avocado toast";

// breakfast = "this is my breakfast"; // this is not possible because breakfast is const

console.log(breakfast);

breakfast[3] = "milk";
console.log(breakfast);

breakfast[breakfast.length] = "apple";
console.log(breakfast);