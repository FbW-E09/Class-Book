let a = 4;

const string = "hello";

a = 5;



/** 
 * hoisting
 * 
 * a hoisted variable exist prior to its declaration
 * 
 * - variables declared with "var" are hoisted
 * - traditional function declarations are also hoisted
 **/ 

console.log("n here is", n);

var n = 5;


console.log("x here is", x);
let x = 6;


// traditional function declarations are hoisted
function sum(a, b) {
    return a + b;
}


// this is not hoisted
let sum2 = function(a, b) {
    return a + b;
}



/**
 * Another difference between let, const and var is that when using "var" we can declare
 * more than 1 variable with the same name
 * 
 * With let and const we can't, we get JavaScript errors
 */

// error
// let y = 6;
// let y = 7;

// this is ok
var z = 6;
var z = 7;