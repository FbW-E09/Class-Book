/**
 * doubles the number: [1, 2, 3] => [2, 4, 6]
 * uppercase strings: ["dish", "fork", "table"] => ["DISH", "FORK", "TABLE"]
 * capitalize strings: ["pizza", "beer", "fries"] => ["Pizza", "Beer", "Fries"]
 */

function map(items, callback) {
  let result = [];
  for (const item of items) {
    result.push(callback(item));
  }
  return result;
}

function double(number) {
  return number * 2;
}

function uppercase(string) {
  return string.toUpperCase();
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

console.log(map([1, 2, 3], double));
console.log(map(["dish", "fork", "table"], uppercase));
console.log(map(["pizza", "beer", "fries"], capitalize));
