/**
 * Scope
 *
 * The scope is a context, a block of code, where the variable exists and is accessible.
 * 
 * If a variable is declared in the global scope, it's accessible everywhere.
 * 
 * If a variable is declared inside of a block, for example the body of a function or an if statement,
 * the variable will be accessible only from inside that block
 */

let a = 5;

function sum(a, b) {
  let result = a + b;
  return result;
}
