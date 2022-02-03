/**
 * Object.seal()
 * 
 * After sealing an object we can't add or delete properties
 * We can still change the values of existing properties
 */
let book = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  publicationYear: 1979,
  pages: 193,
};

Object.seal(book);

book.cover = "cover of the book";
console.log("The book with added cover", book);

delete book.author;
console.log("The book without author", book);

book.pages = 999;
console.log(book);

/**
 * Object.freeze()
 * We protect the object the same way as seal(). In addition, we can't even change
 * existing values
 */

Object.freeze(book);

book.pages = 193;
console.log(book);