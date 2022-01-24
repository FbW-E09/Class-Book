// BONUS CHALLENGE:
//  Make a variable for firstName and age and give each variable values. 
//  Create an if/else statement to check whether the person's age is less than 13. 
//  If so, print "firstName is a child". 
// If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". 
//  If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". 
// If none of these conditions apply, print "firstName is .

let age = 20;

if (age < 13) {
    console.log("child");
} else if (age < 20) {
    console.log("teenager");
} else if (age < 30) {
    console.log("young adult");
} else {
    console.log("adult");
}