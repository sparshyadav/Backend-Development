const express=require("express");

let app=express();

app.set('view engine', 'hbs');

app.get("/home", (req, res)=>{
    res.render("home");
})

app.listen(3333, ()=>{
    console.log("Server Started");
});