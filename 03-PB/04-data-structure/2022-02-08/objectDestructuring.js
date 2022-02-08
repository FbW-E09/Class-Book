/////////
// OBJECT DESTRUCTURING
///////////

const runner = {
  first: 'Eliud',
  last: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya',
};

// const { first, last, ...other } = runner;
// console.log(first, last, other);
// const { country: nation, title: honorific } = runner;
// console.log(nation, honorific);
// //////
// Nested Destructuring
///////

const results = [
  { first: 'Eliud', last: 'Kipchoge', country: 'Kenya' },
  { first: 'John', last: 'fasterere', country: 'Ethiopia' },
  { first: 'John', last: 'fastestest', country: 'France' },
];

const [{ first: gold }, { time }, { country: country2 }] = results;
console.log({ gold, time, country2 });
