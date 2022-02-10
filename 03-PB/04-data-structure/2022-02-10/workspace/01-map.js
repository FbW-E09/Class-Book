let number = [1, 2, 3];

let result = number.map((item) => {
  return item * 2;
});

console.log("number", number);
console.log("result", result);

let food = ["pizza", "ice cream", "hot dog", "burger"];

console.log(food.map((item) => item.toUpperCase()));
console.log(
  food.map((item) => {
    let newItem = "";
    newItem = "_" + item + "_";
    return newItem;
  })
);
console.log(
  food.map((item) => {
    return 2;
  })
);

console.log(
  food.map((item, index, array) => {
    // console.log("item", item);
    // console.log("index", index);
    // console.log("array", array);
    return `0${index + 1}. ${item}`;
  })
);

// I want an array with all the tracks transformed like this:
// ["track 1 of 3", "track 2 of 3", "track 3 of 3"];
const songs = ["My dog", "Happy Birthday", "Crazy Train"];

console.log(
  songs.map((item, index, array) => {
    return `${item} of ${array.length}`;
  })
);

function double(number, index) {
  return number * 2;
}

console.log(number.map(double));

console.log(double(2));

/**
 * Format songs like this:
 *
 * 01/3. My dog
 * 02/3. Happy Birthday
 * 03/3. Crazy Train
 */

function formatSongTitle(song, index, array) {
  return `0${index + 1}/${array.length}. ${song}`;
}

console.log(songs.map(formatSongTitle));

const animals = [
  "cat",
  "dog",
  "mouse",
  "giraffe",
  "koala",
  "crocodile",
  "cangaroo",
];

/**
 * - if the animal starts with c, capitalize the first letter
 * - if the animal starts with d, capitalize the last letter
 * - if the animal starts with k, make it all uppercase
 * - if the animal starts with m, add underscores before and after
 */

function transformAnimals(animal) {
  if (animal.startsWith("c")) {
    return animal[0].toUpperCase() + animal.slice(1);
  } else if (animal.startsWith("d")) {
    return (
      animal.slice(0, animal.length - 1) +
      animal[animal.length - 1].toUpperCase()
    );
  } else if (animal.startsWith("k")) {
    return animal.toUpperCase();
  } else if (animal.startsWith("m")) {
    return "_" + animal + "_";
  } else {
    return animal;
  }
}

console.log(animals.map(transformAnimals));
