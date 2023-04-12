console.log("OBJECT DESTRUCTURING");

const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

let age = 20;

//Destructuring object
const {firstName, lastName} = profile;
 
({age} = profile);

console.log(firstName, lastName, age);

/*
Saat melakukan destructuring assignment, 
kita perlu menuliskan destructuring object 
di dalam tanda kurung. Jika tidak menuliskan 
tanda kurung, tanda kurung kurawal akan 
membuat JavaScript mengira kita membuat block 
statement, sementara block statement tidak bisa 
berada pada sisi kiri assignment.
*/
  
const {firstName1, age1, isMale} = profile;
console.log("\n")
console.log(firstName1)
console.log(age1)
console.log(isMale)

const {isFemale = true} = profile1;
console.log(isFemale)

const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile;
console.log(localFirstName, localLastName, localAge);

console.log("ARRAY DESTRUCTURING")
console.log("Same but with [] instead of {}")
console.log("You can also skip with [,,item] to skip the first 2 items")
console.log("You don't have to use () to destructure an array")
console.log("isMale and isFemale in object is the same in array")