const express = require("express");
const port = 8000;
const db = require("./config/db");
const app = express();
const path = require("path")

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))
app.use("/",require("./routes/rout"))

app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server started at :- " + port);
})