let animals = [
  "cat",
  "mouse",
  "monkey",
  "cat",
  "elephant",
  "dog",
  "mouse",
  "giraffe",
  "monkey",
  "monkey",
  "elephant",
];
let animalsNoDuplicates = [];

function filter(array, callback) {
  let result = [];
  for (let item of array) {
    if (callback(item, result)) {
      result.push(item);
    }
  }
  return result;
}

function isNotThere(item, array) {
  return ! array.includes(item);
}

console.log(filter(animals, isNotThere));
