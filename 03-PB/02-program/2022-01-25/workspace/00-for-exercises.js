// 100 200 300 400 500 600 700 800 900 1000
// 1 2 3 4 5 6 7 8 9 10

let step = 100;
for (let i = 1; i <= 10; i++) {
  console.log(i * step);
}

for (let i = 100; i <= 1000; i += 100) {
  console.log(i);
}

const starter = 100;
for (let i = 1; i <= 1000 / starter; i++) {
  console.log(starter * i);
}

// Sum of Multiples: Write a program to add the multiples of 3 and 5 under 1000.
// 3, 5, 6, 9, 12, 15, 18, 20, 21, 24, 25, 28, 30, 33, 35, 36...
// 15, 30, 45, 60, 75, 90...

let sumOfMultiples3And5 = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // i % 15 === 0
    sumOfMultiples3And5 += i; // sumOfMultiples3And5 = sumOfMultiples3And5 + i
  }
}
console.log(sumOfMultiples3And5);

let total = 0;
for (let i = 0; i <= 3; i++) {
  total += i; // total = total + i
  console.log("i", i);
  console.log("total", total);
}

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

/**
 * i * j
 * -----
 * 1 * 1
 * 1 * 2
 * 1 * 3
 * ...
 * 1 * 10
 *
 * 2 * 1
 * 2 * 2
 * 2 * 3
 * ...
 * 2 * 10
 *
 * 3 * 1
 * ...
 *
 * 10 * 1
 * 10 * 2
 * 10 * 3
 * ...
 * 10 * 10
 */

for (let i = 1; i <= 10; i++) {
  console.log("");
  console.log("Multiplication table of:", i);
  console.log("---------------------------");
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} =`, i * j);
  }
}

// 1 1 1 2 2 2 3 3 3 4 4 4

// for (let i = 1; i <= 4; i++) {
//     console.log(i);
//     console.log(i);
//     console.log(i);
// }

// isPalindrome. Write a program to check whether a word is a palindrome or not.
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat
// radar
// red|der
// redder

// world === dlrow ? false
// redder === redder ? true

let word = "redder";
let lowerCaseWord = word.toLowerCase();
let reversedWord = lowerCaseWord.split("").reverse().join("");

if (lowerCaseWord === reversedWord) {
  console.log(`${word} is a palyndrome`);
} else {
  console.log(`${word} is NOT a palyndrome`);
}

let isPalindrome = true;
for (let i = 0; i < Math.floor(lowerCaseWord.length / 2); i++) {
  // console.log(i);
  // console.log("left side", lowerCaseWord[i]);
  // console.log("right side", lowerCaseWord[lowerCaseWord.length - 1 - i]);
  if (lowerCaseWord[i] !== lowerCaseWord[lowerCaseWord.length - 1 - i]) {
    isPalindrome = false;
  }
}

if (isPalindrome) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} is NOT a palindrome`);
}



