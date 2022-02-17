/**
 * A closure is the combination of a function bundled together (enclosed)
 * with references to its surrounding state (the lexical environment).
 */

/**
 * Closure
 *
 * - A closure is a function that has access to its surrounding scope
 * - we can have a function (outer function) that returns a new function (inner function) and the inner function
 * has ALWAYS access to whatever was inside of outer function (its scope)
 *
 * - A closure is a function having access to the parent scope, even after the parent function has closed.
 *
 * - A closure is the combination of a function bundled together (enclosed)
 * with references to its surrounding state (the lexical environment).
 * In other words, a closure gives you access to an outer function’s scope from an inner function.
 */


function outer() {
  let name = "outer";
  function inner() {
    console.log(`hey, I'm inner, I was declared inside of ${name}`);
  }

  return inner;
}

let fn = outer();

console.log(outer); // [Function: outer]

console.log("fn", fn); // [Function: inner]

fn(); // "hey, I'm inner"

function makeCounter() {
  let count = 0;
  function counter() {
    count++;
    return count;
  }

  return counter;
}

function makeCounter1() {
  let count = 0;
  return function () {
    count++;
    return count;
  }
}
// console.log(makeCounter()())
// console.log(makeCounter()())
// console.log(makeCounter()())
// console.log(makeCounter()())
// console.log(makeCounter()())

let counter1 = makeCounter();
let counter2 = makeCounter();
let counter3 = makeCounter();
let counter4 = makeCounter();
let counter5 = makeCounter();

console.log(counter1 === counter2);
console.log(counter1); // [Function: counter]

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3
console.log(counter2()); // 1

function hello() {
  console.log("hello");
}

let hello1 = hello;
let hello2 = hello;
let hello3 = hello;

console.log(hello === hello1);

function makeCoinFlipper() {
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

  return flipCoin;
}

let game1 = makeCoinFlipper();
console.log(game1("head"));
console.log(game1("tail"));
console.log(game1("head"));
console.log(game1("tail"));
console.log(game1("tail"));
console.log(game1("head"));




function makeCounter2(from) {
  let count = from;
  return function () {
    count++;
    return count;
  }
}

let counterFrom1000 = makeCounter2(1000);
let counterFrom100 = makeCounter2(100);
let counterFrom648 = makeCounter2(648);

console.log(counterFrom1000());
console.log(counterFrom1000());
console.log(counterFrom1000());
console.log(counterFrom100());
console.log(counterFrom100());
console.log(counterFrom100());
console.log(counterFrom648());
console.log(counterFrom648());
console.log(counterFrom648());