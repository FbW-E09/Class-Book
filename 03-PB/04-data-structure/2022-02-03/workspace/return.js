// create a function that checks if a number is even

function isEven(number) {
  if (number % 2 === 0) {
    // return `${number} is even: true`;
    return true;
  } else {
    // return `${number} is even: false`;
    return false;
  }
}

console.log("Is 2 even?", isEven(2))

// let's create an array with all even numbers up to 100

let evenNumbers = [];

for (let i = 0; i <= 100; i++) {
    if (isEven(i)) {
        evenNumbers.push(i);
    }
}

console.log(evenNumbers);