const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64, 100];

// Find the max grade

// One approach to find the max grade using reduce
const maxGrade = grades.reduce((max, currVal) => {
  //   debugger;
  if (currVal > max) return currVal;
  return max;
});
// console.log(maxGrade);

// const maxGrade = grades.reduce((max, currVal) => Math.max(max, currVal));
// console.log(Math.max(...grades));
// console.log(maxGrade);
// Find the min grade

// We can specify an initial valu as the 2nd argument to reduce:
// arr.reduce(reducerFunction, initialValue)

const total = [10, 20, 30, 40, 50].reduce((prevVal, currVal) => {
  debugger;
  return prevVal + currVal;
}, 1000);
console.log(total);
