// import lib1 from "./lib1"; //newer way to call lib1
// let lib1=require("./lib1"); //older way to call lib1
// console.log(lib1);

// console.log(lib1.add(10, 20));

let {x, add}=require("./lib1");  //Destructering
console.log(add(10, 30));