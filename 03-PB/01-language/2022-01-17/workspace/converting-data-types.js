// 2
// 2.8
// "hello"
// '123'

// trying to add together a number to a string, we get a string in result
// JavaScript doesn't perform an addition, it performs a string concatenation
let result = 2 + "234";
console.log(result, typeof result);
result = "234" + 2;
console.log(result, typeof result);

// if we use other operators with string and numbers, JavaScript tries to convert the string into a number
// and then perform the arithmetical operation
let result2 = 2 * "123";
console.log(result2, typeof result2);

let result3 = 4 / "2";
console.log(result3, typeof result3);

let result4 = 8 - "3";
console.log(result4, typeof result4);

// NaN - Not a Number
let result5 = 2 * "abc";
console.log(result5, typeof NaN);

console.log(undefined + undefined);
console.log(2 + undefined);


// parseInt() - parse integer
let number = parseInt("123");
console.log(number, typeof number);

number = parseInt("2.8");
console.log(number, typeof number);

number = parseInt("abc");
console.log(number, typeof number);

number = parseInt("abc123");
console.log(number, typeof number);

number = parseInt("23f");
console.log(number, typeof number);

number = parseInt("23ff1");
console.log(number, typeof number);

// number = parseInt("11", 2);
// console.log("---", number, typeof number);


// parseFloat()

let float = parseFloat("2.2");
console.log(float, typeof float);

float = parseFloat("abc");
console.log(float, typeof float);

float = parseFloat("2");
console.log(float, typeof float);

float = parseFloat("2");
console.log(float, typeof float);