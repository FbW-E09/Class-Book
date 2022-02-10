let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

console.log(evenNumbers);

let largerThan4 = numbers.filter((number) => {
    return number > 4;
});

console.log(largerThan4);


console.log(numbers.filter((item) => true));

const animals = ["cat", "dog", "mouse", "giraffe", "koala", "crocodile", "cangaroo"];

function startsWithC(string) {
    return string.startsWith("c");
}

function notStartsWithC(string) {
    return ! string.startsWith("c");
}

function hasLength3(string) {
    return string.length === 3;
}

console.log(animals.filter(startsWithC));

console.log(animals.filter(notStartsWithC));
console.log(animals.filter(hasLength3));