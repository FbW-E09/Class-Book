// if (day === "Monday") {
//     console.log("π±");
//   } else if (day === "Tuesday" || day === "Wednesday") {
//     console.log("π©");
//   } else if (day === "Thursday") {
//     console.log("π€― Almost there");
//   } else if (day === "Friday") {
//     console.log("πΈπΊπΉ");
//   } else if (day === "Saturday" || day === "Sunday") {
//     console.log("ππππ₯³ππππ₯³");
//   } else {
//     console.log(`${day} is not a valid day`);
//   }

let day = "Wednesday";

switch (day) {
  case "Monday": // day === "Monday"
    console.log("π±");
    break;
  case "Tuesday": // day === "Tuesday"
  case "Wednesday": // day === "Wednesday"
    console.log("π©");
    break;
  case "Thursday":
    console.log("π€― Almost there");
    break;
  case "Friday":
    console.log("πΈπΊπΉ");
    break;
  case "Saturday":
  case "Sunday":
    console.log("ππππ₯³ππππ₯³");
    break;
  default:
    console.log(`${day} is not a valid day`);
}
