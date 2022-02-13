//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)

// 2. Write a function evenNumberInRange(arr, a, b) that gets an array arr and 2 number min and max.
// It returns an array containing all even number that are larger equal than min and smaller equal than max

function evenNumbersInRange(array, min, max) {
  return array.filter(
    (number) => number >= min && number <= max && number % 2 === 0
  );
}

console.log(evenNumbersInRange([1, 2, 3, 4, 5, 6, 7, 8, 14], 4, 12)); // [4, 6, 8]
