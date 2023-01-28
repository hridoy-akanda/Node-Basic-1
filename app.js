const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users.route");

const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// route not found error
app.use((req, res, next) => {
  res.status(404).json({ message: "Page not found!" });
});
// Server error
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Something broke!" });
});
module.exports = app;
