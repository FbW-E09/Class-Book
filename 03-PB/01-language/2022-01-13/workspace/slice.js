let string = "hello world";

console.log(string.substring(string.length - 3));
console.log(string.slice(string.length - 3));


// Declare a variable and assign the value "the quick brown fox" (all in lower case). 
// Capitalize the first letter of that string. Print the result to the console.

let sentence = "the quick brown fox";
console.log(sentence.replace(sentence[0], sentence[0].toUpperCase()));