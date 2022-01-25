// let's fill this empty array with all the even numbers from 0 to 100
let evenNumbers = [];

// 0 => evenNumbers[0] = 0
// 2 => evenNumbers[2] = 2
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        // evenNumbers[i] = i; 
        evenNumbers.push(i);
    }
}

console.log(evenNumbers);


// transform a string into an array without using split()

let stringArray = [];
let string = "hello";
for (let i = 0; i < string.length; i++) {
    // stringArray[i] = string[i];
    stringArray.push(string[i])
}
console.log(stringArray);