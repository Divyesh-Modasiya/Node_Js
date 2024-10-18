const express = require("express");
const port = 8000;
const path = require("path");
const db = require("./config/db");
const AdminSchema = require("./config/schema");
const app = express();
app.set("view engine","ejs");
app.use(express.urlencoded());

app.use("/public",express.static(path.join(__dirname,"public")))

app.get("/",async(req,res)=>{
    let data = await AdminSchema.find({})
    res.render("index",{data});
})

app.post("/send",async(req,res)=>{
    let data = await AdminSchema.create(req.body)
    data && res.redirect("/");
    console.log(req.body);
})

app.get("/delete",async(req,res)=>{
    let data = await AdminSchema.findByIdAndDelete(req.query.id);
    data && res.redirect("/");
})

app.get("/edit",async(req,res)=>{
    let data = await AdminSchema.findById(req.query.id);
    data && res.render("edit",{data});
})

app.post("/update",async(req,res)=>{
    let data = await AdminSchema.findByIdAndUpdate(req.body.id,req.body)
    data&&res.redirect("/");
})
app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started at :- " + port);
})