// check if an object has a specific property

let book = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  publicationYear: 1979,
  pages: 193,
};

// I want to know if the book object contain the "cover" property

// check if the value of the property is undefined or not
if (book.cover === undefined) {
  console.log("the book object has NOT a 'cover' property");
} else {
  console.log("the book object has a 'cover' property");
}

// use the .hasOwnProperty() method with the property name: it returns true or false
if (book.hasOwnProperty("cover")) {
  console.log("the book object has a 'cover' property");
} else {
  console.log("the book object has NOT a 'cover' property");
}
