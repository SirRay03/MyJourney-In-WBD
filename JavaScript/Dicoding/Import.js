const coffeeStock = require('./Export');
 
console.log(coffeeStock);
 
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
*/

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
      console.log("Kopi berhasil dibuat!");
    } else {
      console.log("Biji kopi habis!");
    }
}
   
makeCoffee("robusta", 80);
   
/* output
Kopi berhasil dibuat!
*/

// import coffeeStock from "./state.js";