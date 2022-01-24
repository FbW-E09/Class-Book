let hour = 9;

if (hour <= 8) {
  console.log("there's still time");
} else if (hour < 9) {
  console.log("time to get ready");
} else {
  console.log("class started");
}

// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99).
// Print true if either of them are in the range.

let a = 200;
let b = 66;

// a should be larger or equal than 50 -> a >= 50
// a should be smaller or equal than 99 -> a <= 99
// a >= 50 && a <= 99

// b should be larger or equal than 50 -> b >= 50
// b should be smaller or equal than 99 -> b <= 99
// b >= 50 && b <= 99

// (a >= 50 && a <= 99) || (b >= 50 && b <= 99)

if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99)) {
  console.log(true);
} else {
  console.log(false);
}

// if (a >= 50 && a <= 99) {
//   console.log(true);
// } else if (b >= 50 && b <= 99) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Check if three given integer values are in the range 50 to 99 (inclusive).
// Print true if one or more of them are in the range.

let c = 78;
let isAInRange = a >= 50 && a <= 99;
let isBInRange = b >= 50 && b <= 99;
let isCInRange = c >= 50 && c <= 99;

if (isAInRange || isBInRange || isCInRange) {
  console.log(true);
} else {
  console.log(false);
}

// Create a new string adding "Py" in front of a given string.
// If the given string begins with "Py" then print the given string.

let prefix = "Py";
let givenString = "Pyblablabla";
let resultString = prefix + givenString;

// check if a string starts with the string "Py"
/**
 * (string[0] === "P" && string[1] === "y")
 * (string.substring(0, 2) === "Py")
 * (string.startsWith("Py"))
 */
if (givenString.substring(0, 2) === "Py") {
  console.log(givenString);
} else {
  console.log(resultString);
}

/**
 * BONUS CHALLENGE: Make a variable for firstName and age and give each variable values.
 * Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child".
 * If the age is equal to or more than 13 and less than 20, print "firstName is a teenager".
 * If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult".
 * If none of these conditions apply, print "firstName is a adult".
 */

let name = "ada";
let age = 25;

if (age < 13) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age < 20) {
  console.log(`${name} is a teenager`);
} else if (age >= 20 && age < 30) {
  console.log(`${name} is a young adult`);
} else {
  console.log(`${name} is a  adult`);
}

// if (age < 13) {
//    console.log(`${name} is a child`)
// } else if (age < 20) {
//    console.log(`${name} is a teenager`)
// } else if (age < 30) {
//    console.log(`${name} is a young adult`)
// } else {
//    console.log(`${name} is an adult`)
// }

// Check whether one of two integers is a multiple of 7 or 11. If so, print true.

let n = 49;
// to test if a number A is multiple of number B, we calculate the remainder of A % B.
// If the result is 0, A is a multiple of B
// If the result is not 0, A is a not multiple of B

// n % 7

if (n % 7 === 0 || n % 11 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// Extra challenge:

// The record store you work at just received the sales report from this year.
// The section with pop records sold 879 albums.
// The section with punk records sold 999 albums.
// The techno section sold 600 albums.

// Create 3 variables to store the sales of each department.
// Write a program that prints to the console the name of the best selling section and how many sales did it have.
// (
// - Test the program also with different values.
// - we can assume that the 3 sales have always different values
// )

let pop = 1234;
let punk = 2999;
let techno = 3600;
let metal = 1900;

// did pop albums sell more than punk and techno? pop > punk && pop > techno
// did punk albums sell more than pop and techno? punk > pop && punk > techno

// if (pop > punk && pop > techno && pop > metal) {
//   console.log("pop is the best selling genre");
// } else if (punk > pop && punk > techno && punk > metal) {
//   console.log("punk is the best selling genre");
// } else if (techno > pop && techno > punk && techno > metal) {
//   console.log("techno is the best selling genre");
// } else {
//   console.log("metal is the best selling genre");
// }

let max = pop;
let bestSeller = "pop";

if (punk > max) {
    max = punk; 
    bestSeller = "punk";
}

if (techno > max) {
    max = techno; 
    bestSeller = "techno";
}

if (metal > max) {
    max = metal; 
    bestSeller = "metal";
}

console.log(`${bestSeller} sold the most with ${max} sales`);