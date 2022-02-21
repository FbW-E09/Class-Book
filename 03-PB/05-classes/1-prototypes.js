// String.prototype is a "template object" for every string
String.prototype;

String.prototype.yell = function () {
  return `WHAAAAAA ${this.toUpperCase()}!!!!!`;
};

// console.log('bumblee'.yell());
// console.log('bumbleBee'.yell());

// Array.prototype is a "template object" for every array
Array.prototype.push;

Array.prototype.pop = function () {
  return `I'LL NEVER POP IT LIKE IT'S HOT!`;
};

const nums = [1, 2, 3, 4];
console.log(nums.pop());
console.log(nums);
