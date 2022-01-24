/**
 * for loop:
 * 
 * The for loop executes the code inside as long as the condition is true
 * 
 * initialisation: an expression that is executed only once, when we enter the loop - let i = 0
 * condition: an expression that is evaluated at the beginning of every loop iteration - i < 10
 *      - if the expression is false, we exit the loop
 * update: an expression that is executed at the end of every loop iteration - i = i + 1
 * 
 * 
 * initialisation: let i = 0;
 * condition: i < 10 // 0 < 10
 * code: console.log(i) // 0
 * 
 * updated: i = i + 1; // 1
 * condition: i < 10 // 1 < 10
 * code: console.log(i) // 1
 * 
 * updated: i = i + 1; // 2
 * condition: i < 10 // 2 < 10
 * code: console.log(i) // 2
 * 
 * updated: i = i + 1; // 3
 * condition: i < 10 // 3 < 10
 * code: console.log(i) // 3
 */

console.log("before the loop");
for (let i = 0; i < 10; i = i + 1) {
    console.log(i);
}

console.log("hey");

/**
 * shortcut for incrementing a variable:
 * i = i + 1;
 * i += 1;
 * i++;
 * 
 * shortcut for decrementing a variable:
 * i = i - 1;
 * i -= 1;
 * i--;
 */

for (let i = 0; i < 10; i++) {
    console.log(i);
}


// a loop that does a countdown from 10 to 0
console.log("start countdown");
for(let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log("countdown over");

// a loop that does a countdown from 10 to 1
console.log("start countdown from 10 to 1");
for(let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("countdown over");

console.log("start countdown from 10 to 1");
for(let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("countdown over");

// console.log("start countdown");
// for(let i = 10; i !== 0; i--) {
//     console.log(i);
// }
// console.log("countdown over");

// a loop that does a countdown from 10 to 2
console.log("start countdown from 10 to 2");
for(let i = 10; i > 1; i--) {
    console.log(i);
}
console.log("countdown over");


console.log();
console.log("=========================");
console.log();

// an infinite loop
// for(let i = 10; i > 1; i++) {
//     console.log(i);
// }