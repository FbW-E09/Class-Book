const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

// Tally the votes using reduce
// const results = votes.reduce((tally, val) => {
//   debugger;
//   if (tally[val]) {
//     tally[val]++;
//   } else {
//     tally[val] = 1;
//   }
//   return tally;
// }, {});

const results = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});

console.log(results);
