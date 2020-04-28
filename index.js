const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("Bem vindo ao index");
})



app.listen(8085,function(){
    console.log("SERVER ON");
})