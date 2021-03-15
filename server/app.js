require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const router = require("./router");
const { serverError, clientError } = require("./controller/error");

const app = express();

app.set("PORT", process.env.PORT || 8000);
const middleware = [
  express.json(),
  express.urlencoded({ extended: false }),
  cookieParser(),
  logger("dev"),
  cors(),
];
app.use(middleware);

app.use("/api/v1", router);

app.use(clientError);
app.use(serverError);

module.exports = app;
