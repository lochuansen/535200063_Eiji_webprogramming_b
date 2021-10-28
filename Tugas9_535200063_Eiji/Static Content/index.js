var express = require("express");

var app = express();

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.use(express.static("public"));

app.listen(3000);