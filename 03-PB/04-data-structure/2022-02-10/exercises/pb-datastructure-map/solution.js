// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//1
function camelize(str) {
  return str
    .split("-") // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => {
  // create a new object with the properties we need
  let result = {
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
  };
  // return the new object
  return result;
});

// alternative solution
/** 
 * we can return a new object directly from the arrow function,
 * but we have to add round parenthesis around it:
 * the reason is that if we don't add this extra parenthesis, javascript
 * won't understand that we want to return an object, it will just think
 * that we are starting the block containing the body of the arrow function
*/
let usersMapped2 = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

/*   usersMapped = [
      { fullName: "John Smith", id: 1 },
      { fullName: "Pete Hunt", id: 2 },
      { fullName: "Mary Key", id: 3 }
    ] */

console.log(usersMapped); 
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
