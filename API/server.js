const express = require("express");
const app = express();
const todo = require("./todos/index");
app.use(express.urlencoded({ extended: true }));

app.get("/getTodo", async (req, res) => {
  await todo
    .getTodos()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});
app.post("/addTodo", async (req, res) => {
  const { taskItem } = req.body;
  await todo
    .addTodo(taskItem)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// Server is running
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
