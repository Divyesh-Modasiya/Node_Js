const Adminschema = require("../model/schema")
const Authschema = require("../model/AuthSchema")
const fs = require("fs")
let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")

module.exports.viewData=async(req,res)=>{
    let data = await Authschema.find({})
   data && res.status(200).json({msg:data})
}
module.exports.registerData=async(req,res)=>{
    let user = await Authschema.findOne({email:req.body.email})
    if (user) {
        return res.status(200).json({msg:"user alredy exist"})
    }
    req.body.password = await bcrypt.hash(req.body.password,10)   // convert password in to secure form(unreadable formate) in mongoDB
    await Authschema.create(req.body).then((data)=>{
    res.status(200).json({msg:"user Added"})
    })
}


module.exports.LoginData=async(req,res)=>{
   let user =  await Authschema.findOne({email:req.body.email})
   if (user) {
    if (await bcrypt.compare(req.body.password,user.password)) {
        let token = jwt.sign({userData:user},"abc",{expiresIn:"1h"})
        token && res.status(200).json({msg:"user Login",token:token})
    }else{
        res.status(400).json({msg:"password wrong"})
    }
   }else{
    return res.status(400).json({msg:"User not Found"})
   }
}







module.exports.AddData=(req,res)=>{
    res.status(200).json({msg:"data added"})
}
module.exports.SendData=async(req,res)=>{  
    req.body.image = req.file.path  
     await Adminschema.create(req.body).then((data)=>{
        res.status(200).json({msg:req.body})
     })
}

module.exports.deleteData=async(req,res)=>{
    let SingleData = await Adminschema.findById(req.query.id)    
    fs.unlinkSync(SingleData.image);
    await Adminschema.findByIdAndDelete(req.query.id).then((data)=>{
        res.status(200).json({msg:"data Deleted",})
    })
}

module.exports.EditData=async(req,res)=>{
    console.log(req.file);
    let img = "";
    let SingleData = await Adminschema.findById(req.query.id)
    req.file ? img = req.file.path : img = SingleData.image
    req.file && fs.unlinkSync(SingleData.image)
    req.body.image = img
    
    await Adminschema.findByIdAndUpdate(req.query.id,req.body).then((data)=>{
        res.status(200).json({msg:"Data Updated"})
    })
}