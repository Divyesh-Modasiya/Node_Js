const mongoose = require("mongoose");
const { type } = require("os");

let schema = mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    sub:{
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

let admin = mongoose.model("CRUD",schema);
module.exports = admin