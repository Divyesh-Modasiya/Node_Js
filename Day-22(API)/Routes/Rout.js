const express = require("express")
const rout = express.Router()
const ctl = require("../Controller/indexCtl")

rout.get("/",ctl.AddData)
rout.post("/sendData",ctl.SendData);
rout.delete("/deleteData",ctl.DeleteData)
rout.put("/editData",ctl.EditData)

module.exports = rout