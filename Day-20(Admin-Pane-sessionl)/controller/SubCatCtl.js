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
    let data = await SubCatSchema.find({}).populate({
        path:"categoryId"
    })
    data && res.render("subViewCat",{data})
}

module.exports.DeleteSubCat=async(req,res)=>{

    let inf = await SubCatSchema.deleteMany({categoryId:req.query.id})
    let data = await CatSchema.findById(req.query.id)
    let mainData = await SubCatSchema.findByIdAndDelete(req.query.id)
    mainData && res.redirect("/subCategory/subViewCat")
    
}
