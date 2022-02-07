// //////////////
// FOR IN LOOPS
/////////////////

// The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

const object = { a: 1, b: 2, c: 3 };

// for (const key in object) {
//   console.log(`${key}: ${object[key]}`);
// }

const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5,
};

// for (const movie in movieReviews) {
//   const movieRating = movieReviews[movie];
//   // console.log(movieRating);
//   console.log(`${movie}: ${movieRating}`);
// }

// THIS WONT WORK
// OBJECTS ARE NOT ITERABLE (can't use for...of loop)
// for (const x of movieReviews) {
//   console.log(x);
// }

for (const movie of Object.keys(movieReviews)) {
  console.log(`you rated ${movie} - ${movieReviews[movie]}`);
}
