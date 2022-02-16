/* 
    1. Complete the code below to have a function that returns the number of times it's been called.
    
    For example:
    - when you run it the first time, it should return 1
    - the second time, it should return 2
    - then 3
    - and so on

    Hint: you don't need to use loops
*/

let counter = 0;
function myCounter() {
  counter++;
  return counter;
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

let counter2 = 0;
function myCounter2() {
  counter2++;
  return counter2;
}

let counter3 = 0;
function myCounter3() {
  counter3++;
  return counter3;
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

function flipCoin(guess) {
  let coinSides = ["head", "tail"];
  let randomNumber = Math.floor(Math.random() * 2);
  let symbol = coinSides[randomNumber];
  console.log("guess", guess);
  console.log("symbol", symbol);
  if (symbol === guess) {
    return "win";
  } else {
    return "lose";
  }
}

console.log(flipCoin("head"));
console.log(flipCoin("tail"));
