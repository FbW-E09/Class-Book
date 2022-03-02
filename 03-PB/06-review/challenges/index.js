function reverseString(str) {
  return str.split("").reverse().join("");

  //   let revString = '';
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     revString = revString + str[i];
  //   }
  //   return revString;
}

// console.log(reverseString('hello'));

function isPalindrome(str) {
  //   let revString = reverseString(str);
  //   const revString = str.split('').reverse().join('');
  return reverseString(str) === str;
}

// console.log(isPalindrome('racecar'));

function reverseInt(int) {
  const revString = int.toString().split("").reverse().join("");
  return +revString;
}

// console.log(reverseInt(521));

function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");
}

// console.log(capitalizeLetters('i love javascript'));

function createCharMap(str) {
  const charMap = {};
  str.split("").forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  return charMap;
}

function maxCharacter(str) {
  const charMap = createCharMap(str);
  let maxNum = 0;
  let maxChar = "";

  for (const char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// console.log(maxCharacter('javascript')); // a
// console.log(createCharMap('javascript'));

// ```javascript
// // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
// ```;

function fizzBuzz() {
  const result = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

// console.log(fizzBuzz());

// Return the longest word of a string
// Part  1 - Return a single longest word

// Part  2 - Return an array and include multiple words if they have the same length
// Part  3 - Only return an array if multiple words, otherwise return a string
// ex:

function longestWord(str) {
  // Part one
  // let wordArray = str.split(' ');
  // let maxLength = 0;
  // let result = '';

  // for (let i = 0; i < wordArray.length; i++) {
  //   const word = wordArray[i];
  //   if (word.length > maxLength) {
  //     maxLength = word.length;
  //     result = word;
  //   }
  // }
  // return result;

  // Part 2
  // Create an array of words
  const wordArr = str.toLowerCase().split(" ");
  // Sort word array so largest word is in front (descending order)
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  // if any two words are the same length we want them in this array
  const longestWord = sorted.filter((word) => word.length === sorted[0].length);

  // Part 3
  // If there's only one word in the filtered (longestWord arrray) return only that string
  if (longestWord.length === 1) {
    return longestWord[0];
  } else {
    return longestWord;
  }
}

// console.log(longestWord('Hi there, my name is Brad'));
console.log(longestWord("My name is Brad"));
console.log(longestWord("Brad"));

let products = [
  {
    type: "t-shirt",
    price: 9.99,
    color: "red",
  },
  {
    type: "socks",
    price: 4.99,
    color: "blue",
  },
  {
    type: "jeans",
    price: 44.99,
    color: "black",
  },
  {
    type: "t-shirt",
    price: 14.99,
    color: "green",
  },
  {
    type: "t-shirt",
    price: 22.99,
    color: "blue",
  },
  {
    type: "jeans",
    price: 59.99,
    color: "blue",
  },
  {
    type: "skirt",
    price: 24.99,
    color: "yellow",
  },
  {
    type: "socks",
    price: 14.99,
    color: "yellow",
  },
];
const productTypesSet = [...new Set(products.map((product) => product.type))];
console.log(productTypesSet);

const groupByType = products.reduce((acc, product) => {
  acc[product.type] = (acc[product.type] || []).concat(product);
  return acc;
}, {});

console.log(groupByType);

const groupByType2 = products.reduce((acc, product) => {
  if (!acc[product.type]) {
    acc[product.type] = [];
  }
  acc[product.type].push(product);
  return acc;
}, {});

console.log(groupByType2);
