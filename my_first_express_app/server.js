const express = require("express");
const app = express();

const person = require("./person.json");
// const about = require("./about.html");
// const contact_us = require("./contact_us.html");

app.get("/", (req, res) => {
  res.send("Welcome" + `${person.name}`);
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./contact_us.html", { root: __dirname });
});

app.use((req, res) => {
  console.log("Sorry! Can’t find that resource. Please check your URL");
  res.send("Sorry! Can’t find that resource. Please check your URL");
});

app.listen(3000, function () {
  console.log("example express work");
  console.log(person);
});
