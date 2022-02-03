let book = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  publicationYear: 1979,
  pages: 193,
};

/**
 * Object.keys()
 * Object.keys() returns an array containing all the keys from the object
 */

console.log("The property names of the book object are:", Object.keys(book));

/**
 * Object.values()
 * Object.values() returns an array containing all the values from the object
 */

console.log("The values of the book object are:", Object.values(book));

/**
 * Object.entries()
 * Object.entries() returns an array containing arrays that contain property name and property value
 */

console.log("The entries of the book object are:", Object.entries(book));

// Get the length of the book object?
// How many properties are there in the book object?

// I cannot simply check for the length property, because object don't have it

console.log(`The book object has ${Object.keys(book).length} properties`);
console.log(`The book object length is:`, Object.keys(book).length);

// let's make all the property names all uppercase

let bookEntries = Object.entries(book);
let bookEntriesCapital = [];

for (let i = 0; i < bookEntries.length; i++) {
  console.log(bookEntries[i][0]); //
  let upperCaseKey = bookEntries[i][0].toUpperCase();
  bookEntriesCapital.push([upperCaseKey, bookEntries[i][1]]);
}

console.log(bookEntriesCapital);

/**
 * Object.fromEntries()
 * Object.fromEntries() takes in input an array of entries (like the one returned by the .entries() method)
 * and returns an object
 */

console.log(
  "The object book with uppercase property names is:",
  Object.fromEntries(bookEntriesCapital)
);

// console.log(Object.fromEntries([1, 2, 3])); // ERROR
// console.log(Object.fromEntries(["a", "b", "c"])); // ERROR
console.log(
  Object.fromEntries([
    ["a", "b", "c"],
    ["d", "e", "f", "g", "h"],
  ])
);
console.log(Object.fromEntries([["a"], ["d"]]));
