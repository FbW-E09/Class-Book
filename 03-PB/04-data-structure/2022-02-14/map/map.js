const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

//Map creates a new array by calling your callback function with each element in the original array.

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

console.log(numDetail);
