// const { error } = require("console");
let fs = require("fs");
// console.log(__dirname);
let path = require("path");
let fileName = "data2.txt";
let filePath = path.join(__dirname, "data", fileName);
console.log(filePath);

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

fs.writeFile(
    filePath,
    "Hello World Again!",
    {
        encoding: "utf-8",
        flag: "w"
    },
    (err) => {
        if (err) {
            console.log(err.message);
        }
    }
)