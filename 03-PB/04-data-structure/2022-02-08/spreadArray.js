// ///////////
// SPREAD ON ARRAYS
/////////////

// Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

const nums = [1, 3, 5, 2, 6, 3];
const moreNums = [23, 45, 67, 43];
const combinedNums = nums.concat(moreNums);
const combinedAgain = [...nums, ...moreNums];
// NaN - won't work!
// console.log(Math.max(nums));
// console.log(combinedAgain);
// console.log(Math.max(...nums));
// console.log(Math.max(...combinedNums));

const cephalopods = [
  'dumbo octopus',
  'humboldt squid',
  'flamboyant cuttlefish',
];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods];
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

// console.log(mollusca);

const inverts = [...cnidaria, ...gastropods, ...cephalopods];
//["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]
// console.log(inverts);

function giveMeFour(a, b, c, d) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  console.log('d', d);
}

const colors = ['red', 'orange', 'mango', 'green'];
// giveMeFour(colors);
// a [ 'red', 'orange', 'mango', 'green' ]
// b undefined
// c undefined
// d undefined

giveMeFour(...colors);

giveMeFour(...'GOAT');
