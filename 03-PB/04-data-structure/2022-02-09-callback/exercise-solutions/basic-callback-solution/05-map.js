/**
 * The map() function below takes a number and a function in input
 * 
 * Write the 3 functions and complete the calls to map() in order to get the expected output
 * 
 */

 function map(items, callback) {
    let result = [];
    for (const item of items) {
        result.push(callback(item));
    }
    return result;
  }
  

  console.log(map([1, 2, 3], (number) => number + 900 )); // expected output: [901, 902, 903]
  console.log(map([2, 4, 10], (number) => number / 2)); // expected output: [1, 2, 5] 
  console.log(map(["Rufus", "Lisa", "July"], (string) => string.split("").reverse().join(""))); // expected output: ["sufuR", "asiL", "yluJ"]
  