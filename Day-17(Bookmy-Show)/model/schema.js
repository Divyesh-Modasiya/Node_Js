const momgoose = require("mongoose");

const schema = momgoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

let admin = momgoose.model("Data",schema);

module.exports = admin