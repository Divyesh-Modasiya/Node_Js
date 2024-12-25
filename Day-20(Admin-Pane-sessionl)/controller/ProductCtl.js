const ProductSchema = require("../model/ProductSchema")
const ExtraSchema = require("../model/ExtraSchema")
const fs = require("fs")

module.exports.AddProduct=async(req,res)=>{
    let data = await ExtraSchema.find({});
    data && res.render("addProduct",{data});
}
module.exports.AddProductData=async(req,res)=>{
    req.body.image = req.file.path
    let data = await ProductSchema.create(req.body)
    data && res.redirect("/product/addProduct")
    
}
module.exports.ViewProduct= async(req,res)=>{
    let data = await ProductSchema.find({}).populate({
        path:"ProductId",
        populate:{
            path:"ExtraCatId",
            populate:{
                path:"categoryId"
            }
        }
    })
   data && res.render("ViewProduct",{data})
   
}

module.exports.DeleteProduct=async(req,res)=>{
    let anotherData = await ProductSchema.findById(req.query.id)
    fs.unlinkSync(anotherData.image)
    let data =  await ProductSchema.findByIdAndDelete(req.query.id)
    data && res.redirect("/product/viewProduct")
}