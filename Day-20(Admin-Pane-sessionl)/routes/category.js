const express = require("express")
const rout = express.Router();
const ctl2 = require("../controller/CatCtlr")
const catmulter = require("../multer/multer")

rout.get("/AddCat",ctl2.CatData)
rout.post("/sendCat",catmulter,ctl2.SendCat)
rout.get("/ViewCat",ctl2.ViewCat)


module.exports = rout


