/**
 * A1 - Key Value Pairs
 *
 * Create an object `profileData`.
 * Add 4 key value pairs to the object: `name`,  `surname`, `age` and `city`.
 */

const profileData = {
  name: "John",
  surname: "Smith",
  age: 21,
  city: "New York",
};

/**
 * A-2. Object to Array (5 Points)
 * 
 * Write a function `convertObjectToArray`

 * - It should take an object as an argument.
 * - It should return a nested array of key value pairs.
 */

function convertObjectToArray(object) {
  return Object.entries(object);
}

console.log("A2", convertObjectToArray(profileData));

/**
 * B-1. Data Manipulation (10 Points)

* Create a function `convertArrayData`.

* - It should take an array as an argument.
* - Use array methods to manipulate the array below. 
* - The first two items in the array should switch positions.
* - The third item should be replaced by an item containing "milk".
* - Return the changed array.

input:  ["coffee", "tea", "juice"];
expected output: ["tea", "coffee", "milk"]
 */

let beverages = ["coffee", "tea", "juice"];

function convertArrayData1(array) {
  const convertedArray = [];
  convertedArray.push(array[1]);
  convertedArray.push(array[0]);
  convertedArray.push("milk");
  return convertedArray;
}

console.log("B1", convertArrayData1(beverages));

function convertArrayData2(array) {
  const convertedArray = [];
  const [secondItem, firstItem] = array;
  convertedArray.push(firstItem);
  convertedArray.push(secondItem);
  convertedArray.push("milk");
  return convertedArray;
}

console.log("B1", convertArrayData2(beverages));

function convertArrayData3(array) {
  let arrayClone = [...array];
  // let's remove the last item in the array
  arrayClone.pop();
  let reversedArray = arrayClone.reverse();
  reversedArray.push("milk");

  return reversedArray;
}

console.log("B1", convertArrayData3(beverages));

function convertArrayData4(array) {
  // let's remove the last item in the array
  const slicedArray = array.slice(0, array.length - 1);
  const reversedArray = slicedArray.reverse();
  reversedArray.push("milk");

  return reversedArray;
}

console.log("B1", convertArrayData4(beverages));

/**
 * B-2. Data Conversion (15 Points)

* Create a function `convertArraysToObject`. 

* - It should take two arrays as arguments.
* - first array `cities` should contain city names.
* - second array `areas` should contain strings with the cities areas in square kilometres 
* - convert given arrays into object, with key value pairs using the Array method `reduce`
* - return the object as the result of your function.

    **Original Arrays**
    ```javascript
    let cities = ["Berlin", "Hamburg", "Munich", "Stuttgart", "Duesseldorf"];
    
    let areas = ["891.68 km2", "755.3 km2", "310.7 km2", "207.35 km2", "217.41 km2"];
    ```

    Call your function and log the result to the console.

    **Expected output**
    ```javascript
    > console.log(convertArraysToObject(cities, areas));
    {
    Berlin: '891.68 km2',
    Hamburg: '755.3 km2',
    Munich: '310.7 km2',
    Stuttgart: '207.35 km2',
    Duesseldorf: '217.41 km2'
    }
    ```
 */

let cities = ["Berlin", "Hamburg", "Munich", "Stuttgart", "Duesseldorf"];
let areas = [
  "891.68 km2",
  "755.3 km2",
  "310.7 km2",
  "207.35 km2",
  "217.41 km2",
];

function convertArraysToObject(array1, array2) {
  const result = array1.reduce((acc, item, index) => {
    //console.log(item); // array1[index]
    //console.log(array2[index]);
    acc[item] = array2[index];
    return acc;
  }, {});
  return result;
}

console.log("B2", convertArraysToObject(cities, areas));

/**
 * B-3. Create Grid (10 Points)
* Create a function `createGrid`
* It should return a nested array representing a 2D grid, filled with a char.
* It should accept two arguments: 
    * `size` (which determines the number of nested arrays and the number of elements in each nested array) and 
    * `char` (which determines the characters in each nested array). 

    Call your function and print the return value to the console. 

    **Example and expected output:**
    ```javascript
    console.log(createGrid(3, "*"));
    [ [ '*', '*', '*' ], [ '*', '*', '*' ], [ '*', '*', '*' ] ]
    ```
 */

function createGrid1(size, char) {
  let grid = [];
  let row = [];
  for (let i = 0; i < size; i++) {
    grid.push(row);
    row.push(char);
  }

  return grid;
}

let grid1 = createGrid1(3, "*");

function createGrid2(size, char) {
  let grid = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    grid.push(row);
    for (let j = 0; j < size; j++) {
      row.push(char);
    }
  }

  return grid;
}

let grid2 = createGrid2(3, "*");

