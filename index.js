const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // Corrected line

app.get("/", function (req, res) {
    res.render("index", { name: "hussein" });
});

const port = 5000;
app.listen(port, console.log("we are running on port 5000"));