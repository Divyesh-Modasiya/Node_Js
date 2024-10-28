const express = require("express");
const rout = express.Router();
const dataCtl = require("../controller/control");
const multer = require("../multer/multer")

rout.get("/",dataCtl.addData);

rout.post("/send",multer,dataCtl.someData)
rout.get("/delete",dataCtl.DeleteData)
rout.get("/edit",dataCtl.EditData)
rout.post("/update",multer,dataCtl.UpdateData)
module.exports = rout