grid2[1][1] = "-";
console.log(grid2);
// I want to change the 2nd element of the 2nd row to the dash symbol -

// [ [ '*', '*', '*' ], [ '*', '-', '*' ], [ '*', '*', '*' ] ]

// console.log(createGrid(3, "*"));

/**
 * B-4. Word Converter (10 Points)
 * 
* Create a function `wordConverter`.

* - It should take an array of words as an argument and a string as a word suffix.
* - Use an array method, to add the suffix to the end of all words. 
* - **Important**: Do **not** use a loop to complete this task.
*  Look at the expected output below. 

    **Example**
    ```javascript
    let adjectives = ["smart", "kind", "sweet", "small", "clear"];
    ```
    Call your function and print the returned value to the console.

    **Expected output**
    ```javascript
    > console.log(wordConverter(adjectives, "er"));
    [ 'smarter', 'kinder', 'sweeter', 'smaller', 'clearer' ]
 */

let adjectives = ["smart", "kind", "sweet", "small", "clear"];

function wordConverter(words, suffix) {
  const convertedWords = words.map((word) => word + suffix);
  return convertedWords;
}

console.log(wordConverter(adjectives, "er"));

/**
 * B-5. Hour Calculation (10 Points)
 * 
* Create a function `calculateHours`

* - It should expect an array of objects as an argument (see example below)
* - it should calculate how many hours (total) this person worked in the week based on items in the given array
* **Note**: Assume, that start is always morning time, end is always afternoon. (No overnight shifts to be expected) 

    **Example array of Working Hours**
    ```javascript
    const hourTracking = [
        { day: 'Monday', start: 8, end: 17},
        { day: 'Tuesday', start: 9, end: 15},
        { day: 'Wednesday', start: 10, end: 18},
        { day: 'Thursday', start: 7, end: 14},
        { day: 'Friday', start: 6, end: 12},
    ];
    ```
    Call your function and print the return value to the console.

    **Expected Output**
    ```javascript
    > console.log(calculateHours(hourTracking));
    36
    ```
 */
const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 },
];

function calculateHours(hours) {
  const workingHours = hours.reduce((total, dailyHours) => {
    total += dailyHours.end - dailyHours.start;
    return total;
  }, 0);
  return workingHours;
}

console.log(calculateHours(hourTracking));

/**
 * C - Classes (10 Points)
 * 
* Create a blueprint for a course at DCI - using the `class` syntax in javascript. 

* - Write a class named `Course` 
* - Add a constructor to initialize the properties in the given order.
* - Class' properties: 
    * the `teacher` as a string, 
    * the `type` of course, whether the group is learning "marketing" or "web development"
    * the `number` of students taking the course.
* - Class' methods:
    * `spaceNeeded` that calculates how big a classroom should be depending on the number of students taking the course: 1 student =  2m². 
        * E.g. If a course has 10 students, then return: "The classroom should be 20m²."
    * `details` to return all the information of the course: "This is a web development course taught by John Smith. There are 10 students taking the course." 
        * fill in the `teacher`, `type` and `number` from your class' properties.
    * **Note**: Please use the exact phrases found in the instructions above and just change the output depending on the teacher, course, number of students etc. 

* Create an instance of your class, and call your methods. Printing their result values to the console.

    **Example (for an instance with teacher John, type web development and a number of 22 students)**
    ```javascript
    > console.log(course.spaceNeeded());
    The classroom should be 44m².

    > console.log(course.details());
    This is a web development course taught by John. There are 22 students taking the course.
    ```
 */

class Course {
  constructor(teacher, type, number) {
    this.teacher = teacher;
    this.type = type;
    this.number = number;
  }

  spaceNeeded() {
    return `The classroom should be ${2 * this.number}m²`;
  }
  details() {
    return `This is a ${this.type} course taught by ${this.teacher}. There are ${this.number} students taking the course.`;
  }
}

let courseICoders = new Course("Carlo", "Web Development", 19);

console.log(courseICoders.spaceNeeded());
console.log(courseICoders.details());

/**
 * D-1. Format your string (10 Points)

* Write function `capitalizeFirstLetter` 

* - It should accepts a string as an argument.
* - If the argument is no string (e.g. 123 or true) convert it to a string first.
* - The function should convert the first character of each word to uppercase. 
*   - **Example** the quick brown fox → The Quick Brown Fox. 
* - return the changed string.

* Call your function and print the return value to the console.

    **Example call**
    ```javascript
    > console.log(capitalizeFirstLetter("hey there")); 
    Hey There
    
    > console.log(capitalizeFirstLetter(true));
    True
 */

