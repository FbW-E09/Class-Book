/**
 * Give an array of numbers, create a new array where:
 * - we have only positive numbers
 *
 * Example:
 *
 * [0, -1, 12, 3, -2] => [0, 12, 3]
 */

let numbers = [1, 2, 8, -1, 9, -4, -100, 8];
console.log(numbers.filter((number) => number >= 0));
