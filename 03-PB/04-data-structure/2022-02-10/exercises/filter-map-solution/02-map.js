/**
 * Given an array of numbers, create a new array where:
 * - each even numbers is doubled
 * - each odd number is left as it is 
 * 
 * For example:
 * 
 * [1, 2, 3, 4] => [1, 4, 3, 8]
 * 
 */
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

 console.log(numbers.map((number) => {
     if (number % 2 === 0) {
         return number * 2;
     } else {
         return number;
     }
 }))
 