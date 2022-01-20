// let hour = 7;

// if (hour > 8) {
//   console.log("Wake up!");
// }

// console.log("After the if");

let day = "Sunday";
if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend!");
}

let isPizzaWithPineapple = false;
if (isPizzaWithPineapple) {
  console.log("Get a new pizza");
}



let money = 15;
let applePrice = 2;
let breadPrice = 3;

console.log("Let's buy 4 apples");
money = money - (applePrice * 4);

if (money > breadPrice) {
  console.log("Let's buy some bread");
  money = money - breadPrice;
}

console.log("Money left:", money);


let hour = 9;

if (hour > 8) {
  console.log("Wake up!");
} else {
  console.log("Keep sleeping");
}

console.log("after if...else");