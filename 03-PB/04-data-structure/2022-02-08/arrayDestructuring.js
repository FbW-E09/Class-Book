// /////
//  ARRAY DESTRUCTURING
/////////

const raceResults = [
  'Eliud Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonce Simbu',
  'Jared Ward',
];
// Old laborious way
// let gold = raceResults[0];
// let silver = raceResults[1];
// let bronze = raceResults[2];

// Using Destructuring
// const [gold, silver, bronze] = raceResults;
// console.log(gold, silver, bronze);

// skip items by just putting in commas
const [first, , , fourth] = raceResults;
// console.log(first, fourth);

const [winner, ...others] = raceResults;
// console.log(winner, others);
// itemName, category, sku, inventory
const data = 'Football,Sports,38802,34';
const itemData = data.split(',');
console.log(itemData);
const [itemName, category, sku, inventory] = itemData;
console.log({ itemName, category, sku, inventory });
