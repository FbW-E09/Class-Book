// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// To create a function we can use a function declaration.
// Syntax:
// function name() {
//     body of the function
// }

// step 1 - define function
function printSleepyMessage() {
  console.log('Sleepy, too early');
}

// step 2 call function
// printSleepyMessage();
// printSleepyMessage();

//
//
// The function has access to this outer variable

// Global Scope
let userName = 'Helon';

function changeUserName() {
  userName = 'Todd';
  // A variable declared inside a function is only visible inside that function.
}

function greeting() {
  const message = `Your User Name is now ${userName}`;
  console.log(message);
}
console.log(userName);
changeUserName();
console.log(userName);
greeting();

// console.log(userName);
// changeUserName();
// console.log(userName);

// global
const userName2 = 'nic';

function printHello() {
  // local variables - existing only within our function
  const userName2 = 'John';
  const message = `Hello ${userName2}`;
  console.log(message);
}
// printHello();
// console.log(userName2);
// console.log(userName2);

const grumpy = `I'm grumpy`;
function grumpus() {
  console.log(grumpy);
}
// grumpus();
