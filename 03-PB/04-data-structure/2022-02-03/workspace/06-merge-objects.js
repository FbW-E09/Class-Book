let vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };
let someConsonants = { b: 2, c: 3, d: 4 };

// let's merge the content of the 2 objects into a new one

let letters = Object.assign(vowels, someConsonants);

console.log(letters);
