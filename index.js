const express = require ("express");
const bodyParser = require ("body-parser");

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.listen(5000, function(){
    console.log("we are live baby");
})