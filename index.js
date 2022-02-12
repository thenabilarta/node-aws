const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to express");
});

const port = process.env.port || 8080;

app.listen(port, () => {
  console.log("Listenning to port 8080");
});
