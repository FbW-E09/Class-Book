/**
 * The map() function below takes a number and a function in input
 * 
 * Complete its code so that it returns the expected output
 */

 function map(items, callback) {
    let result = [];
    for (const item of items) {
        result.push(callback(item));
    }
  
    return result;
  }
  
  function double(number) {
    return number * 2;
  }

  function square(number) {
    return number * number;
  }
  
  function greet(string) {
    return "Hey " + string;
  }

  function capitalizeFirstAndLast(string) {
    return (
      string[0].toUpperCase() +
      string.slice(1, string.length - 1) +
      string[string.length - 1].toUpperCase()
    );
  }

  console.log(map([1, 2, 3], double)); // expected output: [2, 4, 6]
  console.log(map([2, 4, 10], square)); // expected output: [4, 16, 100] 
  console.log(map(["pizza", "broccoli", "ice cream"], capitalizeFirstAndLast)); // expected output: ["PizzA", "BroccolI", "Ice creaM"]
  console.log(map(["Rufus", "Lisa", "July"], greet)); // expected output: ["Hey Rufus", "Hey Lisa", "Hey July"]
  