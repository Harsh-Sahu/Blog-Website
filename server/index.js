const express = require("express");
var _ = require("lodash");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const composeRouter = require("./routes/compose");

app.use("/compose", composeRouter);

const homeRouter = require("./routes/home");

app.use("/home", homeRouter);

const deleteRouter = require("./routes/delete");

app.use("/delete", deleteRouter);

const postRouter = require("./routes/post");

app.use("/post", postRouter);

app.listen(7000, function () {
  console.log("Server started on port 7000");
});
