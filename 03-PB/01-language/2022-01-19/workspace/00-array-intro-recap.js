let animal = "dog";

let animals = ["cat", "dog", "giraffe", "mouse", "bird"];

let animalsCount = animals.length;

console.log(`We have a total of ${animalsCount} animals`);

let secondAnimal = animals[1];
console.log(`The second animal is the ${secondAnimal}`);

let lastAnimal = animals[animals.length - 1];
console.log(`The last animal is the ${lastAnimal}`);

// let's replace the mouse with a horse 
let newAnimal = "horse";
animals[3] = newAnimal;
console.log("After replacing the mouse with the horse, our animals are:", animals);

// an empty array is an array with no elements and its length is 0
let books = [];
let booksQuantity = books.length;
console.log(`In our bookshelf we have ${booksQuantity} books, and they are:`, books);
console.log(`The first book in our bookshelf is ${books[0]}`);

let people = ["john"]; // length is 1
let emptyArray = []; // length is 0

let letter = "a"; // length is 1
let emptyString = ""; // length is 0

// this is a 2-dimensional array
/* let table = [
    [1, 2, 3], // first row
    [4, 5, 6], // second row
    [7, 8, 9]  // third row
];
*/
let table = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(`The array table has ${table.length} elements`)
console.log(`The indexes for number five is:`,  table[1][1])

let secondRow = table[1];
console.log("Second row is an array:", secondRow);
let secondElementSecondRow = secondRow[1];
console.log("The second element of the second row is:", secondElementSecondRow);

let lastRow = table[table.length - 1];
console.log("The last row of the table is:", lastRow)

let lastElementLastRow = lastRow[lastRow.length - 1];
console.log("The last element of the last row is:", lastElementLastRow);

const numbers = [1, 2, 3, 4, 5];
// numbers = [1, 2, 3, 4, 5];

numbers[2] = 99;
console.log(numbers);

console.log([1, 2, 3] === [1, 2, 3]); // false

console.log([] === []); // false

let a = [1, 2, 3];
let b = [1, 2, 3];
console.log("is a equal to b?", a === b);

console.log("is a equal to a?", a === a);

let myArray = [1, 2, 3];
let myArrayCopy = myArray;

myArray[1] = 99;
console.log("is myArray equal to myArrayCopy?", myArray === myArrayCopy);
console.log("myArray and myArrayCopy:", myArray, myArrayCopy);

// myArray: [1, 99, 3]
// myArrayCopy: [1, 2, 3]



let x = 5;
let y = x;
x = 6;
console.log("now y is equal to:", y);

