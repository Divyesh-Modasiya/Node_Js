const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    city :{
        type:String,
        required:true
    }
})

let admin = mongoose.model("Crud",schema);

module.exports = admin;