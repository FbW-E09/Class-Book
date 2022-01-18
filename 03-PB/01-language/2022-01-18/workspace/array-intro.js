// array

/**
 * Arrays are collection of values
 * They are different from basic data types we've seen so far because they can contain more than 1 value
 * and also more than 1 data type
 */

// an array containing 5 numbers
const myArray = [1, 2, 3, 4, 5];

// an array containing 1 number
const myArray2 = [12345];

// an array containing 6 numbers
let evenNumbers = [2, 4, 6, 8, 10, 12];

// an array containing 5 strings
let vowels = ["a", "e", "i", "o", "u"];

// an array containing different data types, even another array
let mixedArray = [true, 2, 4, "a", "pizza", null, NaN, [1, 2, 3]];

// reading a value from an array
/**
 * The syntax to read a value from an array is the same as the one for strings
 *
 * - We write the variable name containing the array and the index of the item we're interested in
 * inside square brackets
 *
 */
console.log(evenNumbers[1]); // 1

/**
 * Like strings, arrays index starts at 0 and the last element in an array is at index array.length - 1
 * Like strings, also arrays have the length property that we can access with the dot notation
 */

// get the last element of an array
console.log(vowels[vowels.length - 1]);
console.log(myArray.length); // 5
console.log(evenNumbers.length); // 6
console.log(mixedArray.length); // 8
console.log(mixedArray[7].length); //
console.log(mixedArray[mixedArray.length - 1].length); //

// deeply nested array: it's possible
let nestedArray = [[[[[[[[[[[[[["hey"]]]]]]]]]]]]]];
// to get access to a nested array, we have to use a chain of indexes one next to the other
console.log(nestedArray[0][0][0][0][0][0][0][0][0][0][0][0][0]);

// a 2 dimensional array
/* 
    It's easier if we display it as a table, but for JavaScript doesn't make a difference

        let table = [
                [0], [1], [2],
                [3], [4], [5],
                [6], [7], [8]
            ];
*/

let table = [[0], [1], [2], [3], [4], [5], [6], [7], [8]];

console.log(table[0][0]); // 0
console.log(table[4][0]); // 4


// we can access an item calculating the index with an arithmetic operation
let letters = ["a", "b", "c", "d", "e"];
console.log(letters[2 + 1]); // "d"

// we can store a number in a variable and use that variable as an index
let index = 4;
console.log(letters[index]); // "e"


// differences between strings and arrays

/**
 * Strings in JavaScript are immutable.
 * It means that once a string is created, it's not possible to modify it
 */
let name = "carlo";
/**
 * Trying to change the first character in a string doesn't have any effect.
 * When we print the string again, we will still see the original string
 */
name[0] = "C";
console.log(name);

/**
 * Using string methods such as .toUpperCase() is a bit different than modifying it: what JavaScript does
 * is creating a copy of the original string, modifying it according to the method and saving it to a new variable.
 * The original string is still safe and untoched.
 */
let upperCaseName = name.toUpperCase();
console.log(upperCaseName);
console.log(name[0]);

/**
 * Arrays are very different from strings in this regard
 * Using the bracket notation, we can replace the elements inside of an array as we want
 */
let dinner = ["pizza", "beer", "ice cream"];
dinner[1] = "wine";
dinner[2] = "tiramisu";
console.log(dinner);

/**
 * Even if we define a constant array, the content of the array can still be modified.
 * 
 */
const breakfast = ["eggs", "orange juice", "coffee"];
breakfast[0] = "avocado toast";

/**
 * What's not possible to do is changing the variable: if it was created with an array, it will always
 * contain that array. We can not, for example, assign a string to it. That would be an error.
 */
// breakfast = "this is my breakfast"; // this is not possible because breakfast is const

console.log(breakfast);

breakfast[3] = "milk";
console.log(breakfast);

breakfast[breakfast.length] = "apple";
console.log(breakfast);
