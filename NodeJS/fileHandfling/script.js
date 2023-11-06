// const { error } = require("console");
let fs = require("fs");
// console.log(__dirname);
let path = require("path");
let fileName = "data.txt";
let filePath = path.join(__dirname, "Data", fileName);
// console.log(filePath);

// fs.writeFile(
//     "./fileHandfling/Data/data.txt",
//     "Hello World!",
//     {
//         encoding: "utf-8",
//         flag: "w"
//     },
//     (err)=>{
//         if(err){
//             console.log(err.message);
//         }
//     }
// )

// fs.writeFile(
//     filePath,
//     "Hello World Again!",
//     {
//         encoding: "utf-8",
//         flag: "w"
//     },
//     (err) => {
//         if (err) {
//             console.log(err.message);
//         }
//     }
// )

// fs.rm(
//     filePath,
//     {
//         force: false
//     },
//     (err)=>{
//         if(err){
//             console.log(err.msg);
//         }
//     }
// )

fs.readFile(
    filePath,
    (err,data)=>{
        if(err){
            console.log("This is an Error");
        }else{
            console.log(data.toString());
        }
    }
)