const express = require("express");
const app = express();

// app.use(m2);
app.use(m1);
app.use(m3);
app.use(m2);

function m1(req, res, next) {
    console.log("Running Middleware 1");
    next();
}
function m2(req, res, next) {
    console.log("Running MIddleware 2");
    next();
}
function m3(req, res, next) {
    console.log("Running Middleware 3");
    next();
}

app.get("/about", (req, res) => {
    console.log("Running /about");
    res.send("About");
})

app.get("/", (req, res) => {
    console.log("Running /");
    res.send("home");
})

app.listen(3333, () => console.log("Server Started"));