const express = require("express");
const port = 8000;
const db = require("./config/db");
const path = require("path")
const adminschema = require("./config/schema");
const app = express();
app.set("view engine","ejs");
app.use(express.urlencoded());
app.use("/public",express.static(path.join(__dirname,"public")))


app.get("/",async(req,res)=>{
    let data = await adminschema.find({})
    data && res.render("index",{data})
})

app.post("/insertData", async (req,res) => {
    let data = await adminschema.create(req.body)
    console.log(data)
    data ? res.redirect("/") : console.log("data added successfully!")
});

app.get("/delete",async(req,res)=>{
    let deletData = await adminschema.findByIdAndDelete(req.query.id);
    deletData && res.redirect("/");
})

app.get("/edit",async(req,res)=>{
    let data = await adminschema.find({});
    let userInfo = data.find((item)=> item.id == req.query.id);
    userInfo && res.render("edit",{userInfo});
})

app.post("/updateData",async(req,res)=>{
    let data = await adminschema.findByIdAndUpdate(req.body.id,{
        name : req.body.name,
        city : req.body.city
    });
    data ? res.redirect("/") : console.log("err");
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server started at :- " + port);    
})