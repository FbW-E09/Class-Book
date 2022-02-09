function greetPeople(greeting, ...people) {
  console.log("greeting", greeting);
  console.log("people", people);
  for (let person of people) {
    console.log(`${greeting} ${person}`);
  }
}

greetPeople("hello", "Mike", "Jenny", "Maria", "Lisa");

let peopleArray = ["Mike", "Jenny", "Maria", "Lisa"]
greetPeople("hello", ...peopleArray);


// console.log the whole array (I will see the square brackets)
console.log("peopleArray", peopleArray);

// spread the array and console.log its individual values
console.log("spread peopleArray", ...peopleArray);

// the one above is the same as if I was doing this:
console.log("spread peopleArray", "Mike", "Jenny", "Maria", "Lisa");


console.log("joined peopleArray", peopleArray.join(" "));

let joinedPeople = peopleArray.join(" ");
console.log(joinedPeople);

// let spreadPeople = ...peopleArray;
// let spreadPeople = "Mike", "Jenny", "Maria", "Lisa";
// console.log(spreadPeople);



let numbers = [1, 2, 3];

console.log("spread numbers", ...numbers);
console.log("joined numbers", numbers.join(" "));
