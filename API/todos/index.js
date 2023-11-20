const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data", "todos.js");
class todo {
  //? This method will return all the todos.
  static getTodos() {
    return new Promise((res, rej) => {
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, "[]");
      }
      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) rej(err);
        res(JSON.parse(data));
      });
    });
  }

  static addTodo(item) {
    return new Promise((res, rej) => {
      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) rej(err);
        const todos = JSON.parse(data);
        todos.push(item);
        fs.writeFile(filePath, JSON.stringify(todos), (err) => {
          if (err) rej(err);
          res("Task added successfully!");
        });
      });
    });
  }
}

module.exports = todo;
