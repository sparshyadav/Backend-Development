console.log("Running Lib1");
let lib2=require("./lib2");

function cat(){
    console.log("Cat Say Meow");
}

let food="Fish";

module.exports={
    cat, food
}