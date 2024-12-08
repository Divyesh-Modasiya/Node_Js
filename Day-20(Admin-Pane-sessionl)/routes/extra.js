const express = require("express")
const rout = express.Router();
const ctl4 = require("../controller/ExtraCtl")

rout.get("/ExtraSubAddCat",ctl4.ExtraAddCatData)
rout.post("/SendExtraCat",ctl4.SendExtraCat)
rout.get("/ExtraSubViewCat",ctl4.ViewExtraCat)
module.exports = rout