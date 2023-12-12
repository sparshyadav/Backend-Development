const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
let Kitten = require("./model/kitty");

let dbName = "myDB";

let app = express();

// app.use(express.static(path.join(__dirname, "static")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/addkitty", async (req, res) => {
    const { name } = req.body;
    let newKitty = new Kitten({ name });
    await newKitty.save();
})

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`)
    .then(() => {
        app.listen(3000, () => console.log("Server Started"));
    });

