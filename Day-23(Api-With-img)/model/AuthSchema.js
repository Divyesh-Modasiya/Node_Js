const mongoose = require("mongoose")

const schema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

let AuthSchema = mongoose.model("AuthSchema",schema)

module.exports = AuthSchema