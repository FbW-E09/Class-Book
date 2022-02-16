let numbers1 = [2, 6, 9, 1, -4, 100];
let numbers2 = [8, 2, 3, 9, 900, -80];

function ascendingOrder(a, b) {
  return a - b;
}

let numbers1Sorted = [...numbers1].sort(ascendingOrder);
let numbers2Sorted = [...numbers2].sort(ascendingOrder);

console.log(numbers1Sorted);
console.log(numbers2Sorted);

let mergedArrays = numbers1Sorted.concat(numbers2Sorted);
console.log(mergedArrays);

let mergedArraysSorted = mergedArrays.sort(ascendingOrder)
console.log(mergedArraysSorted);
