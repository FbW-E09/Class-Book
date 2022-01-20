// let firstName, givenName;

let firstName; // undefined
let givenName; // undefined

console.log(firstName, givenName);

// firstName = "John";

let name = givenName || firstName || "Anonymous";

console.log(name);