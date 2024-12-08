const express = require("express")
const rout = express.Router();
const ctl = require("../controller/indexCtlr")
const multer = require("../multer/multer");
const passport = require("../middlewear/passport");



rout.get("/",ctl.Login);
rout.post("/adminlogin", passport.authenticate("local",{failureRedirect:"/"}) ,ctl.LoginAdmin);
rout.get("/logout",ctl.Logout)
rout.get("/dashbord",passport.checkAuth,ctl.Dashbord);
rout.get("/AddAdmin" ,passport.checkAuth ,ctl.AddAdmin)
rout.get("/ViewAdmin" ,passport.checkAuth ,ctl.ViewAdmin)
rout.post("/send",multer,ctl.AddAdminData)
rout.get("/delete",ctl.DeleteData)
rout.get("/edit" ,passport.checkAuth,ctl.EditData)
rout.post("/update",multer,ctl.UpdateData)
rout.get("/profile",ctl.Profile)
rout.get("/changePass",ctl.changePass);
rout.post("/confirmpass",ctl.ConfirmPass)
rout.post("/sendOtp",ctl.sendOtp)
rout.post("/checkpass",ctl.checkPass)
module.exports = rout

