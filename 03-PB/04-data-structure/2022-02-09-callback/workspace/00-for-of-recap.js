let animals = ["cat", "dog", "mouse", "monkey", "elephant"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

console.log("--------");

for (const animal of animals) {
    console.log(animal);
}

console.log("--------");

let string = "hello";

for (const character of string) {
    console.log(character);
}



for (const key in animals) {
    console.log(key);
}