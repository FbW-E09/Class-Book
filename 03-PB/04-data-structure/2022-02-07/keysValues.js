// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.

// Example:
// let person = {
//   name: "John",
//   job: "teacher"
// }
// Expected Output:
// {"John": name, "teacher": job}
const stayCation = {
  sofa: 'location',
  comfy: 'status',
};

function copySwitch(obj) {
  // converting to arrays, will be easier to reverse
  const keyValuePairs = Object.entries(obj);
  const reversedArrays = [];

  //   loop over the main array of key value pair arrays
  for (let i = 0; i < keyValuePairs.length; i++) {
    //   reverse each keyValuePair array
    const reversedKeyValues = keyValuePairs[i].reverse();
    reversedArrays.push(reversedKeyValues);
  }

  return Object.fromEntries(reversedArrays);
}

console.log(copySwitch(stayCation));
// console.log(Object.fromEntries(['location', 'sofa']));
