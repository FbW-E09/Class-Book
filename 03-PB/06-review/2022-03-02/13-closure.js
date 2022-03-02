function outer() {
    let number = 0;
    function inner() {
        console.log(number);
        number++;
        return number;
    }

    return inner;
}

let counter = outer();

console.log(counter);

counter();
counter();
counter();