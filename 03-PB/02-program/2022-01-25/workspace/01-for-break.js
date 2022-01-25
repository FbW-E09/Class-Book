//let word = "allllllllllllllllllllllllllllllllllllllllllllllllllllllllllk";
// let word = "llllllllllll____llllllllllllllllllllllllllllllllllllllllllllll";
let word = "aaaccbbb";
let lowerCaseWord = word.toLowerCase();

// break;

// let isPalindrome = true;
// for (let i = 0; i < Math.floor(lowerCaseWord.length / 2); i++) {
//   // console.log(i);
//   // console.log("left side", lowerCaseWord[i]);
//   // console.log("right side", lowerCaseWord[lowerCaseWord.length - 1 - i]);
//   if (lowerCaseWord[i] !== lowerCaseWord[lowerCaseWord.length - 1 - i]) {
//     isPalindrome = false;
//     break;
//   }
//   console.log(i);
// }
let isPalindrome = false;
for (let i = 0; i < Math.floor(lowerCaseWord.length / 2); i++) {

  if (lowerCaseWord[i] === lowerCaseWord[lowerCaseWord.length - 1 - i]) {
    isPalindrome = true;
  } else {
    isPalindrome = false;
    break;
  }
  console.log(i);
}
if (isPalindrome) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} is NOT a palindrome`);
}


// continue;

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}