// ///////////
// SPREAD ON OBJECTS
/////////////

const feline = {
  legs: 4,
  family: 'Felidae',
};

const canine = {
  family: 'Caninae',
  furry: true,
  legs: 4,
  adorable: false,
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true,
  trained: false,
};

// copy feline properties to house cat
// Add two more:
// isGrumpy : Boolean
// personality: 'fancy'
const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable',
};
// console.log(houseCat);

const catDog = {
  ...canine,
  ...feline,
};
// console.log(catDog);
// console.log(Object.assign({}, dog, canine));

// console.log(dog);

// ORDER MATTERS! Legs will be 3 because we sit it after the spread operator
const tripod = {
  ...canine,
  legs: 3,
};

console.log(tripod);
