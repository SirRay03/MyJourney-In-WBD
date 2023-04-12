const myNumber = 42;
const myFloat = 3.14159;
const myString = "42";

console.log(myNumber === myFloat); // false
console.log(Number(myString)+4); // 46
console.log(Number("Raysi")); // NaN

console.log(Number.isInteger(myNumber)); // true
console.log(Number.isInteger(myFloat)); // false
console.log(Number.isInteger(myString)); // false
console.log(Number.parseFloat(myFloat)); // 3.14159
console.log(Number.parseInt(myFloat)); // 3
console.log(Number.parseInt(myString)); // 42
console.log(Number.parseInt("Raysi")); // NaN