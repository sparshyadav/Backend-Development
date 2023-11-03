// const { error } = require("console");
let fs=require("fs");
console.log(__dirname);

fs.writeFile(
    "./fileHandfling/Data/data.txt",
    "Hello World!",
    {
        encoding: "utf-8",
        flag: "w"
    },
    (err)=>{
        if(err){
            console.log(err.message);
        }
    }
)