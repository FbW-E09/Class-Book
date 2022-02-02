/**
 * return statement
 */

// hoisting
console.log(sum(99, 100));

function sum(a, b) {
  let result = a + b;

  return result;
}

let sumResult = sum(2, 3);

/**
 * multiple return statements
 */

function isItWorkingHour(hour) {
  if (hour > 17) {
    return false;
  } else {
    return true;
  }
}

function isItWorkingHour2(hour) {
  if (hour > 17) {
    return false;
  }
  return true;
}
function isItWorkingHour3(hour) {
  return hour > 17;
}
console.log("Shall I keep working?", isItWorkingHour(16));
console.log("Shall I keep working?", isItWorkingHour(18));

function action(hour) {
  if (hour > 8) {
    return "Time to get up!";
  } else {
    return "Go back to sleep!";
  }
}

function moodByDay(day) {
  if (day === "Monday") {
    return "😱";
  } else if (day === "Tuesday" || day === "Wednesday") {
    return "😩";
  } else if (day === "Thursday") {
    return "🤯 Almost there";
  } else if (day === "Friday") {
    return "🍸🍺🍹";
  } else if (day === "Saturday" || day === "Sunday") {
    return "🛌🛌🛌🥳🎉🎉🎉🥳";
  } else {
    return `${day} is not a valid day`;
  }
}

console.log(moodByDay("Wednesday"));
console.log(moodByDay("Saturday"));
console.log(moodByDay("Monday"));

function printNumbersUpTo(number) {
  for (let i = 0; i < number; i++) {
    return i;
  }
}

console.log(printNumbersUpTo(100));

/**
 * parameters and arguments
 */

function sayHello() {
  console.log("hello");
}

function sayHelloCarlo() {
  console.log("hello carlo");
}

// create a function that greets people with different messages and different names

function sayHiZharko() {
  console.log("hi zharko");
}

function sayHalloRegina() {
  console.log("hallo regina");
}

function greet(greeting, person) {
  console.log(`${greeting} ${person}`);
}

greet("hey", "carlo");
greet("hi", "zharko");
greet("hallo", "regina");
// a and b are the function parameters
function multiply(a, b) {
  return a * b;
}

// 2 and 3 are the arguments we are passing to the function
console.log(multiply(2, 3));

/**
 * default parameters
 */

function greetDefault(greeting = "hey", person = "you") {
  return `${greeting} ${person}`;
}

console.log(greetDefault("hey", "carlo"));
greetDefault("hi", "zharko");
greetDefault("hallo", "regina");
greetDefault();

greet();

function multiplyNumberBy(a, b = 1) {
    return a * b;
}

console.log(multiplyNumberBy(9));
console.log(multiplyNumberBy(9, 2));



// sayHi();


// let sayHi =  function() {
//     console.log("hi");
// }


let globalVariable = 5;

console.log(globalVariable);
const changesGlobalVariable = function() {
    globalVariable = 10;
}
changesGlobalVariable();

console.log(globalVariable);



console.log(n);

let n = 5;

var a = 9;