function capitalizeFirstLetter(input) {
  const string = input.toString();
  // const string = new String(input);
  // const string = "" + input;
  const splitString = string.split(" ");
  const capitalizedArray = splitString.map((word) => {
    const capitalizedWord = word[0].toUpperCase() + word.slice(1);
    // const capitalizedWord = word[0].toUpperCase() + word.substring(1);
    return capitalizedWord;
  });
  return capitalizedArray.join(" ");
}

console.log(capitalizeFirstLetter("hey there"));
console.log(capitalizeFirstLetter("hello"));
console.log(capitalizeFirstLetter("the quick brown fox jumps"));
console.log(capitalizeFirstLetter(true));
console.log(capitalizeFirstLetter(2));

/**
 * Validation (15 Points)
* A PIN is a **P**ersonal **I**dentification **N**umber (as you are used with bank cards and unlocking your mobile phone)
* Create the function `validPin`
    * **Note:** by convention new words in function names (also acronyms) begin with uppercase letters, but continue with lowercase. Write the function as given.
* The function should fulfill the requirements of the unit tests.

**Requirements**:
* The pin code must consist of only numerical digits.
* The pin code must be 4 digits long. 
* The pin should have at least **two** different digits.
* The pin code's last digit should be even (0, 2, 4, 6, 8).
* The sum of the pin codes digits should add up to at least 5. 

* The function should print `true` if the pin meets all the requirements and `false` if it does not. 

* Call your function with some examples, and print the return values to the console.

 */

function validPin(code) {
  const number = Number(code);

  if (isNaN(number)) {
    return false;
  }

  if (code.length !== 4) {
    return false;
  }

  /*
  let mySet = new Set(code);
  if (mySet.size < 2) {
      return false
  }
  */

  /* 
    let pinArraySorted = pin.split("").sort();
    let hasAtLeast2DiffDigits = pinArraySorted[0] !== pinArraySorted[3]; 

    // 1234 sort => 1234 OK
    // 1111 sort => 1111 NOT OK 
    // 1221 sort => 1122 OK
    // 9221 sort => 1229 OK
  */

  /* 
    if (pin.split('').every((num) => num === pin[0])) {
        return false 
    */
  let codeFirstCharacter = code[0];
  let allCharactersEqual = true;
  for (let i = 0; i < code.length; i++) {
    if (codeFirstCharacter !== code[i]) {
      allCharactersEqual = false;
    }
  }

  if (allCharactersEqual) {
    return false;
  }

  if (code[code.length - 1] % 2 === 1) {
    return false;
  }

  let sum = code
    .split("")
    .reduce((total, number) => total + parseInt(number), 0);

  if (sum < 5) {
    return false;
  }

  return true;
}

console.log("1234", validPin("1234"));
console.log("1111", validPin("1111"));
console.log("1119", validPin("1119"));
console.log("1235", validPin("1235")); // last number should be even
console.log("wwww", validPin("wwww")); // should only consist of numbers
console.log("12345", validPin("12345")); // should be 4 digits, not 5
console.log("2222", validPin("2222")); // not at least 2 different digits
console.log("1000", validPin("1000")); // sum of digits is less 5
console.log("2224", validPin("2224"));

function validPin2(code) {
  const number = Number(code);

  //* The pin code must consist of only numerical digits.
  const isValidNumber = !isNaN(number);

  //* The pin code must be 4 digits long.
  const is4DigitLong = code.length === 4;

  //* The pin should have at least **two** different digits.

  let hasDifferentDigits = false;
  let codeFirstCharacter = code[0];
  for (let i = 0; i < code.length; i++) {
    if (codeFirstCharacter !== code[i]) {
      hasDifferentDigits = true;
    }
  }
  //* The pin code's last digit should be even (0, 2, 4, 6, 8).

  const isLastDigitEven = code[code.length - 1] % 2 === 0;

  //* The sum of the pin codes digits should add up to at least 5.
  let sum = code
    .split("")
    .reduce((total, number) => total + parseInt(number), 0);

  const isSumAtLeast5 = sum >= 5;

  if (
    isValidNumber &&
    is4DigitLong &&
    hasDifferentDigits &&
    isLastDigitEven &&
    isSumAtLeast5
  ) {
    return true;
  } else {
    return false;
  }
}

console.log("1234", validPin2("1234"));
console.log("1111", validPin2("1111"));
console.log("1119", validPin2("1119"));
console.log("1235", validPin2("1235")); // last number should be even
console.log("wwww", validPin2("wwww")); // should only consist of numbers
console.log("12345", validPin2("12345")); // should be 4 digits, not 5
console.log("2222", validPin2("2222")); // not at least 2 different digits
console.log("1000", validPin2("1000")); // sum of digits is less 5
console.log("2224", validPin2("2224"));
