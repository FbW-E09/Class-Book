let x = 3;
console.log(`is x = ${x} bigger than 5 and smaller than 10?`, 5 < x < 10); // wrong solution

// 5 < x < 10
// (5 < x) < 10
// (5 < 3) < 10
// false < 10
// 0 < 10
// true

// right solutions
console.log(`is x = ${x} bigger than 5 and smaller than 10?`, 5 < x && x < 10);
console.log(`is x = ${x} bigger than 5 and smaller than 10?`, x > 5 && x < 10);
