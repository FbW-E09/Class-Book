/**
 * Given an array of numbers, create a new array where:
 * - each even numbers is multiplied by 100
 * - each odd number is replaced by -1
 * 
 * For example:
 * 
 * [1, 2, 3, 4] => [-1, 200, -1, 400]
 * 
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

console.log(numbers.map((number) => {
    if (number % 2 === 0) {
        return number * 100;
    } else {
        return -1;
    }
}))

