let userData=[
    {
        name: "Sparsh",
        age: 21
    },
    {
        name: "Sweta Shreya Thakurayan",
        age: 20
    }
]

let fs=require("fs");
let path=require("path");
let fileName="user.json";
let filePath=path.join(__dirname, "..", "Data", fileName);

// fs.writeFileSync(
//     filePath,
//     JSON.stringify(userData),
//     (err)=>{
//         if(err){
//             console.log("An Error Occured, Please Try Again");
//         }
//     }
// )

fs.readFile(
    filePath, 
    {
        encoding: "utf-8"
    },
    (err, data)=>{
        if(err){
            console.log("An Error Occured: Please Try Again");
        }
        else{
            data=JSON.parse(data);
            console.log(data);
            console.log(data[0]);
        }
    }
)