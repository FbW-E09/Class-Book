/**
 * Give an array of strings, create a new array where:
 * - there are only words that DO NOT start with a vowel
 *
 * Example:
 *
 * ["table", "angry", "bird", "apple", "energy"] => ["table", "bird"]
 */

 let words = ["table", "angry", "bird", "apple", "energy"];
 console.log(
   words.filter((string) => {
     let vowels = "aeiou";
     return ! vowels.includes(string[0].toLowerCase());
   })
 );
 