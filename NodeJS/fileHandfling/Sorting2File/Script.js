let fs = require("fs");
let path = require("path");

let fileName1 = "File1.txt";
let fileName2 = "File2.txt";

let filePath1 = path.join(__dirname, fileName1);
let filePath2 = path.join(__dirname, fileName2);
let finalPath = path.join(__dirname, "SortedFile.txt");

function read(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(
            file,
            {
                encoding: "utf-8"
            },
            (err, data) => {
                if (err) {
                    return reject(err.message);
                }
                else {
                    resolve(data);
                }
            }
        )
    })
}

read(filePath1).then((data1) => {
    // console.log(data1);
    data1 = data1.split("\r\n");
    read(filePath2).then((data2) => {
        data2 = data2.split("\r\n");
        res = [...data1, ...data2];
        // console.log(res);
        res = res.map((element) => (
            parseInt(element)
        ))
        // console.log(res);

        fs.writeFile(
            finalPath,
            res,
            (err) => {
                if (err) {
                    console.log("An Error Occured: Please Try Again");
                }
            }
        )
        //     // console.log(data2);
        //     let res=data1+data2;
        //     // console.log(res);
        //     res=res.parseInt(split("\r\n"));
        //     console.log(res);
    })
})

