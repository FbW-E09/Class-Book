// Write a program to check if one of two numbers passed in as parameters equals 100 or if they add up to 100

// function equalsHundred(num1, num2) {
//   if (num1 + num2 === 100 || num1 === 100 || num2 === 100) {
//     return true;
//   }
//   return false;
// }
// console.log(40 + 50 === 100 || 40 === 100 || 50 === 100);

const equalsHundred = (num1, num2) =>
  num1 + num2 === 100 || num1 === 100 || num2 === 100;
console.log(equalsHundred(50, 50));
