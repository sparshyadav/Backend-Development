const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.get("/about", (req, res)=>{
    res.send("<h1>About Page</h1>");
})

app.get("/about/menu", (req, res)=>{
    res.send("<h1>This is a Menu</h1>");
})

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
});