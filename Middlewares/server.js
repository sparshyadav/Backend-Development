const express = require("express");
const app = express();

function m1(res, res, next) {
    console.log("Running Middleware 1");
    next();
}
app.use(m1);

app.get("/about", (req, res) => {
    console.log("Running /about");
    res.send("About");
})

app.get("/", (req, res) => {
    console.log("Running /");
    res.send("home");
})

app.listen(3333, () => console.log("Server Started"));