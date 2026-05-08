//Indexd Colllection : Array
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);

arr.push("Sanjay");
arr.push(0.25);
arr.push(true);
console.log(arr);
console.log(arr.length);
arr.pop();
console.log(arr);

for(let i =0;i < arr.length ; i++){
    console.log(arr[i]);
}

arr.splice(1,1);
console.log(arr);

arr.forEach(function(i){
    console.log(i);
});