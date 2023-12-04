const express=require("express");
const app=express();

function m1(){
    console.log("Running Middleware 1");
}

app.get("/", (req, res)=>{
    console.log("Running /");
    res.send("home");
})

app.listen(3333, ()=>console.log("Server Started"));