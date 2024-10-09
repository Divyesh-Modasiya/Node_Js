const express = require("express")

const port = 7777;

const app = express();


const student = [
    {
        id:1,
        name:"rahul",
        sub:"react",
        city:"rajkot"
    },
    {
        id:2,
        name:"rahul",
        sub:"react",
        city:"rajkot"
    },
    {
        id:3,
        name:"rahul",
        sub:"react",
        city:"rajkot"
    },
    {
        id:4,
        name:"rahul",
        sub:"react",
        city:"rajkot"
    }
]

app.set("view engine","ejs");
app.use(express.urlencoded());

app.get("/",(req,res)=>{
    res.render("form",{student})
})

app.post("/send",(req,res)=>{
    console.log(req.body);
    res.redirect("/")
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started :- " + port);
})