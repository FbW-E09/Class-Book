// if (day === "Monday") {
//     console.log("😱");
//   } else if (day === "Tuesday" || day === "Wednesday") {
//     console.log("😩");
//   } else if (day === "Thursday") {
//     console.log("🤯 Almost there");
//   } else if (day === "Friday") {
//     console.log("🍸🍺🍹");
//   } else if (day === "Saturday" || day === "Sunday") {
//     console.log("🛌🛌🛌🥳🎉🎉🎉🥳");
//   } else {
//     console.log(`${day} is not a valid day`);
//   }

let day = "Wednesday";

switch (day) {
  case "Monday": // day === "Monday"
    console.log("😱");
    break;
  case "Tuesday": // day === "Tuesday"
  case "Wednesday": // day === "Wednesday"
    console.log("😩");
    break;
  case "Thursday":
    console.log("🤯 Almost there");
    break;
  case "Friday":
    console.log("🍸🍺🍹");
    break;
  case "Saturday":
  case "Sunday":
    console.log("🛌🛌🛌🥳🎉🎉🎉🥳");
    break;
  default:
    console.log(`${day} is not a valid day`);
}
