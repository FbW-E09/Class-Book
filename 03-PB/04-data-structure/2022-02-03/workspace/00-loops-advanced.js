let animals = [
  "cat",
  "mouse",
  "monkey",
  "cat",
  "elephant",
  "dog",
  "mouse",
  "giraffe",
  "monkey",
  "monkey",
  "elephant",
];
let animalsNoDuplicates = [];

for (let i = 0; i < animals.length; i++) {
  if (!animalsNoDuplicates.includes(animals[i])) {
    animalsNoDuplicates.push(animals[i]);
  }
}

console.log(animalsNoDuplicates);

let writers = [
  "Mary Shelley",
  "Thomas Pynchon",
  "Patricia Lockwood",
  "Douglas Adams",
  "Bernardine Evaristo",
  "Shirley Jackson",
  "Margaret Atwood",
  "Kurt Vonnegut",
  "James Baldwin",
  "Stephen King",
  "Franz Kafka",
  "Isaac Asimov",
  "James Joyce",
];
let writersLetterJ = [];

for (let i = 0; i < writers.length; i++) {
  let splitFullName = writers[i].split(" ");

  if (splitFullName[1][0].toLowerCase() === "p") {
    writersLetterJ.push(writers[i]);
  }
}

console.log(writersLetterJ);

// Input -> Output

// "hello" -> "hll"
// elephant -> "lphnt"
// "JavaScript" -> "JvScrpt"
// "AEIOU" -> ""
// "BLABLA" -> "BLBL"

let string = "hello";
let stringNoVowels = "";
let vowels = "aeiou";
// let vowels = ["a", "e", "i", "o", "u"];
// let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

for (let i = 0; i < string.length; i++) {
  if (!vowels.includes(string[i].toLowerCase())) {
    stringNoVowels += string[i];
  }
}

console.log(stringNoVowels);

// for (let i = 0; i < string.length; i++) {
// let isVowel = false;
//   for (let j = 0; j < vowels.length; j++) {
//       if (string[i] === vowels[j]) {
//           isVowel = true;
//       }
//   }
//   if (isVowel === false) {
//     stringNoVowels += string[i];
//   }
// }

console.log(stringNoVowels);