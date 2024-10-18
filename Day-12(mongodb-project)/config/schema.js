const mongoose = require("mongoose");

let schema = mongoose.Schema({
    book:{
        type : String,
        reqiured : true
    },
    auther:{
        type : String,
        required:true
    },
    year:{
        type : Number,
        required:true
    },
    price:{
        type : Number,
        required:true
    }
})

let admin = mongoose.model("CRUD",schema);

module.exports = admin;