const mongoose = require("mongoose")

let UserSchema = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    }
})

let schema = mongoose.model("mern1",UserSchema)
module.exports = schema