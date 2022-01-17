// Declare a variable and assign a string as its value. Make sure the string is at least 6 characters long. Print the variable to the console.
const string = "HelloWorld";
/*
1st -> h -> string[0]
2nd -> e -> string[1]
3rd -> l -> string[2]
4th -> l -> string[3]
5th -> o -> string[4]
6th ->   -> string[5]
...
*/

// Access the 2nd and 6th elements of the string using index notation. Print the elements to the console.
console.log(string[1], string[5]);

// Declare a variable called name and assign a string as its value.

const name = "John";

// Declare a variable called age and assign a number as its value.

const age = 24;

// Declare a variable called year and assign a number as its value.

const year = 2022;

// Using your declared variables, print a string to the console. For example, "Basem is 37 in 2020".

console.log(`${name} is ${age} in ${year}`);

// Declare a variable called isMarried and assign it a boolean value.
const isMarried = false;

// Print a string to the console, indicating whether or not your person is married. For example, "Basem is married: true"
console.log(`${name} is married: ${isMarried}`);

// condition ? execute this if true : otherwise execute this

// depending on the isMarried variable, print a message like: 
// - Basem is married 
// - Basem is unmarried
const message1 = isMarried ? `${name} is married` : `${name} is unmarried`;
const message2 = `${name} is ${isMarried ? "married" : "unmarried"}`; 
const message3 = `${name} is ${isMarried ? "" : "un"}married`; 
console.log(message1);
console.log(message2);
console.log(message3);

// Declare a variable called programmingLanguage and assign "JavaScript" as its value. Declare a variable called isFun and give it a value of true. Print "JavaScript is fun: true" to the console, using your declared variables.

const programmingLanguage = "JavaScript";
const isFun = true;
console.log(`JavaScript is fun: ${isFun}`)

// Print the J and S of "JavaScript" from the variable programmingLanguage to the console.
console.log(programmingLanguage[0], programmingLanguage[4]);

// Print the length of the string "JavaScript" to the console.
console.log(programmingLanguage.length);