let letters = ["a", "b", "c", "d", "e", "f"];

// for (let i = 0; i < letters.length; i++) {
//   let randomIndex = Math.floor(Math.random() * letters.length);
//   let temp = letters[i];
//   letters[i] = letters[randomIndex];
//   letters[randomIndex] = temp;
//   console.log(letters);
// }

// for (let i = letters.length - 1; i >= 0; i--) {
//   let randomIndex = Math.floor(Math.random() * letters.length);
//   let temp = letters[i];
//   letters[i] = letters[randomIndex];
//   letters[randomIndex] = temp;
//   console.log(letters);
// }

for (let i = letters.length - 1; i >= 0; i--) {
  let randomIndex = Math.floor(Math.random() * letters.length);
  [letters[randomIndex], letters[i]] = [letters[i], letters[randomIndex]];
  console.log(letters);
}
