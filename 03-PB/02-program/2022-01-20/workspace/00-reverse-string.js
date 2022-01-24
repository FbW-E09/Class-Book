let string = "Hello World";
let stringToArray = string.split("");
let reversedArray = stringToArray.reverse();
let reversedString = reversedArray.join("");

console.log(reversedString);


let reversedString2 = string.split("")
                            .reverse()
                            .join("");
console.log(reversedString2);


let parentsNames = ["Ljube", "Zagorka"];
let siblingNames = ["Jen", "John"];
let family = parentsNames.concat(siblingNames);
console.log("parents names:", parentsNames);
console.log("family:", family);
console.log(parentsNames[0]);
parentsNames[0] = "Mike";
console.log(parentsNames);


let letters = ["a", "b", "c"];

// change "a" to "z"
letters.splice(0, 1, "z");
// console.log(letters);
letters[0] = "z";
console.log(letters);