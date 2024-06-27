const { Router } = require("express");
const routes = Router();
const registerUser = require("../controller/userController/userCreateController");
const loginUser = require("../controller/userController/userLoginController");
const authenticateToken = require("../middleware/auth");
const {
  createTask,
  listTask,
  updateTask,
  deleteTask,
} = require("../controller/taskController/taskManagerController");

routes.post("/user", registerUser);
routes.post("/login", loginUser);
routes.post("/task", authenticateToken, createTask);
routes.get("/task/", authenticateToken, listTask);
routes.put("/task/:id", authenticateToken, updateTask);
routes.delete("/task/:id", authenticateToken, deleteTask);

module.exports = routes;
