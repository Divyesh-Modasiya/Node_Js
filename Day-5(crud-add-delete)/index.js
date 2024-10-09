const express = require("express");
const port = 8000;

const crud = express();

let info = [
    {
        id : 1,
        name:"smit",
        sub:"node",
        city:"rajkot"
    },
    {
        id : 2,
        name:"smit",
        sub:"node",
        city:"rajkot"
    },
    {
        id : 3,
        name:"smit",
        sub:"node",
        city:"rajkot"
    }
]

crud.set("view engine","ejs");
crud.use(express.urlencoded());


crud.get("/",(req,res)=>{
    res.render("data",{info});
})

crud.post("/send",(req,res)=>{
    req.body.id = info.length + 1;
    info.push(req.body);
    res.redirect("/")
})

crud.get("/delete",(req,res)=>{
    let store = info.filter((item)=>item.id != req.query.Id)
    info = store;
    res.redirect("back");
    
})

crud.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started at :-" + port);
})