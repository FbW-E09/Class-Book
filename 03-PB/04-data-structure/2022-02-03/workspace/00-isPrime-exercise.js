// isPrime? Create a function that returns true if a number is a prime number,
// and false if it's not.
// NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1.
// The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// 4 -> 4, 2, 1
// 5 -> 5, 1
// 6 -> 6, 3, 2, 1
// 7 -> 7, 1

/**
 * to check if a number is a prime number I divide it by all the integers between 1
 * and the number itself. If any of these divisions gives 0 as a remainder,
 * the number is not prime
 *
 * isPrime(11)
 * 11 % 2 -> 1
 * 11 % 3 -> 2
 * 11 % 4 -> 3
 * 11 % 5 -> 1
 * 11 % 6 -> 5
 * 11 % 7 -> 4
 * 11 % 8 -> 3
 * 11 % 9 -> 2
 * 11 % 10 -> 1
 *
 * isPrime(122)
 * 122 % 2 -> 0
 *
 *
 * isPrime(99)
 * 99 % 2 -> 1
 * 99 % 3 -> 0
 */

// Examples:

// isPrime(7) ➞ true
// isPrime(9) ➞ false
// isPrime(10) ➞ false

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("2", isPrime(2));
console.log("3", isPrime(3));
console.log("9", isPrime(9));
console.log("11", isPrime(11));
console.log("122", isPrime(122));
console.log("99", isPrime(99));
console.log("1357", isPrime(1357));

const isPrime = (num) => {
  let result = ~~Math.sqrt(num);
  for (let i = 2; i <= result; i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
};
