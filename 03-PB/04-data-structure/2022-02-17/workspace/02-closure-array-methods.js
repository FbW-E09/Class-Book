let myBooks = [
  {
    author: "J. R. R. Tolkien",
    title: "The Lord of the Rings",
    genre: "fantasy",
  },
  {
    author: "Stephen King",
    title: "It",
    genre: "horror",
  },
  {
    author: "Neil Gaiman",
    title: "American Gods",
    genre: "fantasy",
  },
  {
    author: "Shirley Jackson",
    title: "The Haunting of Hill House",
    genre: "horror",
  },
  {
    author: "Ursula K. Le Guin",
    title: "The Lathe of Heaven",
    genre: "sci-fi",
  },
  {
    author: "Shirley Jackson",
    title: "The Lottery",
    genre: "horror",
  },
  {
    author: "James Baldwin",
    title: "The Fire Next Time",
    genre: "non-fiction",
  },
  {
    author: "J. K. Rowling",
    title: "Harry Potter and the Philosopher's Stone",
    genre: "fantasy",
  },
  {
    author: "Yuval Noah Harari",
    title: "Sapiens: A Brief History of Humankind",
    genre: "non-fiction",
  },
];

let filterHorror = (book) => book.genre === "horror";
let filterSciFi = (book) => book.genre === "sci-fi";
let filterNonFiction = (book) => book.genre === "non-fiction";

let horrorBooks = myBooks.filter(filterHorror);
console.log(horrorBooks);
let nonFictionBooks = myBooks.filter(filterNonFiction);
console.log(nonFictionBooks);

function filterByGenre(genre) {
  return (book) => book.genre === genre;
}

// function filterByGenre(genre) {
//   return function (book) {
//     return book.genre === genre;
//   };
// }

function filterByAuthor(author) {
  return function (book) {
    return book.author === author;
  };
}
function filterByTitle(title) {
  return function (book) {
    return book.title === title;
  };
}

function filterByKeyAndValue(key, value) {
  // this is the function that will be used as a callback
  return function (book, index, array) {
    return book[key] === value;
  };
}

console.log(filterByGenre("horror")); // [Function: anonymous]

// let filterByGenre = (book, genre) => book.genre === genre;
let horrorBooks2 = myBooks.filter(filterByGenre("horror"));
console.log(horrorBooks2);
let sciFiBooks2 = myBooks.filter(filterByGenre("sci-fi"));
console.log(sciFiBooks2);
let nonFictionBooks2 = myBooks.filter(filterByGenre("non-fiction"));
console.log(nonFictionBooks2);

console.log(myBooks.filter(filterByKeyAndValue("title", "It")));
console.log(myBooks.filter(filterByKeyAndValue("author", "Shirley Jackson")));
console.log(myBooks.filter(filterByKeyAndValue("genre", "sci-fi")));
/**
 *
 * this filterByGenre function will return the actual filtering function
 *
 * example:
 *
 * filterByGenre("horror") => (book) => book.genre === "horror"
 * filterByGenre("sci-fi") => (book) => book.genre === "sci-fi"
 *
 **/
// function filterByGenre(genre) {
//   return function (book) {
//     return book.genre === genre;
//   };
// }
// function filterByGenreArrow(genre) {
//   return (book) => book.genre === genre;
// }

// // console.log(myBooks.filter(filterHorror));
// // console.log(myBooks.filter(filterSciFi));
// let horrorBooks = myBooks.filter(filterByGenre("horror"));
// let sciFiBooks = myBooks.filter(filterByGenre("sci-fi"));
// let nonFictionBooks = myBooks.filter(filterByGenre("non-fiction"));

// console.log(horrorBooks);
// console.log(sciFiBooks);
// console.log(nonFictionBooks);

// // books by Stephen King

// let stephenKingBooks = myBooks.filter((book) => book.author === "Stephen King");
// // books by Shirley Jackson

// let shirleyJacksonBooks = myBooks.filter(
//   (book) => book.author === "Shirley Jackson"
// );

// function filterByAuthor(author) {
//   return function (book) {
//     return book.author === author;
//   };
// }

// let stephenKingBooks1 = myBooks.filter(filterByAuthor("Stephen King"));
// let shirleyJacksonBooks1 = myBooks.filter(filterByAuthor("Shirley Jackson"));
// console.log(stephenKingBooks1);
// console.log(shirleyJacksonBooks1);

// function filterByProperty(property, value) {
//   // property => "author", "genre"
//   return function (book) {
//     return book[property] === value; // book["author"], book["genre"]
//   };
// }

// let horrorBooks1 = myBooks.filter(filterByProperty("genre", "horror"));
// let sciFiBooks1 = myBooks.filter(filterByProperty("genre", "sci-fi"));
// let stephenKingBooks2 = myBooks.filter(
//   filterByProperty("author", "Stephen King")
// );
// let shirleyJacksonBooks2 = myBooks.filter(
//   filterByProperty("author", "Shirley Jackson")
// );

// console.log(horrorBooks1, sciFiBooks1, stephenKingBooks2, shirleyJacksonBooks2);

// let book = { author: "Stephen King", title: "It", genre: "horror" };
// book.author; // 'Stephen King'
// book["author"]; // 'Stephen King'
// let property = "author"; // book[property]
