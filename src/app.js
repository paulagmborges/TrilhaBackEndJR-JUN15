require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const routes = require("./routes/routes");

const app = express();
const router = require("./routes/routes");
const swaggerDocument = require("../swagger.json");

app.use(express.json());
app.use(cors());
app.use(routes);
app.use("v1", router);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(process.env.PORT, () => {
  console.log("Connected !");
});
