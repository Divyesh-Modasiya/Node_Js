const admin = require("../model/schema");
const AdminSchema = require("../model/schema");

const fs = require("fs")


module.exports.addData =async(req,res)=>{
    let data = await AdminSchema.find({})
    data && res.render("home",{data});
}

module.exports.someData =("/send",async(req,res)=>{
        req.body.image = req.file.path
        let data = await AdminSchema.create(req.body);
        data && res.redirect("/");
})
module.exports.DeleteData = ("/delete",async(req,res)=>{
    let singleData = await admin.findById(req.query.id)
    fs.unlinkSync(singleData.image)
    let data = await AdminSchema.findByIdAndDelete(req.query.id)
    data && res.redirect("/");
})
module.exports.EditData = ("/edit",async(req,res)=>{
    let data = await AdminSchema.findById(req.query.id);
    data && res.render("edit",{data});
} )
module.exports.UpdateData = ("/update",async(req,res)=>{
    let img = "";
    let singleData = await AdminSchema.findById(req.body.id)
    req.file ? img = req.file.path : img = singleData.image
    req.file && fs.unlinkSync(singleData.image)
    req.body.image = img
    let data = await AdminSchema.findByIdAndUpdate(req.body.id,req.body)
    data && res.redirect("/");
})