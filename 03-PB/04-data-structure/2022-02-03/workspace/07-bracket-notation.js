let book = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  publicationYear: 1979,
  pages: 193,
};

// get the author name of the book

let author = book.author;

console.log("The author of the book is:", author);

/** 
 * besides using the dot, we have a notation similar to arrays, using square brackets []
 * We write the property name as a string inside the square brackets
 */ 


console.log("The author of the book is:", book["author"]);
console.log("The title of the book is:", book["title"]);



let propertyName = "pages";
console.log("", book[propertyName]);
console.log("", book["pages"]);

// all undefined, because the book object doesn't have any of these properties
console.log("", book.propertyName);
console.log("", book.cover);
console.log("", book.editor);
console.log("", book.edition);
console.log("", book.price);





// let numbers = ["a", "b", "c", "d", "e"];
// let index = 2;

// console.log(numbers[index]); // 