const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/MERN_1")

let db = mongoose.connection

db.once("open",(err)=>{
    err ? console.log(err) : console.log("db connected");    
})

module.exports =db