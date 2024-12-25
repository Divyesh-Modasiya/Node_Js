const express = require("express")
const rout = express.Router()
const ctl3 = require("../controller/SubCatCtl")

rout.get("/subAddCat",ctl3.AddSubCat)
rout.post("/SendSubCat",ctl3.SendSubCat)
rout.get("/subViewCat",ctl3.ViewSubCat)
rout.get("/deleteSubCat",ctl3.DeleteSubCat)

module.exports = rout