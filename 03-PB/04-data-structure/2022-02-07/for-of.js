// //////////////
// FOR OF LOOPS
/////////////////

// The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.

const subreddits = [
  'javascript',
  'programming',
  'cats',
  'books',
  'skateboarding',
];

// standard for loop using the index
// for (let i = 0; i < subreddits.length; i++) {
//   const subreddit = subreddits[i];
//   console.log(subreddit);
// }

// Much cleaner for loop
// for (const subreddit of subreddits) {
//   console.log(subreddit);
// }

// subreddit[0]

const chickenString = 'cockadoodledoo';

// For of works with iterables - so it works for a string too!
// for (const char of chickenString) {
//   console.log(char.toUpperCase());
// }

// for (const char of chickenString) {
//   console.log(char.toUpperCase());
// }

// for (let i = 0; i < chickenString.length; i++) {
//   const char = chickenString[i];
//   console.log(char);
// }

// We want to sum each row of the magicSquare (AKA gameboard)
// We want console log the sum of each row
// 'x' row summed to 'sum'
const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 12],
];

// Standard for loop for summing our game board rows
// loop over each row
// for (let i = 0; i < magicSquare.length; i++) {
//   // get the row
//   const row = magicSquare[i];
//   let sum = 0;
//   //   We want each number from the row
//   for (let j = 0; j < row.length; j++) {
//     //   Add all the numbers together from the current row
//     sum += row[j];
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// let firstRow = 0;
// // Rewritten with a for...of loop
// for (const row of magicSquare) {
//   let sum = 0;
//   firstRow += row[0];
//   for (const num of row) {
//     sum += num;
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// But sometimes we may still need the index!
const words1 = ['mail', 'shopping', 'bath', 'black'];
const words2 = ['box', 'mall', 'tub', 'berry'];

for (let i = 0; i < words1.length; i++) {
  console.log(`${words1[i]}${words2[i]}`);
}
