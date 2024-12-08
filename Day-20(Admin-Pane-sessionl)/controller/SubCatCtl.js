const SubCatSchema = require("../model/SubCatSchema")
const CatSchema = require("../model/catSchema")

module.exports.AddSubCat =async(req,res)=>{
    let data = await CatSchema.find({})
   data && res.render("subAddCat",{data})
}
module.exports.SendSubCat=async(req,res)=>{
    console.log(req.body);
    let data  = await SubCatSchema.create(req.body)
    data && res.redirect("/subCategory/subAddCat")
}
module.exports.ViewSubCat=async(req,res)=>{
    let data = await SubCatSchema.find({})
    data && res.render("subViewCat",{data})
}
