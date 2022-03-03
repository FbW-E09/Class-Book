//  CHALLENGE 1: REVERSE A STRING
function reverseString(str) {
  // SOLUTION 1
  return str.split("").reverse().join("");
  //////////////////////////
  // SOLUTION 2
  //   let revString = '';
  //   for(let i = str.length - 1; i >= 0; i--) {
  //     revString = revString + str[i];
  //   }
  // return revString;
  /////////////////////////
  // SOLUTION 3
  //   let revString = '';
  //   for (let i = 0; i <= str.length - 1; i++) {
  //     revString = str[i] + revString;
  //   }
  //     return revString;
  ////////////////////////
  // SOLUTION 4
  //   let revString = '';
  //   for (let char of str) {
  //     revString = char + revString;
  //   }
  //   return revString;
}

console.log(reverseString("hello")); // ==  === 'olleh'

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  // SOLUTION 1
  const revString = str.split("").reverse().join("");

  return revString === str;

  ///////////////////////
  // SOLUTION 2
  //   let isPali = true;
  //   let caseStr = str.toLowerCase();
  //   let arr = caseStr.split('');
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] !== arr[arr.length - 1 - i]) {
  //       isPali = false;
  //       break;
  //     }
  //   }
  //   return isPali;
}
console.log(isPalindrome("racecar")); // === true
console.log(isPalindrome("hello")); // === false
///////////////////////////////////////////////////////

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int.toString().split("").reverse().join("");
  return parseInt(revString) * Math.sign(int);
}

console.log(reverseInt(521)); // == 125
console.log(reverseInt(-521)); // == -125

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
  // SOLUTION 1
  const strArr = str.toLowerCase().split(" ");

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }

  return strArr.join(" ");

  /////////////////////////////
  // SOLUTION 2
  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.substr(1))
  //   .join(' ');

  /////////////////////////////

  //   return str.replace(/\b[a-z]/gi, function (char) {
  //     return char.toUpperCase();
  //   });
}

console.log(capitalizeLetters("i love javascript")); // 'I Love Javascript'

// CHALLENGE 5: MAX CHARACTER

// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";
  str.split("").forEach(function (char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(maxCharacter("javascript")); // === 'a'

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
const fizzBuzz = () => {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) result.push("FizzBuzz");
    else if (i % 3 == 0) result.push("Fizz");
    else if (i % 5 == 0) result.push("Buzz");
    else result.push(i);
  }
  return result;
};

console.log(fizzBuzz());

// CHALLENGE 7: LONGEST WORD

function longestWord(sen) {
  // SOLUTION 1
  //   let wordArray = sen.split(' ');
  //   let maxLength = 0;
  //   let result = '';
  //   for (let i = 0; i < wordArray.length; i++) {
  //     if (wordArray[i].length > maxLength) {
  //       maxLength = wordArray[i].length;
  //       result = wordArray[i];
  //     }
  //   }
  //   return result;

  //   // SOLUTION 2
  // Create filtered array
  const wordArr = sen.toLowerCase().split(" ");
  // To only include nums/letters
  //    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // Sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  // If multiple words, put into array
  const longestWordArr = sorted.filter(
    (word) => word.length === sorted[0].length
  );
  // Check if more than one array val
  if (longestWordArr.length === 1) {
    // Return the word
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

console.log(longestWord("Hi there, my name is Brad")); // === 'there,'
console.log(longestWord("My name is Brad")); // === ['name', 'brad']
console.log(longestWord("Brad")); // == 'brad'

// CHALLENGE 8: ARRAY CHUNKING
function chunkArray(arr, len) {
  // SOLUTION 1

  // // Init chunked arr
  // const chunkedArr = [];
  // // Set index
  // let i = 0;

  // // Loop while index is less than the array length
  // while (i < arr.length) {
  //   // Slice out from the index to the index + the chunk length nd push on to the chunked array
  //   chunkedArr.push(arr.slice(i, i + len));
  //   // Increment by chunk length
  //   i += len;
  // }

  // return chunkedArr;

  // SOLUTION 2

  // Init chunked arr
  const chunkedArr = [];

  // Loop through arr
  arr.forEach((val) => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); // === [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2)); // === [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]
// CHALLENGE 9: FLATTEN ARRAY
function flattenArray(arrays) {
  // SOLUTION 1
  return arrays.reduce((a, b) => a.concat(b));
  // SOLUTION 2
  // return [].concat.apply([], arrays);
  // SOLUTION 3
  // return [].concat(...arrays);
  // SOLUTION 4
  // Infinity is the max depth to flatten
  //   return arrays.flat(Infinity);
}
console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]])); // === [1, 2, 3, 4,5, 6, 7]

// CHALLENGE 10: ANAGRAM
function isAnagram(str1, str2) {
  const arr1 = str1.split("").sort();
  const arr2 = str2.split("").sort();
  return arr1.every((value, index) => value === arr2[index]);
}
console.log(isAnagram("elbow", "below")); // ==== true
console.log(isAnagram("Dormitory", "dirty room##")); //  === false

// CHALLENGE 11: ADD ALL NUMBERS
function addAll(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur);
}
console.log(addAll(2, 5, 6, 7)); // === 20;

// CHALLLENGE 12: SUM ALL PRIMES
function sumAllPrimes(num) {
  let total = 0;
  // Helper function to check primality
  function checkForPrime(num) {
    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  }
  // Check all numbers for primality
  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}

console.log(sumAllPrimes(10)); // === 17;

// CHALLENGE 13: SEEK AND DESTROY

function seekAndDestroy(arr, ...rest) {
  return arr.filter((val) => !rest.includes(val));
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6)); // === [3,4, 'hello']

// CHALLENGE 14: EVENS AND ODDS

function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach((num) => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  return [evenSum, oddSum];
}

console.log(evenOddSums([50, 60, 60, 45, 71])); // === [170,116]
