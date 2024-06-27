const { Router } = require("express");
const routes = Router(); 

const registerUser = require("../controller/userController/userCreateController");
const loginUser = require("../controller/userController/userLoginController");

routes.post("/user", registerUser);
routes.post("/login", loginUser);

module.exports = routes;
