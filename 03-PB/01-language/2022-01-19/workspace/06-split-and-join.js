/**
 * .join()
 * Transform an array into a string.
 * By default, the elements of the arrays will be connected by a "comma".
 * 
 * We can specify a different option, for example an empty string or other symbols
 * 
 * - array.join("");
 * - array.join("-");
 * - array.join("_");
 */
let letters = ["h", "e", "l", "l", "o"];
let joinedLetters = letters.join();

console.log("The joined letters are:", joinedLetters);

let greeting = letters.join("");
console.log("The joined letters are:", greeting);
console.log(letters.join("abc"))

// // we can transform a string into an array using .split()

let name = "carlo";
let arrayName = name.split("");
console.log(arrayName);

// // we can split according to a specific character
let cssProperty = "background-color";
let arrayCSSProperty = cssProperty.split('-');
console.log(arrayCSSProperty);