const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "static")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'hbs');

app.use("/posts", require("./routes/post.js"));

app.listen(3334, () => {
    console.log("Server Started");
})