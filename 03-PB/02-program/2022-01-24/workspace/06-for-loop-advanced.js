let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// find the sum of all the numbers in the array

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(`The total is ${sum}`);

// find the minimum in a list of numbers

// let numbers2 = [1, 2, 99, 0, -5, 234, -9323453254, 1000000, -100, -123, -12308753, 8];
let numbers2 = [8, 0, -2, 1, -4, 12];

let minimum = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] < minimum) {
        minimum = numbers2[i];
    }
}
console.log(`The minimum is ${minimum}`);