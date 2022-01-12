/*
== equality // don't use this one
!= inequality // don't use this one

=== strict equality
!== strict inequality

>
<
>=
<=
*/

2 === 2; // true
2 === 5; // false
"carlo" === "carlo"; // true
"Carlo" === "carlo"; // false

2 === "2"; // false

"c" === 'c'; // true

// is 2 different than 2?
2 !== 2; // false
2 !== 3; // true
"Carlo" !== "carlo"; // true


2 > 3; // false

2 < 3; // true

2 > 2; // false

2 >= 2; // true

2 <= 2; // true

-1 < 4; // true

-100 > -5; // false 

"mary shelley" === "maryshelley"; // false

"     " === " "; // false


// ==

2 == 2; // true 
2 == "2"; // false 



// don't chain comparison operators together

// 2 === 2 === 2; // true

// true === 2; // false

// let x = 4;

// 2 < x < 10; // 

// true < 10; // 

let totalToPay = 299;
let moneyAvailable = 100;

moneyAvailable >= totalToPay;



let oranges = 5;
let apples = 2;

console.log("1. equal?", oranges === apples);
console.log("2. not equal", oranges === apples);

console.log(1, 2, 3, 4, 6, 7, 8);


let name = "carlo";
console.log("My name is " + name);
console.log("My name is", name);

console.log(`My name is ${name}`);