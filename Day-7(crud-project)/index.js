const express = require("express");
const port = 8000;

const app = express();

let user = [
    {
        id:1,
        name:"smit",
        city:"rajkot"
    },
    {
        id:2,
        name:"divyesh",
        city:"rajkot"
    },
    {
        id:3,
        name:"anand",
        city:"rajkot"
    },
]

app.set("view engine","ejs");
app.use(express.urlencoded());


app.get("/",(req,res)=>{
    res.render("index",{user});
})

app.post("/send",(req,res)=>{
    req.body.id = user.length+1
    user.push(req.body);
    console.log(req.body);
    res.redirect("/");
})

app.get("/delete",(req,res)=>{
    let data = user.filter((item)=>item.id != req.query.Id)
    user = data;
    res.redirect("/");
})

app.get("/edit",(req,res)=>{
    let singleData = user.find((item)=>item.id == req.query.Id);
    singleData ? res.render("edit",{singleData}) : console.log(err);
    
})

app.post("/update",(req,res)=>{
    user.map((e,i)=>{
        if (e.id == req.query.Id) {
            e.id = req.query.Id,
            e.name = req.body.name,
            e.city = req.body.city
        }
    })
    res.redirect("/")
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started at : ",port);
})