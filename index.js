const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

const personData = [];

app.get("/", (req, res)=>{
    if(personData.length>0){
        res.render("index",{ 
            username : personData[0].username, 
            occupation: personData[0].occupation,
            comment :personData[0].comment
        });

}else{ res.render("index", { 
    username: "", 
    occupation:"", 
    comment:"" });
}});

app.post("/",(req,res)=>{
    const bodyData = req.body;
    console.log(req.body);
    personData.push(bodyData);
    res.redirect("/");
});

const port = 5000;
app.listen(port, console.log("we are running on port 5000"));