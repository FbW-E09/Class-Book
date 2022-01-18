/* 
Math.random()

0.12354563
0.8945
0.25356463
0.6389457435

0.999999999999

0.9999999 * 10 => 9.99999999999
* 10

*/

let max = 6;
/* 
Math.random() * 6: gives us values between 0 and 5.9999999
Math.floor(Math.random() * 6): gives us integer values between 0 and 5 (0, 1, 2, 3, 4, 5)
Math.floor(Math.random() * 6 + 1): gives us integer values between 1 and 6 (1, 2, 3, 4, 5, 6)
*/
console.log(Math.floor(Math.random() * max + 1));
console.log(Math.ceil(Math.random() * max));




console.log("" + 2);
console.log(+"2");
console.log(Number("123"));

let number = 2;

console.log(number.toString());