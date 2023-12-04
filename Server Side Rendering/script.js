const express = require("express");

let app = express();

app.set('view engine', 'hbs');

let todos = [
    { name: "Cricket", id: 1 },
    { name: "Rugby", id: 2 },
    { name: "Football", id: 3 },
    { name: "Hockey", id: 4 }
]

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about", {
        name: "Sparsh Yadav",
        age: 21
    });
});

app.get("/todos", (req, res) => {
    res.render("todos", {
        todos: todos
    });
})

app.listen(3333, () => {
    console.log("Server Started");
});