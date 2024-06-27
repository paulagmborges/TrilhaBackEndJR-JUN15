require("dotenv").config();
const routes = require("./routes/routes");
const express = require("express");
const knex =require("./database/db.Config")
const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log("Connected !");
});
