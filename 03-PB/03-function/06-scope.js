// Lexical Scope
let movie = 'titanic';
function outer() {
  let movie = 'dracula';
  function inner() {
    let movie = 'Aladdin';
    function extraInner() {
      //   let movie = 'Kazaam';
      console.log(movie);
    }
    extraInner();
  }
  inner();
}
outer();
// //////
/// SCOPE
/////////

function helpMe() {
  let msg = `I'm on fire!`;
  console.log(msg);
  if (true) {
    let animal = 'not a turtle';
  }
}

// helpMe();
// console.log(animal);
// console.log(msg);

// These variables are scope to the function
function lol() {
  let person = 'Nic';
  let age = 55;
  var color = 'teal';
  console.log(age);
  console.log(color);
}

// lol();

// these variables are scoped to the changeColor function
const changeColor = () => {
  let color = 'purple';
  const age = 19;
  console.log(age);
};

// changeColor();
const color = 'green';

// console.log(color);

// BLOCK SCOPE

// let & const are block scoped
if (true) {
  const animal = 'turtle';
  //   console.log(animal);
}

// console.log(animal);

// var is NOT block scoped
if (true) {
  var animal = 'not a turtle';
  //   console.log(animal);
}
// console.log(animal);

let bears = ['grizzly bear', 'panda bear', 'pooh bear'];

let i = 1;
// console.log(i);
i = 10;
// console.log(i);
for (let i = 0; i < bears.length; i++) {
  //   console.log(i, bears[i]);
}
// console.log(i);

function car() {
  carName = 'Vroomer';
}

// const car = () => {
//   carName = 'Vroomer';
// };

// car();
// console.log(carName);

// start program
// finds and instantiates all function declarations (NOT arrow functions or function expressions)
// read and run file from top to bottom
