//implict casting
let age = "25";
let newAge = age - 5; // Implicitly converts age to a number and subtracts 5
console.log(newAge);
console.log(typeof newAge);
console.log(typeof age);

//explicit casting
let rollno="87";
let newrollno=Number(rollno); // Explicitly converts rollno to a number
console.log(newrollno);
console.log(typeof newrollno);
console.log(typeof rollno);

let isTrue = "true";
let newIsTrue = Boolean(isTrue);
console.log(newIsTrue);
console.log(typeof newIsTrue);
console.log(typeof isTrue);

let num=123;
let strNum=String(num); // Explicitly converts num to a string
console.log(strNum);
console.log(typeof strNum);
console.log(typeof num);

let num2=8.25
let strNum2=String(num2); // Explicitly converts num2 to a string
console.log(strNum2);
console.log(typeof strNum2);
console.log(typeof num2);

let val="25";
let orgval=parseInt(val); // Explicitly converts val to an integer
console.log(orgval);
console.log(typeof orgval);
console.log(typeof val);
