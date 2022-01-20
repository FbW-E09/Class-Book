let action = "work";
let tired = true;

// if (tired === true) {
//   let action = "Take a nap";
//   console.log("Am I tired?", tired);
//   console.log(action);
// }

if (tired === true) {
  action = "Take a nap";
  //   console.log("Am I tired?", tired);
}

console.log("What shall I do?", action);

const x = 100;

if (x > 50) {
  const x = 9;
  console.log("first console.log", x); // 9
}
console.log("second console.log", x); // 100

if (x > 50) {
  let x = undefined;
  x = 999;
  console.log("first console.log", x); // 9
}

if (x > 50) {
  let x = 9;
  console.log("first console.log", x); // 9
}

if (x > 50) {
  let x = 9;
  console.log("first console.log", x); // 9
}

if (x > 50) {
  let x = 9;
  console.log("first console.log", x); // 9
}