const message = "Hello, my name is Carlo!";

// Carlo says "Hi!";

let message1 = 'Carlo says "Hi!"';
// let message2 = "Carlo says "Hi!"";

// Carlo's cat says "Meow"

let message2 = `Carlo's cat says "Meow"`;

// escaping characters

let message3 = "Carlo's cat says \"Meow\"";
console.log(message3);

let message4 = "Carlo's() [] {} cat says \"Meow\"";
console.log(message4);

let message5 = "This character is called a backslash: \\";
console.log(message5);

let backslashCharacter = "\\";
console.log(backslashCharacter);


// special escape sequences

// \n
// \t

let multiLineString = "this string goes \n over multiple lines";
console.log(multiLineString);

let string = "this string \t bla bla bla bla";
console.log(string);