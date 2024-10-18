const express = require("express");
const port = 8000;
const app = express();
const db = require("./config/database");
const schema = require("./config/dbschema");

app.set("view engine","ejs");
app.use(express.urlencoded());

app.get("/",(req,res)=>{
    res.render("info");
})

app.post("/go",async(req,res)=>{
    let data = await schema.create(req.body);
    data && res.redirect("/");
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started at :- " + port);
})