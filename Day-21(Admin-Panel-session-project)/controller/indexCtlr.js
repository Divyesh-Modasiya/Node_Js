const AdminSchema = require("../model/schema")

const fs = require("fs")

module.exports.Login = async(req,res)=>{
    res.render("login")
}

module.exports.LoginAdmin = async(req,res)=>{  
        res.redirect("/dashbord")
}

module.exports.Logout = (req,res)=>{
    req.session.destroy();
    res.redirect("/");
}

module.exports.Dashbord = async(req,res) =>{
    let admin = req.body
    admin ? res.render("dashbord") : res.redirect("/")
}
module.exports.AddAdmin = async(req,res)=>{
    
        let data = await AdminSchema.find({})
     data && res.render("addAdmin")
    
        // res.redirect("/");
    
}
module.exports.ViewAdmin = async(req,res)=>{
    let data = await AdminSchema.find({})
    data && res.render("viewAdmin",{data})
   
    // res.redirect("/");
   
}
module.exports.AddAdminData = async(req,res)=>{
    req.body.image = req.file.path
    let data = await AdminSchema.create(req.body)
    data && res.redirect("/AddAdmin")
}
module.exports.DeleteData = async(req,res)=>{
    let SingleData = await AdminSchema.findById(req.query.id)
    fs.unlinkSync(SingleData.image);
    let data = await AdminSchema.findByIdAndDelete(req.query.id)
    data && res.redirect("/viewAdmin");
}

module.exports.EditData = async(req,res)=>{
    let data = await AdminSchema.findById(req.query.id)
    data && res.render("form",{data})
}
module.exports.UpdateData = async(req,res)=>{
    let img = "";
    let SingleData = await AdminSchema.findById(req.body.id)
    req.file ? img = req.file.path : img = SingleData.image
    req.file && fs.unlinkSync(SingleData.image)
    req.body.image = img
    let data = await AdminSchema.findByIdAndUpdate(req.body.id,req.body)
    data && res.redirect("/viewAdmin");
}