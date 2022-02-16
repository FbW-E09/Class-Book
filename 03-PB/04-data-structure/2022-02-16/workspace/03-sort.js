let numbers1 = [1, 2, 3, 10, 20, 30, 222, 223];

let sorted1 = numbers1.sort();

console.log("sorted", sorted1);

let numbers2 = [4, 8, 2, 1, 6, 0];

let sorted2 = numbers2.sort();

console.log("sorted 2", sorted2); // 0, 1, 2, 4, 6, 8

let words = ["table", "coffee", "wall", "aaaa", "abc", "bla"];

let sortedWords = words.sort();
console.log("sortedWords", sortedWords);

function descendingWords(a, b) {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
      return 0;
  }
}

let descendingWordsArray = words.sort(descendingWords);
console.log("descending", descendingWordsArray);
/**
 *
 * if the result of the callback is a number smaller than 0
 */

function ascendingOrder(a, b) {
  return a - b;
}

function decendingOrder(a, b) {
  return b - a;
}

let sorted3 = numbers1.sort(ascendingOrder);
console.log(sorted3);

let numbers4 = [5, 2, 8];
let sorted4 = numbers4.sort(ascendingOrder);
console.log(sorted4);

let numbers5 = [6, 2, 0, 1, 5, 10, 100, 7, 999, 2, 2, 2];
let sorted5 = numbers5.sort(decendingOrder);
console.log(sorted5);



let letters = ["z", "b", "c", "a"];


let copy = [...letters];
let sortedLetters = [...letters].sort();


console.log("letters", letters);
console.log("sorted letters", sortedLetters);
/*
1
10
11
12
13
2
20
21
22
23
24
3
30
...

*/

/*
01
02
03
...
10
11
12
...
20
*/

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];
