function reverseString(str) {
  return str.split('').reverse().join('');

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
  const revString = int.toString().split('').reverse().join('');
  return +revString;
}

// console.log(reverseInt(521));

function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

// console.log(capitalizeLetters('i love javascript'));

function createCharMap(str) {
  const charMap = {};
  str.split('').forEach((char) => {
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
  let maxChar = '';

  for (const char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(maxCharacter('javascript')); // a
// console.log(createCharMap('javascript'));
