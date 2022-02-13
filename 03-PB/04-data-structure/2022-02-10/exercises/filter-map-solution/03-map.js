/**
 * Given an array of numbers, create a new array where:
 * - each number is multiplied by 3
 *
 * For example:
 *
 * [1, 2, 3, 4] => [3, 6, 9, 12]
 *
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
  numbers.map((number) => {
    return number * 3;
  })
);
