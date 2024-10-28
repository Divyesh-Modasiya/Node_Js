const express = require("express");
const route = express.Router();
let indexCtl = require("../controller/indexCtl")


route.get("/",indexCtl.homePage);
route.post("/send",indexCtl.AddData)
route.get("/edit",indexCtl.EditData)
route.post("/update",indexCtl.UpdateData)

route.get("/delete",indexCtl.DeleteData)

module.exports = route