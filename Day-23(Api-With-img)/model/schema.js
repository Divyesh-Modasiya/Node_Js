const mongoose = require("mongoose")

const schema = mongoose.Schema({
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

let admin = mongoose.model("imgApi",schema)

module.exports = admin