function printSum() {
    let a = 5;
    let b = 8;
    let sum = a + b;
    console.log(sum);
}


printSum();


for (let i = 1; i <= 10; i++) {
    debugger;
    console.log("");
    console.log("Multiplication table of:", i);
    console.log("---------------------------");
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} =`, i * j);
    }
  }