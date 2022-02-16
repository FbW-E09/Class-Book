let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// add all the numbers inside an array and return the total as a number

function sumNumbers(accumulator, current) {
  console.log("accumulator", accumulator);
  console.log("current", current);
  console.log("------");
  return accumulator + current;
}
let sum = numbers.reduce(sumNumbers, 0);
console.log("sum", sum);

let sum2 = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("sum2", sum2);

let total = 0;
for (let number of numbers) {
  total += number;
}

// we have an array of numbers and in return I want a single string with all the numbers separated by a dash -
// output: "1 - 2 - 3 - 4 ..."

function separateNumbers(accumulator, currentItem, index) {
  if (index === 0) {
    return `${currentItem}`;
  } else {
    return `${accumulator} - ${currentItem}`;
  }
}
let string2 = numbers.reduce(separateNumbers, "");

let numbers2 = [199, 24, 1845, 129, 1024, 0, 12];
let string3 = numbers2.reduce(separateNumbers, "");

console.log(string3);

let string = numbers.reduce((accumulator, currentItem, index) => {
  if (index === 0) {
    return `${currentItem}`;
  } else {
    return `${accumulator} - ${currentItem}`;
  }
}, "");
console.log(string);

let grades = [2, 7, 8, 1, 6];

/**
 * Given an array of numbers, calculate the average of those numbers
 *
 * average = (2 + 7 + 8 + 1 + 6) / 5
 */

function average(total, currentNumber, index, array) {
  let length = array.length;
  if (index === length - 1) {
    return (total + currentNumber) / length;
  } else {
    return total + currentNumber;
  }
}

let averageResult = grades.reduce(average, 0);

let averageResult2 = grades.reduce(
  (total, currentNumber, index, array) => total + currentNumber / array.length,
  0
);
console.log("average result:", averageResult);
console.log("average result2:", averageResult2);

let grades3 = [
  {
    subject: "Math",
    grade: 3,
  },
  {
    subject: "History",
    grade: 6,
  },
  {
    subject: "Literature",
    grade: 8,
  },
  {
    subject: "Geography",
    grade: 2,
  },
];

// calculate the average of all the grades, get a number in result

let average3 = grades3.reduce(
  (total, currentItem, index, array) =>
    total + currentItem.grade / array.length,
  0
);

console.log(average3);

let string4 = "hello";

function onlyVowels(finalString, character) {
  let vowels = "aeiou";
  if (vowels.includes(character)) {
    let repeatedString = finalString;
    for (let i = 0; i < 50; i++) {
      repeatedString += character;
    }
    return repeatedString;
  } else {
    return finalString;
  }
}

let stringOnlyVowels = string4.split("").reduce(onlyVowels, "");
console.log(stringOnlyVowels);
