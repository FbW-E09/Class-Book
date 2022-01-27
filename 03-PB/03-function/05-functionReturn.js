// A return statement determines the value the function returns.
// A return keyword without an expression after it will cause the function to return undefined.
// Functions that don’t have a return statement at all return undefined.

const checkAge = (age) => {
  if (age > 17) {
    return true;
  } else {
    return false;
  }
};

const letDrive = (age) => {
  console.log('log one');
  if (!checkAge(age)) {
    return `you can't drive`;
  }
  console.log('log two');
  return 'you can drive';
};
// const bob = letDrive(15);

// console.log(letDrive(15));

let random = () => {
  return;
  // console.log('something random');
};

// random();

// we need a function to grab random items from an array;
let bears = ['grizzly bear', 'panda bear', 'pooh bear'];
let musicians = ['Celine Dion', 'Tupac', 'Nsync'];
const randomItem = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  const randomItem = items[randomIndex];
  return randomItem;
};
const randomBear = randomItem(bears);
const randomMusician = randomItem(musicians);
// console.log(randomMusician);

// console.log(Math.floor(Math.random() * bears.length));

// We need a function - 'isPurple' to check if the color is "purple"
'red', 'purple', 'green';
// function isPurple(color) {
//   if (color.toLowerCase() === 'purple') {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isPurple(color) {
//   if (color.toLowerCase() === 'purple') {
//     return true;
//   }
//   return false;
// }

// function isPurple(color) {
//   return color.toLowerCase() === 'purple';
// }

// const isPurple = (color) => color.toLowerCase() === 'purple';

// console.log(isPurple('green'));

// We need a function  to check if an array contains 'purple'

let colorArr = ['red', 'grey', 'green'];

// function isPurple(arr) {
// const lowerCasedColors = []
//   for (let i = 0; i < array.length; i++) {
//     const color = array[i];
//     lowerCasedColors.push(color.toLowerCase());

//   }

//   if (arr.includes('purple')) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const isPurple = (arr) => arr.includes('purple');
function isPurple(arr) {
  let isFound = false;
  for (let i = 0; i < arr.length; i++) {
    let color = arr[i];
    if (color.toLowerCase() === 'purple') {
      isFound = true;
    }
  }
  return isFound;
}

console.log(isPurple(colorArr));
