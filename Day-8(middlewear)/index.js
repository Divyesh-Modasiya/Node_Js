const express = require("express");
const port = 8000;

const app = express();

let data = [
    {
        id:1,
        name:"smit",
        age:"21"
    },
    {
        id:2,
        name:"anand",
        age:"22"
    },
]

app.set("view engine","ejs");
app.use(express.urlencoded());


const middle =(req,res,next)=>{
    let check = req.body.age;
    if(check>=18){
        next();
    }else{
        res.redirect("/")
    }

    
}

app.get("/",(req,res)=>{
    res.render("home");
})

app.post("/send",middle,(req,res)=>{
    res.render("table",{data})
    res.redirect("/table");
    
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started at :- " + port);
})