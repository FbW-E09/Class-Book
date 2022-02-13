/**
 * Give an array of strings, create a new array where:
 * - there are only strings longer than 4 characters 
 *
 * Example:
 *
 * ["table", "mug", "hey", "shower"] => ["table", "shower"]
 */

 let words = ["table", "mug", "hey", "shower"];
 console.log(words.filter((string) => string.length > 4));
 