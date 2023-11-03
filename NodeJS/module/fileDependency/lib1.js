console.log("Running Lib1");

let lib2 = require("./lib2");

function cat() {
    console.log("Cat Say Meow");
}

let food = "Fish";

module.exports.cat = cat;
module.exports.food = food;
module.exports.lib2 = lib2;

// module.exports = {
//     cat, food, lib2 //Sending lib2 for circular dependency
// }