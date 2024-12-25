const express = require("express")
const { default: mongoose } = require("mongoose")

const Firstschema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    }
})

let schema = mongoose.model("api",Firstschema)

module.exports = schema
