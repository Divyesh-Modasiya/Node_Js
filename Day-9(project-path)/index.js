const express = require("express");
const path = require("path");
const port = 8000;

const app = express();

app.set("view engine","ejs");
app.use("/public", express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/shop",(req,res)=>{
    res.render("shop");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/services",(req,res)=>{    
    res.render("services");
})
app.get("/blog",(req,res)=>{
    res.render("blog");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.get("/cart",(req,res)=>{
    res.render("cart");
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started at :- " + port);
})