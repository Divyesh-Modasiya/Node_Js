const express = require("express");
const port = 8000;
const db = require("./config/db")
const path = require("path");
const session = require("express-session");
const passport = require("passport");

const app = express()

app.set("view engine","ejs");
app.use(express.urlencoded())
app.use(session({
    name:"local",
    secret: 'local',
    resave: true,
    saveUninitialized: false,
    cookie: {maxAge:100*100*60 , httpOnly:true }
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  
app.use("/",require("./routes/rout"))
app.use(express.static(path.join(__dirname,"public")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started at - " + port);
})