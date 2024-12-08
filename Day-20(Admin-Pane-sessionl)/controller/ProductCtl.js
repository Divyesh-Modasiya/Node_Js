const ProductSchema = require("../model/ProductSchema")
const ExtraSchema = require("../model/ExtraSchema")

module.exports.AddProduct=async(req,res)=>{
    let data = await ExtraSchema.find({});
    data && res.render("addProduct",{data});
}
module.exports.AddProductData=async(req,res)=>{
    req.body.image = req.file.path
    let data = await ProductSchema.create(req.body)
    data && res.redirect("/product/addProduct")
}