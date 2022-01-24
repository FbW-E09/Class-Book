let animals = [
  "cat",
  "dog",
  "mouse",
  "giraffe",
  "monkey",
  "elephant",
  "gorilla",
  "tiger",
  "koala",
  "turtle",
];

/**
 * cat: animals[0]
 * dog: animals[1]
 * mouse: animals[2]
 * giraffe
 * elephant
 */

for (let i = 0; i < 5; i++) {
  console.log(animals[i]); // animals[0], animals[1], animals[2]...
}

// i will be a number that goes from 0 to the last index of the array
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]); // animals[0], animals[1], animals[2]...
}

// print all the animals that start with the letter "t"

console.log("animals that starts with t");
for (let i = 0; i < animals.length; i++) {
  if (animals[i][0] === "t") {
    console.log(animals[i]);
  }
}

/**
 * output:
 *
 * "we have 5 animals:"
 *
 * 1: cat
 * 2: dog
 * 3: mouse
 * 4: giraffe
 * 5: elephant
 *
 */

for(let i = 0; i < animals.length; i++) {
    console.log(`${i + 1}: ${animals[i]}`);
}
