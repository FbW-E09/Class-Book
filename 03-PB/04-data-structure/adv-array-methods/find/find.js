// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const movies = [
  'The Fantastic Mr. Fox',
  'Mr. and Mrs. Smith',
  'Mrs. Doubtfire',
  'Mr. Deeds',
  'Kazaam',
];

// Find the first movie that inclues 'Mrs'
const movie = movies.find((movie) => movie.includes('Mrs'));
console.log(movie);

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
  },
  {
    title: 'Fight Club',
    authors: ['Chuck Palahnuik'],
    rating: 4.95,
  },
];

// find first book with rating over 4.5
const firstGoodBook = books.find(({ rating }) => rating >= 4.5);
console.log(firstGoodBook);
