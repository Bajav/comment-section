const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs'); // Corrected line
app.use(bodyParser.urlencoded({extended:true}));
 
const personData =[];

app.get("/", function(req, res){
    if (personData.length > 0) {
        res.render("index", { personData: personData });
    } else {
        res.render("index", { personData: [] }); // Pass an empty array if personData is empty
    }
});

 app.post("/",(req, res)=>{
   console.log(req.body);
   var newPersonData = req.body;
   personData.push(newPersonData);
   console.log(personData);
    res.redirect("/");
 });

app.listen(5000, function(){
    console.log("we are live baby");
});
// const today = new Date();
//     const current = today.getDay();
//     const time = today.toLocaleTimeString();
//     const date = today.toLocaleDateString();