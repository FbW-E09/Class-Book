// print a list of even numbers from 0 to 100
// even numbers: 0, 2, 4, 6, 8, 10, 12...

// i += 2; same as i = i + 2

// for (let i = 0; i <= 10000; i += 2) {
//   console.log(i);
// }

for (let i = 0; i <= 10000; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// let's print all numbers from 0 to 100
// the output should be something like:
// 0 is an even number
// 1 is an odd number
// 2 is an even number
// ...

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is an even number`);
//   } else {
//     console.log(`${i} is an odd number`);
//   }
// }

// for (let i = 1; i <= 10000; i *= 2) {
//    console.log(i);
//  }