const express = require("express");
const port = 8000;
const db = require("./config/db")
const path = require("path");
const session = require("express-session");
const passport = require("./middlewear/passport");
const flash = require("connect-flash")
const ConnectFlash = require("./middlewear/flash")

const app = express()

app.set("view engine","ejs");
app.use(express.urlencoded())
app.use(flash())

app.use(session({
    name:"local",
    secret: 'local',
    resave: true,
    saveUninitialized: false,
    cookie: {maxAge:100*100*60 , httpOnly:true }
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(passport.AuthUser)
  app.use(ConnectFlash.setFlash)
app.use("/",require("./routes/rout"))
app.use("/category",require("./routes/category"))
app.use("/subCategory",require("./routes/subcategory"))
app.use("/Extra",require("./routes/extra"))
app.use("/product",require("./routes/product"))

app.use(express.static(path.join(__dirname,"public")))
app.use("/public/uploads/",express.static(path.join(__dirname,"public/uploads")))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started at - " + port);
})