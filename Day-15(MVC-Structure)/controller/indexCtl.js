const AdminSchema = require("../model/schema");

module.exports.homePage = async(req,res) =>{
    let data = await AdminSchema.find({})    
    res.render("home",{data});
}
module.exports.AddData = async(req,res) =>{
    let data = await AdminSchema.create(req.body);
    data && res.redirect("/");
}

module.exports.EditData = async(req,res)=>{
    let data = await AdminSchema.findById(req.query.id);
    data && res.render("edit",{data});
}

module.exports.UpdateData = async(req,res)=>{
    let data = await AdminSchema.findByIdAndUpdate(req.body.id,req.body)
    data && res.redirect("/");
}

module.exports.DeleteData = async(req,res)=>{
    let data = await AdminSchema.findByIdAndDelete(req.query.id);
    data && res.redirect("/");
}