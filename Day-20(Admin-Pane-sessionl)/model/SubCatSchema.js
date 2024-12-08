const mongoose = require("mongoose")

const SubCatSchema =mongoose.Schema({
    SubCatName:{
        type : String,
        required : true
    },
    categoryId:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"SecondData",
        required: true
    }
   
})

let admin2Info = mongoose.model("SubCatSchema",SubCatSchema)

module.exports = admin2Info