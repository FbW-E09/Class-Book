// We can pass parameters into our functions. The parameter is a value we expect and need it for our function to work properly

function square(number) {
  console.log(number * number);
}

// pass in an argument
// square(5);
// square(4);
// square(1123);

// default parameters
function showMessage(message = 'hey', name = 'nobody') {
  console.log(` ${message}, ${name}`);
}

showMessage('hello', 'lisa');
showMessage('lisa', 'hello');
showMessage();
