const mongoose = require("mongoose")

const ExtraSchema = mongoose.Schema({
    ExtraCatName:{
        type : String,
        required : true
    },
    ExtraCatId:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"SubCatSchema",
        required: true
    }
   
})

let ExtraInfo = mongoose.model("ExtraSchema",ExtraSchema)

module.exports = ExtraInfo