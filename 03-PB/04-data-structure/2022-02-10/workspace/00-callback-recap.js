function simpleMap(number, callback) {
  let result = callback(number);

  return result;
}

function double(number) {
  return number * 2;
}

console.log(simpleMap(2, double)); // expected output: 4
console.log(simpleMap(3, double)); // expected output: 6
console.log(simpleMap(50, double)); // expected output: 100
console.log(simpleMap(0, double)); // expected output: 0

console.log("------");

function map(items, callback) {
  let result = [];
  for (const item of items) {
    result.push(callback(item));
  }
  return result;
}

function add900(number) {
  return number + 900;
}

const reverseString = (string) => string.split("").reverse().join("");

console.log(map([1, 2, 3], add900)); // expected output: [901, 902, 903]
console.log(map([2, 4, 10], (number) => number / 2)); // expected output: [1, 2, 5]
console.log(map(["Rufus", "Lisa", "July"], reverseString)); // expected output: ["sufuR", "asiL", "yluJ"]

console.log("------");

// ["red t-shirt", "blue jeans", "green shirt", "green hat", "red glasses"] => ["green shirt", "green hat"]
// [9.99, 100, 299.99, 27.99, 2.99, 99.99] => [100, 299.99]
// [1, 2, 3, 4, 5, 6] => [2, 4, 6]

function filter(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      result.push(item);
    }
  }

  return result;
}

const containsGreen = (string) => string.toLowerCase().includes("green");

function containsGreen2(string) {
  return string.toLowerCase().includes("green");
}

console.log(
  filter(
    ["red t-shirt", "blue jeans", "green shirt", "green hat", "red glasses"],
    containsGreen
  )
);

console.log(
  filter([9.99, 100, 299.99, 27.99, 2.99, 99.99], (number) => number >= 100)
);

console.log(filter([1, 2, 3, 4, 5, 6], (number) => number % 2 === 0));

let product = "green hoodie";

console.log(containsGreen(product));

console.log("----------");
/**
 * The filter() function takes an array and a function in input
 *
 * If the result of the callback is true, it pushes an item to the array, otherwise it ignores the item
 * It returns the filtered array
 *
 * Complete the code below to get the expected output
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

function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 === 1;
}

function isGreaterThan5(number) {
  return number > 5;
}

const isGreaterThan5_2 = function (number) {
  return number > 5;
};

const isGreaterThan5_arrow = (number) => {
  return number > 5;
};

const isGreaterThan5_arrow_short = (number) => number > 5;

console.log(filter([1, 2, 3, 4, 5], isEven)); // expected output: [2, 4]
console.log(filter([1, 2, 3, 4, 5], isOdd)); // expected output: [1, 3, 5]
console.log(
  filter(["pizza", "pasta", "ice cream", "potato", "broccoli"], (item) =>
    item.startsWith("p")
  )
); // expected output: ["pizza, "pasta", "potato"]

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (number) => number > 5)); // expected output: [6, 7, 8, 9, 10]
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isGreaterThan5)); // expected output: [6, 7, 8, 9, 10]
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isGreaterThan5_2)); // expected output: [6, 7, 8, 9, 10]
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isGreaterThan5_arrow)); // expected output: [6, 7, 8, 9, 10]
console.log(
  filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isGreaterThan5_arrow_short)
); // expected output: [6, 7, 8, 9, 10]

console.log(
  filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (number) {
    return number > 5;
  })
); // expected output: [6, 7, 8, 9, 10]
