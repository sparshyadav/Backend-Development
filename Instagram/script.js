const express=require("express");
const app=express();
const path=require("path")

app.use(exprss.static(path.join(__dirname, "static")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'hbs');

app.get("/", (req, res)=>{
    res.render("home");
});

app.listen(3333, ()=>{
    console.log("Server Started at Port: 3333");
});