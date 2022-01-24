let temperature = 30;
let season = "summer";

// if (temperature > 25) {
//     if (season === "summer") {
//         console.log("go to the beach");
//     } else {
//         console.log("go to the park");
//     }
// } else {
//     console.log("stay home");
// }

if (temperature > 25 && season === "summer") {
  console.log("go to the beach");
} else if (temperature > 25 && season !== "summer") {
  console.log("go to the park");
} else {
  console.log("stay home");
}
