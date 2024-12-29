const express = require("express")
const route = express.Router()
const ctl = require("../Controller/indexCtl")

route.post("/login",ctl.Login)
route.get("/showdata",ctl.ShowData)
route.delete("/delete",ctl.DeleteData)

module.exports = route