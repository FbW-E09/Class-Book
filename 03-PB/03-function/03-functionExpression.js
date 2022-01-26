// There is another syntax for creating a function that is called a Function Expression.
// The function is created and assigned to the variable explicitly, like any other value. No matter how the function is defined, it’s just a value stored in the variable sayHi.
let hi = 'hi';

const sayHi = function () {
  console.log('hi');
  return 'hello yo';
};

const hello = sayHi;
console.log(hello);

const square = function (number) {
  console.log(number);
  return number * number;
};
// console.log(square(4));

const fourSquared = square(4);
console.log(fourSquared);
