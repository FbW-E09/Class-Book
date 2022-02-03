let book = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  publicationYear: 1979,
  pages: 193,
};

let bookEntries = Object.entries(book);

for (let i = 0; i < bookEntries.length; i++) {
  console.log(`${bookEntries[i][0]}: ${bookEntries[i][1]}`);
}
console.log(`---`);


// let's create an array with all the property names from the book object
// bookKeys -> ["title", "author", "publicationYear", "pages"]
let bookKeys = Object.keys(book);

for (let i = 0; i < bookKeys.length; i++) {
  console.log("i", i);
  console.log("bookKeys[i]", bookKeys[i]);
  console.log("book[bookKeys[i]]", book[bookKeys[i]]);
  let key = bookKeys[i]; // "title", "author", "publicationYear", "pages"
  let value = book[key]; // book["title"], book["author"], ...
  console.log(`${key}: ${value}`);
  console.log("----------");
}
