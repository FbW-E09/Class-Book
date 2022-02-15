// Executes a reducer function
// on each element of the array,
// resulting in a single value.

const nums = [3, 4, 5, 6, 7];

const product = nums.reduce((prevProduct, currentVal) => {
  //   debugger;
  return prevProduct * currentVal;
});
// console.log(product);
// total    currentVal    returnVal
// 3      *       4           12
// 12     *       5           60
// 60     *       6           360
// 360    *       7           2520

//Final Return Value: 2520

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
