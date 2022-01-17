// - Number cannot be parsed (e.g. parseInt("blabla") or Number(undefined))
// - Math operation where the result is not a real number (e.g. Math.sqrt(-1))
// - Operand of an argument is NaN (e.g. 7 ** NaN)
// - Indeterminate form (e.g. 0 * Infinity, or undefined + undefined)
// - Any operation that involves a string and is not an addition operation (e.g. "foo" / 3)


console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(8)); // 2.82... 
console.log(Math.sqrt(-1)); //  NaN

console.log(2 + NaN); // NaN

console.log(2 + (2 * "bla")); // NaN

console.log(isNaN(NaN)); // true
console.log(isNaN(2)); // false
console.log(isNaN(2) ? "2 is NaN" : "2 is a number");
// parseInt("abc") => NaN

// isNaN() implicitly converts what's in parenthesis to a number
console.log(isNaN("abc") ? "'abc' is NaN" : "'abc' is not a NaN");
console.log(isNaN("1234") ? "'1234' is NaN" : "'1234' is NOT a NaN");


// Number.isNaN() doesn't do any implicit conversion
console.log(Number.isNaN("abc") ? "'abc' is NaN" : "'abc' is NOT a NaN");
console.log(Number.isNaN("1234") ? "'1234' is NaN" : "'1234' is NOT a NaN");