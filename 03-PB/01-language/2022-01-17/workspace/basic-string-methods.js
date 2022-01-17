// Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
let sentence = "I can walk in the park all day!";
console.log("q1", sentence.substring(18, 22));

// Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.

const helloWorld = "Hello World";
console.log("q2", helloWorld.toUpperCase());

// Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
const string3 = "Hello Earthling";
console.log("q3", string3.toLowerCase());

// Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
const string4 = "JavaScript";
console.log("q4", string4.substring(3, 6));
console.log("q4", string4.slice(3, 6));

// Check if the sentence "nice shoes" contains the letter l or n.
const string5 = "nice shoes";
console.log("q5, does the string contain l?", string5.includes("l"));
console.log("q5, does the string contain n?", string5.includes("n"));

// Create a new string from a given string with the first character of the given string added at the front and back, 
// i.e., expected output: Bananas => BBananasB

const string6 = "Bananas";
// const string6 = "apples";
const firstLetter = string6[0];
console.log(firstLetter + string6 + firstLetter);

// Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, 
// i.e., expected output: Scritch => tchScritchtch
const string7 = "apple";
// const last3Characters = "tch"; // not good solution
// const last3Characters = string7.substring(4, 7); // slightly better, but still not a great solution. It works only for strings of 7 characters
const last3Characters = string7.substring(string7.length - 3); // right solution
console.log(last3Characters + string7 + last3Characters);


// Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2,
// i.e., expected output: BoogieWoogie => eoogieWoogiB
const string8 = "BoogieWoogie";
// const firstCharacter = string8.substring(0, 1);
const firstCharacter = string8[0];
const lastCharacter = string8[string8.length - 1];
const centralString = string8.substring(1, string8.length - 1); // => oogieWoogi
const swappedString = lastCharacter + centralString + firstCharacter;
// const swappedString = `${lastCharacter}${centralString}${firstCharacter}`;
console.log(swappedString);


// Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".
const firstName = "Maria";
const city = "Berlin";
const job = "teacher";
console.log(`My name is ${firstName}. I live in ${city} and I am a ${job}.`);
console.log("My name is " + firstName + ". I live in " + city + " and I am a " + job + ".");

// Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

// concatenation
// concatenate

const string10 = "the quick brown fox";
const firstLetterUppercase = string10[0].toUpperCase();
const restOfString = string10.substring(1);

const result = string10.replace(string10[0], string10[0].toUpperCase());
console.log(string10.replace("t", "T")); // not a good solution
console.log(firstLetterUppercase + restOfString);
console.log(result);