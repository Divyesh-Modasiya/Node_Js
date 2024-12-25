const express = require("express")
const rout = express.Router()
const ctl = require("../controller/indexCtl")
const upload = require("../multer/multer")
const auth = require("../middlewer/auth")


rout.post("/register",ctl.registerData)
rout.post("/login",ctl.LoginData)
rout.get("/viewData",auth,ctl.viewData)



rout.get("/",ctl.AddData);
rout.post("/sendData",upload,ctl.SendData)
rout.delete("/deleteData",ctl.deleteData)
rout.put("/editData",upload,ctl.EditData)




module.exports = rout