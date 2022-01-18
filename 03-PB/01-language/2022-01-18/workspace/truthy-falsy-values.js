// falsy values
console.log(undefined, undefined ? "truthy" : "falsy");
console.log(null, null ? "truthy" : "falsy");
console.log(NaN, NaN ? "truthy" : "falsy");
console.log("", "" ? "truthy" : "falsy");
console.log(0, 0 ? "truthy" : "falsy");
console.log(-0, -0 ? "truthy" : "falsy");


// truthy values
console.log(" ", " " ? "truthy" : "falsy");
console.log("pizza", "pizza" ? "truthy" : "falsy");
console.log(-1, -1 ? "truthy" : "falsy");
console.log(5, 5 ? "truthy" : "falsy");


// let username = "zharko";
// console.log(username ? `hello ${username}` : `welcome guest`);

let username = null;
// let displayName = username ? username : "guest";
let displayName = username || "guest";
console.log(displayName);

let isLoggedIn2 = false;
let username2 = "max2";
let displayName2 = (isLoggedIn2 && username2) || "guest";
console.log(displayName2);