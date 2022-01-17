## Topics

Number:
- Combining strings and numbers with +
- Integers vs. Floats
- Converting strings into Numbers: `parseInt()`, `parseFloat()`
- Using modulo

Math:
- Rounding up with `Math.ceil()`
- Rounding down with `Math.floor()`
- Getting random numbers with `Math.random()`
- getting random numbers within a certain range
- Maximum and minimum with `Math.max()`, `Math.min()`

Number Pitfalls:
- Dealing with NaN: `isNaN(<expression>)`, `typeof NaN`
- Very long numbers: `e`, rounding errors
- Dealing with rounding errors: `Number.prototype.toFixed()`
- Division pitfalls: Dealing with `Infinity`



## NaN

There are five different types of operations that return NaN:

- Number cannot be parsed (e.g. parseInt("blabla") or Number(undefined))
- Math operation where the result is not a real number (e.g. Math.sqrt(-1))
- Operand of an argument is NaN (e.g. 7 ** NaN)
- Indeterminate form (e.g. 0 * Infinity, or undefined + undefined)
- Any operation that involves a string and is not an addition operation (e.g. "foo" / 3)

