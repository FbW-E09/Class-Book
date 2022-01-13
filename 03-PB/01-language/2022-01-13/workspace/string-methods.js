/*
() parenthesis
[] square brackets
{} curly brackets or curly braces
*/ 
const sentence = 'The quick brown fox jumps over the lazy giraffe.';
const upperCaseSentence = sentence.toUpperCase();
console.log(upperCaseSentence);
console.log(sentence);


const message = "HELLO";
const lowerCaseMessage = message.toLowerCase(); 
console.log(lowerCaseMessage);


/* 
substring

*/

console.log(sentence.substring(0, 3));
console.log(sentence.substring(16, 19));
console.log(sentence.substring(16, sentence.length)); // from position 16 until the end
console.log(sentence.substring(16)); // from position 16 until the end
console.log(sentence.substring(sentence.length - 4)); // last 4 characters of the string


/* trim */

let stringsWithSpace = "    Hello World  ";
console.log(stringsWithSpace);
console.log(stringsWithSpace.trim());


/* includes */

console.log(sentence.includes("fox"));
console.log(sentence.includes("cat"));
console.log(sentence.includes("c"));
console.log(sentence.includes(" "));


/* replace */

console.log(sentence.replace("fox", "cat"));
console.log(sentence.replace("quick", "slow"));

// replaceAll only with node 15
// console.log(sentence.replaceAll(" ", "_"));


// let result = sentence.replace("fox", "cat").replace("giraffe", "monkey").toUpperCase();

// console.log(result);

// let result = sentence.includes("fox");

let result = sentence.includes("dog") ? sentence.replace("fox", "cat") : sentence;

console.log(result);