const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

//Map creates a new array by calling your callback function with each element in the original array.

// A.S.A.P, B.Y.O.B

const abbrevs = words.map((word) => {
  const upperCasedWord = word.toUpperCase();
  const splitWords = upperCasedWord.split('');
  const finalAbbrevs = splitWords.join('.');
  return finalAbbrevs;
});

console.log(abbrevs);

const doubles = numbers.map(function (num) {
  return num * 2;
});

const triples = numbers.map((num) => num * 3);

// const moreNums = (num) => num;

// console.log(triples);

// Map over the numbers and return an object for each number containing the value and if the number is even - { value: num, isEven: true}

const numDetail = numbers.map((num) => {
  // { value: num, isEven: true}
  //   const numObj = { value: num, isEven: num % 2 === 0 };

  return { value: num, isEven: num % 2 === 0 };
});

// console.log(numDetail);

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

// Destructuing - pull only the title out of each book object
const titles = books.map(({ title }) => title);
console.log(titles);

// Create a map look-alike
function mapLookAlike(arr, callBackFunction) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    newArr.push(callBackFunction(item, i));
  }

  return newArr;
}

const prices = [2, 6, 8, 10, 24];

const americanPrices = mapLookAlike(prices, (value) => `$ ${value}`);
const europeanPrices = mapLookAlike(prices, (value) => `E ${value}`);
console.log({ americanPrices, europeanPrices });
