//for loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}

//while loop
let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}

//do while loop

let j = 0;

do {
  console.log(j);
  j++;
} while (j < 3);

//for of loop
let arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}

//for in loop
let user = {
  name: "Sanjay",
  age: 21
};

for (let key in user) {
  console.log(key, user[key]);
}

//break statement
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
} 

//continue statement
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }

  console.log(i);
}
