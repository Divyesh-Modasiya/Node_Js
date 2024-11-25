const mongoose = require("mongoose")
const schema = mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    skill:{
        type:Array,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})
let admin = mongoose.model("SessionData",schema)

module.exports = admin