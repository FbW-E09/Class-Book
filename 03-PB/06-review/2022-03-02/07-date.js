let today = new Date();
console.log(today);

console.log(Math.floor(Date.now() / 1000));

let start = Math.floor(Date.now() / 1000);

for (let i = 0; i < 99999; i++) {
    console.log(i);
}


let end = Math.floor(Date.now() / 1000);

console.log(end - start);