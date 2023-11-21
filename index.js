const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

const personData = [];

app.get("/", (req, res)=>{
    res.render("index", { name: "hussein", occupation:"hello", comment:"live" });
});

app.post("/",()=>{
    const bodyData = req.body;
    personData.push(bodyData);
    res.render('/');
});

const port = 5000;
app.listen(port, console.log("we are running on port 5000"));