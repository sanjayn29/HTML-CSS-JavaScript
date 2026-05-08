// Keyed Collections in JavaScript: Map
let map = new Map();
map.set("name","Sanjay");
map.set("age",21);
map.set("male",true);

console.log(map);
console.log(map.get("name"));
console.log(map.get("age"));
console.log(map.get("male"));
console.log(map.has("age"));
console.log(map.size);
map.delete("male");
console.log(map);
map.clear();
console.log(map);

// Keyed Collections in JavaScript: WeakMap
let weakmap = new WeakMap();
let obj = {};
weakmap.set(obj, "This is a weak map");
console.log(weakmap.get(obj));
console.log(weakmap.has(obj));
weakmap.delete(obj);
console.log(weakmap.has(obj));


// Keyed Collections in JavaScript: Set
let set = new Set();
set.add(87);
set.add(213);
set.add("Sanjay");
set.add(true);
console.log(set);
console.log(set.has(87));
console.log(set.size);
set.delete("Sanjay");
console.log(set);
set.clear();
console.log(set);

// Keyed Collections in JavaScript: WeakSet
let weakset = new WeakSet();
let obj1 = {};
let obj2 = {};
console.log(weakset);
weakset.add(obj1,"This is a weak set");
weakset.add(obj2,"This is a weak set");
console.log(weakset.has(obj1));
console.log(weakset.has(obj2));
weakset.delete(obj1);
console.log(weakset.has(obj1));