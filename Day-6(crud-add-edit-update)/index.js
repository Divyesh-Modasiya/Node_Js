const express = require("express");

const port = 8000;

const app = express();

let user = [
    {
        id:1,
        name:"divyesh",
        city:"rajkot"
    },
    {
        id:2,
        name:"smit",
        city:"gondal"
    },
    {
        id:3,
        name:"rahul",
        city:"vapi"
    }
]

app.set("view engine","ejs");
app.use(express.urlencoded());

app.get("/",(req,res)=>{
    res.render("index",{user});
})

app.post("/send",(req,res)=>{
    // console.log(req.body);
    req.body.id = user.length+1;
    user.push(req.body);
    res.redirect("/");    
})
app.get("/delete",(req,res)=>{
    let data = user.filter((item) => item.id != req.query.Id);
    user = data;    
    res.redirect("/");
})

app.get("/edit",(req,res)=>{
    let singleData = user.find((item)=>item.id == req.query.Id);
    console.log(singleData);

   singleData ? res.render("edit",{singleData}) : console.log(err);
   
    
    // singleData && res.render("edit",{singleData});
})

app.post("/update",(req,res)=>{
    user.map((e,i)=>{
        if (e.id == req.query.Id) {
            e.id = req.query.Id,
            e.name = req.body.name,
            e.city = req.body.city
        }else{
            e  
        }
    })
    console.log(req.body);
    res.redirect("/");
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server started : " + port);
})