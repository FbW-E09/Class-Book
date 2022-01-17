// Math.ceil()

let result1 = Math.ceil(2.2);
console.log("result1", result1);

console.log(Math.ceil(5.9)); // 6
console.log(Math.ceil(10.2)); // 11
console.log(Math.ceil(15.5)); // 16
console.log(Math.ceil(17.1)); // 18
console.log(Math.ceil(-17.1)); // -17

// Math.floor()

let result2 = Math.floor(2.2);
console.log("result2", result2);

console.log(Math.floor(5.6)); // 5
console.log(Math.floor(7.9)); // 7
console.log(Math.floor(10.123567)); // 10

// Math.round()

let result3 = Math.round(2.4);
console.log(result3);
console.log(Math.round(2.5)); // 3

console.log(Math.round(2.49)); // 2

console.log(Math.ceil("abc")); // NaN

// Math.min() and Math.max()

let min = Math.min(1, 2, 3, 4, 5, 6);
console.log(min);
let max = Math.max(1, 2, 3, 4, 5, 6);
console.log(max);

console.log(Math.max(-100, -50, -2));
console.log(Math.min(-100, -50, -2));
console.log(Math.min(-100.4, -500.9, -12));
console.log(Math.min("a", -100.4, "b", -500.9, -12));
console.log(Math.min(10120398234045, 1231345));
console.log(Math.min(999, 100, 1875, 2022));
console.log(Math.max(999, 100, 1875, 2022));
