const express = require("express")
const rout = express.Router();
const ctl = require("../controller/indexCtlr")
const multer = require("../multer/multer")

rout.get("/",ctl.Login);
rout.post("/adminlogin",ctl.LoginAdmin);
rout.get("/logout",ctl.Logout)
rout.get("/dashbord",ctl.Dashbord);
rout.get("/AddAdmin",ctl.AddAdmin)
rout.get("/ViewAdmin",ctl.ViewAdmin)
rout.post("/send",multer,ctl.AddAdminData)
rout.get("/delete",ctl.DeleteData)
rout.get("/edit",ctl.EditData)
rout.post("/update",multer,ctl.UpdateData)
module.exports = rout

