const express = require("express")
const rout = express.Router();
const Ctlr = require("../controller/indexCtl")
const multer = require("../multer/multer")

rout.get("/",Ctlr.HomePage)
rout.get("/addpage",Ctlr.AddPage)
rout.post("/send",multer,Ctlr.AddData)
rout.get("/delete",Ctlr.DeleteData)
rout.get("/edit",Ctlr.EditPage)
rout.post("/update",multer,Ctlr.UpdateData)


module.exports = rout