// Creates a new array with all elements that pass the
// test implemented by the provided function.

const nums = [20, 31, 42, 53, 44, 65, 86, 97];

const odds = nums.filter((n) => n % 2 === 1);
const evens = nums.filter((n) => n % 2 === 0);
const bigTransactions = nums.filter((n) => n > 50);
// console.log(evens);

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays'],
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy'],
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction'],
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories'],
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic'],
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction'],
  },
];

// All books over 4.3

// All books with a fantasy

// all books that are short stories or essays:
const shortForm = books.filter(
  // {
  //     title: 'Lord of the flies',
  //     authors: ['William Golding'],
  //     rating: 3.67,
  //     genres: ['fiction'],
  //   },
  ({ genres }) => genres.includes('short stories') || genres.includes('essays')
);
console.log(shortForm);

// Create simple search functionality:
const query = 'Kings';
