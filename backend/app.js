require("dotenv/config");
const express = require("express");
const path = require("path");
const mainRouter = require("./routers/main-router.js");
const cors = require("cors");

const app = new express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.static(path.resolve("public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.use("/", mainRouter);

app.use((req, res) => {
  res.status(404).send({ message: ["404 not found"] });
});

app.listen(process.env.PORT || 3000);
