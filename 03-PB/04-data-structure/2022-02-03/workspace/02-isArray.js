console.log(typeof [1, 2, 3]);

// Array.isArray()

/**
 * Check if a variable contains an array
 */


let numbers = [1, 2, 3];

numbers.includes(2);
numbers.reverse();
numbers.slice(1, 2);

let person = {
    name: "Mike",
    age: 38
}


console.log("is numbers an array?", Array.isArray(numbers));
console.log("is [2, 5, 6, 9] an array?", Array.isArray([2, 5, 6, 9]));
console.log("is person an array?", Array.isArray(person));
console.log("is 2 an array?", Array.isArray(2));
console.log("is 'hello' an array?", Array.isArray('hello'));
console.log("is person.age an array?", Array.isArray(person.age));


// console.log(numbers.isArray());