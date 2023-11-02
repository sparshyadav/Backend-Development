console.log("Running Lib2");
let lib1=require("./lib1");

function dog(){
    console.log("Dog Says Bark");
}

let food="Pedigree";

module.exports={
    dog, food
}