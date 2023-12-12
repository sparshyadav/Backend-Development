const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

app.use(express.static(path.join(__dirname, "static")));
app.use(express.urlencoded({ extended: true }));
app.use(express, json());

let dbName = "myDB";

let app = express();

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`)
    .then(() => {
        app.listen(3000, () => console.log("Server Started"));
    });

