let person = {
  firstName: "Mike",
  lastName: "Smith",
  age: 28,
  address: {
    street: "somestreet",
    number: 16,
    city: "Berlin",
  },
};

/**
 * firstName
 * lastName
 * age
 * address
 */

/**
 * print all the keys in an object
 */
for (const key in person) {
  console.log(key);
}

/**
 * print all the values in an object
 */
for (const key in person) {
  console.log(person[key]);
}

/**
 * print the key that has a value "Smith"
 */
for (const key in person) {
  if (person[key] === "Smith") {
    console.log(key);
  }
}

/**
 * Do the same as above, but using Object.entries()
 * 
 * entry[0] contains the key
 * entry[1] contains the value
 */
for (const entry of Object.entries(person)) {
  if (entry[1] === "Smith") {
    console.log(entry[0]);
  }
}


/**
 * loop through both main object and nested object
 */

for (const key in person) {
  if (typeof person[key] === "object") {
    console.log(key);
    // loop throught this other object
    for (const nestedObjectKey in person[key]) {
      console.log(" " + nestedObjectKey);
    }
  } else {
    console.log(key);
  }
}