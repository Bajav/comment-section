const express = require("express");
const app = express();

app.get("/",(req, res)=>{
    res.send("we are alive");
});
const port = 5000;
app.listen(port, console.log("we are running on port 5000"));