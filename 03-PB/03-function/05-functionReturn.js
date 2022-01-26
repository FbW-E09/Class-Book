// A return statement determines the value the function returns.
// A return keyword without an expression after it will cause the function to return undefined.
// Functions that don’t have a return statement at all return undefined.

const checkAge = (age) => {
  if (age > 17) {
    return true;
  } else {
    return false;
  }
};

const letDrive = (age) => {
  console.log('log one');
  if (!checkAge(age)) {
    return `you can't drive`;
  }
  console.log('log two');
  return 'you can drive';
};
// const bob = letDrive(15);

console.log(letDrive(15));
