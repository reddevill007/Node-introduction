const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page" + ", hey " + req.query.name);
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
