// let string4 = "Boogiewoogie";
// let lastLetter = string4[string4.length-1];
// let firstLetter = string4[0];
// let string5 = string4.replace(lastLetter, firstLetter).replace(firstLetter, lastLetter);

// console.log(string5); // outputs eoogiBwoogie but fo rhello its working and outputs oellh

let string4 = "BoogieWoogie";
let lastLetter = string4.substring(string4.length-1);
let firstLetter = string4.substring(0,1);
let string5 = string4.replace(firstLetter,lastLetter);
let string6 = string5.replace(lastLetter, firstLetter);
console.log(string6)

for (const i of [1, 2, 3]) {
    console.log(i);
}