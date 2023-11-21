const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs'); // Corrected line
app.use(bodyParser.urlencoded({extended:true}));
 

app.get("/", function(req, res){
const name = "";
const occupation = "";
const comment = "";
    res.render("index", { name: name , occupation : occupation, comment :comment});
});
 app.post("/",(req, res)=>{
    const name = req.body.names;
const occupation = req.body.occupations;
const comment = req.body.comments;
    res.render("index", { name: name , occupation : occupation, comment :comment});
 });
app.listen(5000, function(){
    console.log("we are live baby");
});
// const today = new Date();
//     const current = today.getDay();
//     const time = today.toLocaleTimeString();
//     const date = today.toLocaleDateString();