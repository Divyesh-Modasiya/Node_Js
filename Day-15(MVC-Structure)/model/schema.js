const mongoose = require("mongoose")
const { type } = require("os")

let schema = mongoose.Schema({
    name:{
        type:String,
        requird:true  
      },
    city:{
        type:String,
        requird:true
    }  
})

let admin = mongoose.model("mvc-crud",schema);
module.exports = admin