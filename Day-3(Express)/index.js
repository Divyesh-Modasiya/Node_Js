const express = require("express");

const port = 8000;
const data = express();

data.set("view engine","ejs");
data.use(express.urlencoded());

data.get("/",(req,res)=>{
    res.render("index");
})

data.get("/about",(req,res)=>{
    res.render("about");
})

data.post("/send",(req,res)=>{
    console.log(req.body)
    res.redirect("/");
})

data.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server Started at :- " + port);
})