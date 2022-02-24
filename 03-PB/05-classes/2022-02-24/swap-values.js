let a = 5;
let b = 8;

let temp = a;

console.log(`a: ${a}, b: ${b}, temp: ${temp}`);

a = b;
console.log(`a: ${a}, b: ${b}, temp: ${temp}`);

b = temp;
console.log(`a: ${a}, b: ${b}`);
// swap the values of the 2 variables so that after "a" contains 8, and "b" contains 5

[b, a] = [a, b];

// console.log(`a: ${a}, b: ${b}`);

console.log(a); // 8
console.log(b); // 5

// ----------------

let c = 10;
let d = 5;

c = c + d; // 15
d = c - d; // 15 - 5 => 10
c = c - d; // 15 - 10 => 5

// ----------------

let e = 5;
let f = 8;
f = (function (e) {
  console.log("e inside function", e);
  return e;
})(e, (e = f));

console.log("e", e);
console.log("f", f);
