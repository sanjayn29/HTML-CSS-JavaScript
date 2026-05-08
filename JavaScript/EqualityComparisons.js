//equality comparisons

//loose equality (==) - performs type coercion if necessary
console.log(5 == '5');

//strict equality (===) - does not perform type coercion, checks both value and type
console.log(5 === '5');

//loose inequality (!=) - performs type coercion if necessary
console.log(5 != '5');

//strict inequality (!==) - does not perform type coercion, checks both value and type
console.log(5 !== '5');     

// >
console.log(5 > 3);

// <
console.log(5 < 3);

//object.is()
console.log(Object.is(5, '5'));