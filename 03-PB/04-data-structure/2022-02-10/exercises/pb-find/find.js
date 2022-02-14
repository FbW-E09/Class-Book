let books = [
  {
    title: "The Lottery and Other Stories",
    author: "Shirley Jackson",
    pages: 302,
    publicationYear: 1949,
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    pages: 260,
    publicationYear: 1818,
  },
  {
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    pages: 275,
    publicationYear: 1969,
  },
  {
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    pages: 314,
    publicationYear: 1985,
  },
  {
    title: "The Metamorphosis",
    author: "Franz Kafka",
    pages: 201,
    publicationYear: 1915,
  },
];

/**
 * Exercise 1:
 *
 * Find the first book published by an author whose first name starts with the letter "m"
 *
 * Expected output:
 *
 * {
 *   title: "Frankenstein",
 *   author: "Mary Shelley",
 *   pages: 260,
 *   publicationYear: 1818,
 * }
 *
 */

const firstAuthorWithM = books.find((book) =>
  book.author.toLowerCase().startsWith("m")
);
console.log(firstAuthorWithM);

/**
 * Exercise 2:
 *
 * Find the first book with more than 300 pages which has been published after 1950
 *
 * Expected output:
 *
 * {
 *   title: "The Handmaid's Tale",
 *   author: "Margaret Atwood",
 *   pages: 314,
 *   publicationYear: 1985,
 * }
 *
 */

const verySpecificBook = books.find(
  (book) => book.pages > 300 && book.publicationYear > 1950
);

console.log(verySpecificBook);