// an expression in JavaScript is everything that produces a value
// values, like 2, true, "a", are also considered expressions
// expressions are things you can put on the right side of an assignment statement

let a = 2;

let tired = true;
let action = tired ? "go to sleep" : "keep working";
console.log(tired ? "go to sleep" : "keep working")

console.log(`Now I want to ${tired ? "go to sleep" : "keep working"}`)

day = "Tuesday";
let action2 = day === "Monday" ? "ugh" : day === "Tuesday" ? "uff" : day === "Wednesday" ? "argh": "...";

console.log(action2);

// if (tired) {
//     console.log("go to sleep");
// } else {
//     console.log("keep working");
// }




console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.min([1, 2, 3, 4, 5].join(" ")));
console.log(Math.min("1,2,3,4,5"));
console.log(Math.min("12345"));
console.log(Math.min("1 2 3 4 5"));

