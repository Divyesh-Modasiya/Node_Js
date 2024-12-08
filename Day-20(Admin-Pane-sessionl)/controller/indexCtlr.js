const AdminSchema = require("../model/schema")
const mailer = require("../middlewear/mailer")

const fs = require("fs")


module.exports.Login = async(req,res)=>{
    res.render("login")
}

module.exports.LoginAdmin = async(req,res)=>{  
    req.flash( "success" , "Log in Sucessfull")
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

module.exports.Profile = (req,res) =>{
    res.render("profile");
}
module.exports.changePass = (req,res) =>{
    res.render("changePass");
}
module.exports.ConfirmPass = async(req,res)=>{
    let user = req.user
    if (req.body.oldpass == user.password) {
        if (req.body.newpass !== user.password) {
            if (req.body.newpass == req.body.confirmpass) {
                let changePass = await AdminSchema.findByIdAndUpdate(user.id,{password:req.body.newpass})
                res.redirect("/logout")
            }else{
                console.log("new pass and confirm pass is not same");
            }
        }else{
            console.log("Not use your old pass as new pass");
        }
    }else{
        console.log("old pass is wrong");
    }
}

module.exports.sendOtp=async(req,res)=>{
    console.log(req.body)
    let user = await AdminSchema.findOne({email:req.body.email})
    if (!user) {
        console.log("user not found");
        
        return res.redirect("/")
    }
    let otp = Math.floor(100000 + Math.random() * 900000);
    mailer.sendOtp(req.body.email,otp)

    console.log(user);
    
    req.session.otp = otp;
    req.session.adminData =user
    res.render("checkPass");
}

module.exports.checkPass = async(req,res)=>{
    let adminId = req.session.adminData._id;
    let otp = req.session.otp;
    if (req.body.otp == otp) {
        if (req.body.newpass == req.body.confirmpass) {

            let mainPass = await AdminSchema.findByIdAndUpdate(adminId,{
                password:req.body.newpass
            });
            res.redirect("/")
            
        }else{
            res.redirect("/")
        }
    }else{
        res.redirect("/");
    }
}