/**
 * You get sent to the supermarket to buy some stuff for dinner.
 *
 * Your instructions are:
 *
 * - buy vegetables for the soup
 * - if after that you still have enough money, buy some bread
 * - if after that you still have enough money, buy also some cheese
 * - if after that you still have enough money, buy also some dessert
 *
 */

let budget = 10000;
let vegetablesPrice = 8;
let breadPrice = 5;
let cheesePrice = 6;
let dessertPrice = 12;

if (budget >= vegetablesPrice) {
  console.log("Buy vegetables");
  budget -= vegetablesPrice;
}

if (budget >= breadPrice) {
  console.log("Buy bread");
  budget -= breadPrice;
}

if (budget >= cheesePrice) {
  console.log("Buy cheese");
  budget -= cheesePrice;
}

if (budget >= dessertPrice) {
  console.log("Buy dessert");
  budget -= dessertPrice;
}

console.log("remaining budget:", budget);

/**
 * You have to buy ice cream for dessert.
 *
 * Your instructions are:
 *
 * - buy hazelnut flavor
 * - if that's not available, buy stracciatella
 * - if that's not available, buy vanilla
 * - if none of the above is available, just buy chocolate
 *
 */

let isHazelnutAvailable = false;
let isStracciatellaAvailable = false;
let isVanillaAvailable = true;

if (isHazelnutAvailable) {
  console.log("Buy hazelnut");
} else if (isStracciatellaAvailable) {
  console.log("Buy stracciatella");
} else if (isVanillaAvailable) {
  console.log("Buy vanilla");
} else {
  console.log("Buy chocolate");
}







let bmiMark = 100;
let bmiJohn = 80;

console.log(`Is Mark's BMI higher than John's? Why yes, it's ${bmiMark > bmiJohn}, it is`)