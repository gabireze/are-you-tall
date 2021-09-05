const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;
app.use(express.static(__dirname));

app.get("*", function (req, res) {
  res.redirect("/");
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
