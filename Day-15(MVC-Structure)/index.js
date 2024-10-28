const express = require("express")
const port = 8000
const db = require("./config/db")

const app = express();
app.set("view engine","ejs");
app.use(express.urlencoded());

app.use("/",require("./router/index"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server Started at :- "+ port);
})