const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// Using an anonymous function expression
// numbers.forEach(function (num) {
//   console.log(num * 2);
// });

// numbers.forEach((num) => console.log(num * 3));

// We have access to the current element, index, and array
// numbers.forEach((element, index, array) => console.log(element, index, array));

// NOOOO won't return anything - this will be undefined
// const timesThree = numbers.forEach((num) => num * 3);
// console.log(timesThree);

function printTriple(n) {
  console.log(n * 3);
}

// Using a pre-defined function
// numbers.forEach(printTriple);

// ^ Sort of like a nicer syntax for for loops, doesn't return anything
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

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
];

// Capitalize and print off all the book titles using forEach
books.forEach((book) => {
  //   console.log(book.title.toUpperCase());
});
// Capitalize and print off all the book titles using for...of
// for (const book of books) {
//   console.log(book.title.toUpperCase());
// }
// Capitalize and print off all the book titles using traditional loop
// for (let index = 0; index < books.length; index++) {
//   const capitalizedBook = books[index].title.toUpperCase();
//   console.log(capitalizedBook);
// }

const swapi = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/6/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/7/',
    ],
    species: ['https://swapi.dev/api/species/1/'],
    vehicles: [
      'https://swapi.dev/api/vehicles/14/',
      'https://swapi.dev/api/vehicles/30/',
    ],
    starships: [
      'https://swapi.dev/api/starships/12/',
      'https://swapi.dev/api/starships/22/',
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/',
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/4/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/',
    ],
    species: ['https://swapi.dev/api/species/2/'],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:10:51.357000Z',
    edited: '2014-12-20T21:17:50.309000Z',
    url: 'https://swapi.dev/api/people/2/',
  },
  {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
    homeworld: 'https://swapi.dev/api/planets/8/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/4/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/',
    ],
    species: ['https://swapi.dev/api/species/2/'],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:11:50.376000Z',
    edited: '2014-12-20T21:17:50.311000Z',
    url: 'https://swapi.dev/api/people/3/',
  },
];

swapi.forEach((person) => {
  // We can also destructure and just pull out the props we need
  //   const { name, height } = person;
  // name, height, mass
  console.log(`${person.name} is ${person.height}cm tall`);
});
