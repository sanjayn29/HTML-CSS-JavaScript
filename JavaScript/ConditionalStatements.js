//if statement
let age = 20;

if (age >= 18) {
  console.log("Eligible to vote");
} 

//if-else statement
let agee = 16;

if (agee >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

//else if Ladder
let marks = 85;

if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 75) {
  console.log("B Grade");
} else {
  console.log("C Grade");
}

//switch Statement

let day = 2;

switch(day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid");
}

//Ternary Operator
let rollno = 87;
let result = (rollno < 231) ? "Pass" : "Fail";
console.log(result);