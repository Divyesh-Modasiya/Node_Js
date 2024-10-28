const mongoose = require("mongoose")

let schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

let admin = mongoose.model("Multer",schema)

module.exports = admin