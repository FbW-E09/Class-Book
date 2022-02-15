// Some
// Returns true if at least one element in this array satisfies the provided testing function

//  Every
// Returns true if every element in this array satisfies the testing function.

const words = ['dog', 'dig', 'log', 'bag', 'wag'];

// Is every word 3 characters long?

const all3Letters = words.every((word) => word.length === 3);
// console.log(all3Letters);

// Do all the words end in "g"?
const allEndInG = words.every((word) => word.endsWith('g'));
// console.log(allEndInG);

// Does at least 1 word start with b?
const someStartWithD = words.some((word) => word[0] === 'b');

// console.log(someStartWithD);
// Does every word start with d?
const everyStartWithD = words.every((word) => word[0] === 'd');

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

// Are all books rated 3.5 or above?
const allGoodBooks = books.every(({ rating }) => rating > 3.5);
console.log(allGoodBooks);

// Do any books have 2  authors?
const any2Authors = books.some(({ authors }) => authors.length === 2);
console.log(any2Authors);
