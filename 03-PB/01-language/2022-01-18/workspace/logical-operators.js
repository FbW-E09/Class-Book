/**
 * Logical operators
 *
 * && - logical AND
 * || - logical OR
 * !  - logical NOT
 */

/**
 *  Logical AND
 *
 * With AND, a condition is true when "all" the values are true
 */

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

let isSunny = true;
let temperature = 20;
let isSummer = true;
const action =
  isSunny && temperature >= 30 && isSummer ? "go to the beach" : "go the park";
console.log(action);

let apples = 1;
let oranges = 4;
let mangoes = 4;

console.log(
  "Have apples, oranges and mangoes the same quantity?",
  apples === oranges && apples === mangoes
);

/**
 * Logical OR
 *
 * With OR, a condition is true when "at least one" of the values is true
 */

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

/* A company needs developers that can program in at least one of two languages */

const knowsJavaScript = false;
const knowsPython = true;
const canWork = knowsJavaScript || knowsPython;
console.log("Can I work at this company?", canWork);

/* 
Another company needs developers that are good with both front-end and back-end. 
They also need German speaking people
*/

const isFrontEndDeveloper = true;
const isBackEndDeveloper = true;
const canSpeakGerman = false;
const canWork2 = isFrontEndDeveloper && isBackEndDeveloper && canSpeakGerman;
console.log("Can I work at this other company?", canWork2);

/**
 * Mixing AND and OR
 */

/* A company needs developers that can program in at least one of two languages between JavaScript and Python.
 * They need developers that can speak at least one language between German and English
 */

const knowsJavaScript3 = false;
const knowsPython3 = true;
const canSpeakGerman3 = false;
const canSpeakEnglish3 = true;
const canWork3 =
  (knowsJavaScript3 || knowsPython3) && (canSpeakGerman3 || canSpeakEnglish3);
console.log("Can I work at this company?", canWork3);

const knowsJavaScript4 = false;
const knowsPython4 = true;
const canSpeakGerman4 = false;
const canSpeakEnglish4 = true;

const canProgram = knowsJavaScript4 || knowsPython4;
const canSpeak = canSpeakGerman4 || canSpeakEnglish4;

const canWork4 = canProgram && canSpeak;
console.log("Can I work at this company?", canWork4);

/**
 * Logical NOT
 */

console.log(!true); // false
console.log(!false); // true 

const isTestPositive = false;
const canFly = !isTestPositive;
console.log("Can I take a plane?", canFly);

let tomatoes = 3;
let zucchini = 3;
let areNotEqual = !(tomatoes === zucchini);
console.log("Have tomatoes and zucchini different quantities?", areNotEqual);


let isLoggedIn = true;
let message = !isLoggedIn ? "Please sign up or login to our website" : "Welcome!";
console.log(message);


console.log(!false || !true); //