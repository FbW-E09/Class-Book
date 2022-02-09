/**
 * strings that contain "green": ["red t-shirt", "blue jeans", "green shirt", "green hat", "red glasses"] => ["green shirt", "green hat"]
 * numbers larger equal than 100: [9.99, 100, 299.99, 27.99, 2.99, 99.99] => [100, 299.99]
 * even numbers: [1, 2, 3, 4, 5, 6] => [2, 4, 6]
 *
 */

function filter(array, callback) {
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}

function containsGreen(string) {
  return string.includes("green");
}
function isLargerEqualThan100(number) {
  return number >= 100;
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(
  filter(
    ["red t-shirt", "blue jeans", "green shirt", "green hat", "red glasses"],
    containsGreen
  )
);
console.log(
  filter([9.99, 100, 299.99, 27.99, 2.99, 99.99], isLargerEqualThan100)
);
console.log(filter([1, 2, 3, 4, 5, 6], isEven));
