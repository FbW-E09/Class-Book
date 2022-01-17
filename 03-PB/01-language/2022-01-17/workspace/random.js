// Math.random() gives us a random number between 0 (inclusive) and 1 (exclusive)

// 0, 0.01, 0.1, 0.1111 ... 0.999999
let randomNumber = Math.random();

// console.log(randomNumber);

// get a random number between 0 and max (not including max)
let max = 5;
let random2 = Math.floor(Math.random() * max);
// console.log(random2);

// get numbers between 1 and max (including max)
let random3 = Math.ceil(Math.random() * max);
// console.log(random3);

// get numbers between 1 and max (including max)
let random4 = Math.floor(Math.random() * max + 1);
// console.log(random4);


// get a random number between an arbitrary range
// for example: between 10 and 20
// for example: between 5 and 10
// for example: between 23 and 98 

let rangeMin = 100;
let rangeMax = 120;
let randomInRange = Math.floor(Math.random() * (rangeMax - rangeMin) + rangeMin);
/* 
0 => 5
1 => 6
2 => 7
3 => 8
4 => 9

5
6
7
8
9

*/
console.log(randomInRange);


let diceMin = 1;
let diceMax = 6;

let diceRoll = Math.floor(Math.random() * (diceMax - diceMin + 1) + diceMin);
console.log(diceRoll);