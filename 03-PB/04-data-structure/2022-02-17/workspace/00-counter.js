/* 
    1. Complete the code below to have a function that returns the number of times it's been called.
    
    For example:
    - when you run it the first time, it should return 1
    - the second time, it should return 2
    - then 3
    - and so on

    Hint: you don't need to use loops
*/

/**
 * Pure function
 *
 * A pure Function is a function (a block of code ) that always returns the same result
 * if the same arguments are passed.
 */

// function sum(a, b) {
//   return a + b;
// }

// let a = 2;
// let b = 5;
// function sum2() {
//   return a + b;
// }

// console.log(sum2());
// console.log(sum2());
// a = 9;
// console.log(sum2());
// console.log(sum2());

let count = 0;
function myCounter() {
  count++;
  return count;
}

console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3

/*
    2. Create other two functions that do the exact same thing (counting the number of times they have been called), 
    but the counter of one function should be independend from the one in the other

    For example:
    - if I call myCounter2() 3 times, I should see: 1, 2, 3
    - if I then call myCounter3() once, I will see 1
    - if I call myCounter2() again now, I should see 4
*/

let count2 = 0;
function myCounter2() {
  count2++;
  return count2;
}

let count3 = 0;
function myCounter3() {
  count3++;
  return count3;
}
console.log(myCounter2()); // 1
console.log(myCounter2()); // 2
console.log(myCounter3()); // 1
console.log(myCounter2()); // 3
console.log(myCounter3()); // 2
console.log(myCounter2()); // 4

/**
 * We have a function to flip a coin a we can guess the outcome.
 *
 * Complete the code so that it can keep track of our score. For example, if we call it 5 times and we make 3 correct
 * guesses, the score should be 3.
 *
 *
 */

let score = 0;
function flipCoin(guess) {
  let coinSides = ["head", "tail"];
  let randomNumber = Math.floor(Math.random() * 2);
  let symbol = coinSides[randomNumber];
  //   console.log("guess", guess);
  //   console.log("symbol", symbol);
  if (symbol === guess) {
    score++;
    return `win. Current score is: ${score}`;
  } else {
    return "lose";
  }
}

console.log(flipCoin("head"));
console.log(flipCoin("tail"));
console.log(flipCoin("head"));
console.log(flipCoin("tail"));
console.log(flipCoin("tail"));
console.log(flipCoin("head"));

