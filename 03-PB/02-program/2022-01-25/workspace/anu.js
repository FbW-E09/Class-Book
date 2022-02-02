// let i = 0;
// let j = 0;
// let animals = [
//   "cat",
//   "mouse",
//   "monkey",
//   "cat",
//   "elephant",
//   "dog",
//   "mouse",
//   "giraffe",
//   "monkey",
//   "monkey",
//   "elephant",
// ];
// let newlist = [];
// for (i = 0; i < animals.length; i++) {
//   for (j = 0; j <= newlist.length; j++) {
//     if (newlist[j] !== animals[i]) {
//       newlist.push(animals[i]);
//       break;
//     } else if (j === i) {
//       break;
//     }
//   }
// }
// console.log(newlist);

// let word = "aeiou";
// let vowels = "aeiou";
// let noVowels = "";

// for (let i = 0; i < word.length; i++) {
//   let isVowel = false;
//   for (let j = 0; j < vowels.length; j++) {
//     if (word[i] === vowels[j]) {
//       isVowel = true;
//     }
//   }
//   if (!isVowel) {
//     noVowels += word[i];
//   }
// }

// console.log(noVowels);

// let word = "hello";
// let wordNoVowels = "";
// let vowels = ["a", "e", "i", "o", "u"];
// for (let i = 0; i < word.length; i++) {
//   let isVowel = true;
//   for (let j = 0; j < vowels.length; j++) {
//     if (word[i].toLowerCase() !== vowels[j]) {
//       isVowel = false;
//     }
//   }
//   if (!isVowel) wordNoVowels += word[i];
// }

// console.log(wordNoVowels);



let vowels = "aeiou";
let word = "aueoiu";
let wordNoVowels = [];


for(let i = 0; i < word.length; i++) {
  if(! vowels.includes(word[i])) {
   wordNoVowels.push(word[i]);  
  }
}

console.log(wordNoVowels);




function exponent(num1, num2){
  if(typeof(num1) === "number" && typeof(num2) === "number"){
      let result = [];
      for(let i = 1; i <= num2; i++){
          result.push(num1 ** i);
      }
      return result;
  }
  return "Not a valid number!"
}

console.log(`Q1: Printing exponential values using a function: ${exponent(2, 8).join(" ")}`);