// Basic Arithmetic Problems

// Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold?
// 6450 / 15
const totalSales = 6450;
const ticketPrice = 15;
const ticketsSold = totalSales / ticketPrice;
console.log("Q1", ticketsSold);

// Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
const weeklyIncome = 500;
const weeksInAYear = 52;
const yearlyIncome = weeklyIncome * weeksInAYear;

console.log("Q2", yearlyIncome);

// Percentage

// Q3. Calculate the percentage of 17/30. Expected output: number%

let a = 17;
let b = 30;
let percentage = (a / b) * 100;
let percentageDisplay = `${percentage}%`;
let percentageDisplay2 = percentage + "%";
console.log("Q3", percentageDisplay);
console.log("Q3", percentage + "%");

// Geometry Formulas

// Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
let squareSide = 4.75;
let squarePerimeter = squareSide * 4;
let squarePerimeter2 = squareSide + squareSide + squareSide + squareSide;

console.log("Q4", squarePerimeter + "cm");

// Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
let triangleSideA = 5;
let triangleSideB = 6;
let triangleSideC = 7;
let trianglePerimeter = triangleSideA + triangleSideB + triangleSideC;
console.log("Q5", trianglePerimeter + "cm");

// Q6. Calculate the area of a square. Each side is 5cm.

let square2Side = 5;
let squareArea = square2Side * square2Side;
let squareArea2 = square2Side ** 2;
console.log("Q6", squareArea + "cm2");

// Q7. Calculate the area of an right-angled triangle. Assume the length of the sides are 3cm, 4cm, 5cm.
let triangle2SideA = 3;
let triangle2SideB = 4;
let triangle2SideC = 5;
let triangle2Area = (triangle2SideA * triangle2SideB) / 2;
let triangle2Area2 = triangle2SideA * triangle2SideB * 0.5;

console.log("Q7", triangle2Area);

// Q8. Calculate the volume of a cube. Length of each side is 9cm.

let cubeSide = 9;
let cubeVolume = cubeSide * cubeSide * cubeSide;
let cubeVolume2 = cubeSide ** 3;
console.log("Q8", cubeVolume);

// Consumer Formula

// Q9. Calculate the three bills including tips: €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip

let bill1 = 22.35;
let bill2 = 26.67;
let bill3 = 35.92;

let tip1 = 0.1;
let tip2 = 0.15;
let tip3 = 0.2;

let total1 = bill1 + bill1 * tip1;
let total2 = bill2 + bill2 * tip2;
let total3 = bill3 + bill3 * tip3;
// let total1 = bill1 * 1.1 ;
// let total2 = bill2 * 1.15;
// let total3 = bill3 * 1.2;

// let total1 = (22.35 * 10) / 100 + 22.35;
// let total2 = (26.67 * 15) / 100 + 26.67;
// let total3 = (35.92 * 20) / 100 + 35.92;

console.log("Q9", total1 + total2 + total3);

// Average

// Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4 What is Noemy's average hours worked per day?

/* to calculate an average of a list of numbers:
- we sum all the numbers together
- we divide the total by how many numbers we had
*/

let totalWorkHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
let totalWorkDays = 10;
let average = totalWorkHours / totalWorkDays;
console.log("Q10", average);


// Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . 
// After he took his sixth math test, the average is now 85. 
// What did he score on the sixth test? Expected output: Score in the sixth test: --.

let firstFiveResultsTotal = 75 + 70 + 85 + 90 + 100;
let averageOf6Tests = 85;
let sixthTestTotal = averageOf6Tests * 6;
let sixthTestResult = sixthTestTotal - firstFiveResultsTotal;

console.log(`Q11: Score in the sixth test: ${sixthTestResult}`);

// Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments.
// He has taken 8 assessments and his average is 78%. 
// What is the minimum percentage he must get in his last assessment to ensure he gets a first class? Expected output: James needs a minimum of --% to get an 80% average.

let eightTestsAverage = 78; 
let eightTestsTotal = eightTestsAverage * 8;
let averageGoal = 80 * 9;
let resultNeeded = averageGoal - eightTestsTotal;
console.log(`Q12: James needs a minimum of ${resultNeeded}% to get an 80% average.`);