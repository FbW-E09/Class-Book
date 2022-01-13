// ternary operator

let age = 20;
let canHaveALicense = age >= 18 ? true : false;


let isRaining = false;
let action = isRaining ? "take the umbrella" : "just go out";



let name = "Jess";
let isLoggedIn = false;
let welcomeMessage = isLoggedIn ? `Hello, ${name}!` : "Hello!";
console.log(welcomeMessage);



// Check whether mangoes, apples and oranges are equal.
let apples = 6;
let oranges = 6;
let mangoes = 6;

// let areAllEqual = apples === oranges === mangoes;
/* 

- check if mangoes and apples are equal
    - if they are equal, just check if mangoes and oranges are also equal
    - if they are not equal, the result is already false

*/

let areAllEqual = mangoes === apples ? mangoes === oranges : true; 
console.log(mangoes, oranges, apples, areAllEqual);