const CatSchema = require("../model/catSchema");
const fs = require("fs")


module.exports.CatData =(req,res)=>{
    res.render("addCat")
}
module.exports.SendCat=async(req,res)=>{
    
    req.body.image = req.file.path
    let data = await CatSchema.create(req.body)
    data && res.redirect("/category/addCat",)
}

module.exports.ViewCat = async(req,res)=>{
    let data = await CatSchema.find({})
    data && res.render("viewCat",{data})
}

module.exports.DeleteCat=async(req,res)=>{

    let inf = await CatSchema.deleteMany({categoryId:req.query.id})

    let data = await CatSchema.findById(req.query.id)
    let mainData = await CatSchema.findByIdAndDelete(req.query.id)

    mainData && res.redirect("/category/ViewCat")
    
}
