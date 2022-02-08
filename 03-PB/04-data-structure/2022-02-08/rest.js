/////////////////////////
// ARGUMENTS OBJECT
// ///////////////////////
//The arguments object is available in every function you write (except arrow functions)
//It contains all the arguments passed in.

// sum all the numbers of the arguments
function argumentative() {
  // arguments object is NOT an array, we would need to turn it into one if we want to use array methods
  //   console.log(arguments);
  const argsArr = [...arguments];
  let total = 0;
  for (const arg of argsArr) {
    total += arg;
  }
  return total;
}
// arguments don't exist in arrow functions :(
const logger = () => console.log(arguments);

// console.log(argumentative(1, 2, 3));
// logger(2);

/////////////
// REST PARAMETERS
//////////////
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

// new way using rest
function sum(...nums) {
  console.log(nums);
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

// const obj = { 0: 1, 1: 2, 2: 3 };

// console.log(sum(2, 4, 5, 8));

// We can have named params and then we can collect the rest into an array
// function fullName(first, last, ...titles) {
//   console.log('first', first);
//   console.log('last', last);
//   console.log('titles', titles);
// }

function fullName(...titles,first, last) {
  console.log('first', first);
  console.log('last', last);
  console.log('titles', titles);
}


// fullName('john', 'smith', 'dr', 'mr', 'jr');
fullName('jr', 'dr', 'john', 'smith');
