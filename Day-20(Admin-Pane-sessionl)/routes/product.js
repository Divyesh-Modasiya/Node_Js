const express = require("express");
const rout = express.Router();
const ctl5 = require("../controller/ProductCtl")
const multer = require("../multer/multer")

rout.get("/addProduct",ctl5.AddProduct)
rout.post("/AddProductData",multer,ctl5.AddProductData)
rout.get("/viewProduct",ctl5.ViewProduct)
rout.get("/deleteProduct",ctl5.DeleteProduct)


module.exports = rout