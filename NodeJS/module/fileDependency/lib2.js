console.log("Running Lib2");

let lib1 = require("./lib1");

function dog() {
    console.log("Dog Says Bark");
}

let food = "Pedigree";

module.exports.dog = dog;
module.exports.food = food;
module.exports.lib1 = lib1;

// module.exports = {
//     dog, food, lib1 //Sending lib1 for circular dependency
//     //when we are sending an object, we dont use this method, we send all items individually
// }

// lib1.lib2.lib1==lib1;