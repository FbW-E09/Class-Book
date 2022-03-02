/**
 * Loops
 *
 * for()
 * for...of
 * for...in
 * while()
 * do...while()
 *
 * ----
 *
 * Array methods that help us looping over arrays
 * .forEach()
 * .map()
 * .filter()
 * .reduce()
 */

// print all the numbers from 0 to 9
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// print all the numbers from 9 to 0
for (let i = 9; i >= 0; i--) {
  console.log(i);
}

// print all the even numbers from 0 to 20
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let hour = 6;
if (hour >= 8 && hour < 9) {
  console.log("wake up");
} else if (hour > 9 && hour < 16) {
  console.log("go to work");
} else if (hour > 16 && hour < 23) {
  console.log("relax");
} else if (hour > 23) {
  console.log("go to sleep");
} else {
  console.log("sleep");
}

for (let hour = 0; hour <= 24; hour++) {
  console.log(`it's ${hour}`);
  if (hour >= 8 && hour < 9) {
    console.log("wake up");
  } else if (hour > 9 && hour < 16) {
    console.log("go to work");
  } else if (hour > 16 && hour < 23) {
    console.log("relax");
  } else if (hour > 23) {
    console.log("go to sleep");
  } else {
    console.log("sleep");
  }
}

let letters = ["a", "b", "c", "d"];
console.log(letters[0]); // "a"
console.log(letters[2]); // "c"
console.log(letters[letters.length]); // undefined
console.log(letters[letters.length - 1]); // "d"

for (let i = 0; i < letters.length; i++) {
  console.log(`the letter at index ${i} is`, letters[i]);
}

// the for...of loop let us iterate over the values of an array
for (let letter of letters) {
  console.log(letter);
}

// the for...in loop let us iterate over the keys of an object

let animal = {
  type: "cat",
  name: "Tom",
  color: "grey",
  age: 3,
};

for (let key in animal) {
  console.log(key); // "type", "name", "color", "age"
  console.log(animal[key]); // "cat", "Tom", "grey", 3
  console.log("-------");
}
