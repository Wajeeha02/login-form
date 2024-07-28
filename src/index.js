const express = require("express");
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb");

const app = express();
const templatePath = path.join(__dirname, "../templates");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.static(path.join(__dirname, "../public")));

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/sign", (req, res) => {
  res.render("sign");
});

app.post('/sign', async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };
  try {
    await collection.insertMany([data]);
    res.render('home');
  } catch (err) {
    res.status(500).send('Error saving data');
  }
});

app.listen(8000, () => {
  console.log("port connected");
});
