const mongoose = require("mongoose")

const CatSchema =mongoose.Schema({
    catName:{
        type : String,
        required : true
    },
    image:{
        type:String,
        required:true
    }
})

let adminInfo = mongoose.model("SecondData",CatSchema)

module.exports = adminInfo