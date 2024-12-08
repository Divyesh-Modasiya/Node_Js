const CatSchema = require("../model/catSchema");
const fs = require("fs")


module.exports.CatData =(req,res)=>{
    res.render("addCat")
}
module.exports.SendCat=async(req,res)=>{
    console.log(req.file);
    
    req.body.image = req.file.path
    let data = await CatSchema.create(req.body)
    data && res.redirect("/category/addCat",)
}

module.exports.ViewCat = async(req,res)=>{
    let data = await CatSchema.find({})
    console.log(data);
    data && res.render("viewCat",{data})
}
