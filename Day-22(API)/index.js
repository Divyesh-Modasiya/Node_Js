const express = require("express")
const port = 8000;
const db =require("./Config/db")
const app = express()

app.use(express.urlencoded())
app.use("/",require("./Routes/Rout"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server started at " + port);
})