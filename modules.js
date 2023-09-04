//console.log(arguments);
//console.log(require('module').wrapper);

/// Module.exports
const Calculator = require("./test.module-1");

const calc1 = new Calculator();
console.log(calc1.add(4, 7));
/*console.log(calc1.multiply(4, 7));
console.log(calc1.subtract(4, 7));
console.log(calc1.divide(4, 7));*/

console.log("///////////////////////////////////////////");

///Exports

//const calc2 = require("./test-module-2");

const { add, multiply, subtract, divide } = require("./test-module-2");
console.log(add(6, 2));
/*console.log(multiply(6, 2));
console.log(subtract(6, 2));
console.log(divide(6, 2));*/

console.log("///////////////////////////////////////////");

//Caching

require("./test-moule-3")();
require("./test-moule-3")();
require("./test-moule-3")();
