/**
 * Give an array of numbers, find the first item that is a multiple of 7
 *
 * Example:
 *
 * [1, 2, 14, 3, 21, 28] => 14 
 */

let numbers = [1, 2, 14, 3, 21, 28];

function isMultipleOf7(number) {
    return number % 7 === 0;
}

console.log(numbers.find(isMultipleOf7));