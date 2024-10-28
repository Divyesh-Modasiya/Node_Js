const express = require("express")
const port = 8000;
const db = require("./config/db")
const Addschema = require("./config/schema")
const multer = require("./multer/multer")
const path = require("path")
const app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))

app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.get("/",async(req,res)=>{
    let data = await Addschema.find({})
    res.render("index",{data});
})

app.post("/send", multer,async(req,res)=>{
    req.body.image = req.file.path
    let data = await Addschema.create(req.body);
    data && res.redirect("/");
})

app.get("/delete",async(req,res)=>{
    let data = await Addschema.findByIdAndDelete(req.query.id);
    data && res.redirect("/");
})

app.get("/edit",async(req,res)=>{
    let data = await Addschema.findById(req.query.id,req.body);
    data && res.render("edit",{data});
})
app.post("/update",async(req,res)=>{
    let data = await Addschema.findByIdAndUpdate(req.body.id,req.body)
    data && res.redirect("/")
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started at :-" + port);
})