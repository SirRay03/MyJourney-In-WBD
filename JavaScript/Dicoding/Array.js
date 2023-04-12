let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);

myArray.push('JavaScript');
console.log("Add Last");
console.log(myArray);

myArray.pop();
console.log("Delete Last");
console.log(myArray);

myArray.shift();
console.log("Delete First");
console.log(myArray);

myArray.unshift("Apple");
console.log("Add First");
console.log(myArray);

delete myArray[1];
console.log("Delete Index 1");
console.log(myArray);

myArray.splice(2, 1);
console.log("Delete Index 2 and 1 element");
console.log(myArray);

console.log("Length of Array");
console.log(myArray.length);

console.log("Spread");
console.log(...myArray);
// same as console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

//--------------------------------------------------------------------------------
console.log("\n\n\n SPREAD OPERATOR");

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorites, others];

console.log(allFavorites);
console.log("With spread");
const spreadFavorites = [...favorites, ...others];

console.log(spreadFavorites);
console.log("\n\n\nSpread on objects");
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);
