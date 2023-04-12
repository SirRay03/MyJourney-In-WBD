const myVar = "JavaScript";
console.log(myVar.length); // 10
console.log(myVar.toUpperCase()); // JAVASCRIPT
console.log(myVar.toLowerCase()); // javascript
console.log(myVar.charAt(0)); // J
console.log(myVar.charAt(1)); // a
console.log(myVar.indexOf("ava")); // 1
console.log(myVar.slice(4)); // Script
console.log(myVar.slice(4, 6)); // Sc
console.log(myVar.slice(-3)); // ipt
console.log(myVar.slice(0, -6)); // Java
console.log(myVar.split("a")); // ["J", "v", "Script"]
console.log(myVar.split("")); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
console.log(myVar.includes("va")); // true
console.log(myVar.includes("Raysi")); // false
console.log("A,B,C".split(",")); // ["A", "B", "C"]
console.log("A,B,C".split(",").join(" ")); // A B C