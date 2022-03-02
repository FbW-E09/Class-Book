function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(5, 100, 5, 3));
console.log(sum(5));
