const express = require ("express");
const bodyParser = require ("body-parser");

const app = express();

app.get("/", function(req, res){
    const today =new Date();
    const current = today.getDay();
    // res.sendFile(__dirname + "/index.html");

    if(current === 2 || current === 0)
    {
        res.send("we are here lads");
    }else{
        res.send("we are here ladssssss");
    }
})

app.listen(5000, function(){
    console.log("we are live baby");
})