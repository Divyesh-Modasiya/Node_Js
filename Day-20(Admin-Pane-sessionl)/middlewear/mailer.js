const nodeMailer = require("nodemailer");
const mailer = nodeMailer.createTransport({
    service:"gmail",
    auth:{
        user:"divyeshmodasiya@gmail.com",
        pass:"smmsghovebmhyssw",
    },
});

module.exports.sendOtp = (to,otp) =>{
    let mailoptions = {
        from:"divyeshmodasiya@gmail.com",
        to:to,
        sub:"your password reset otp",
        text:`your otp is ${otp}`
    };

    mailer.sendMail(mailoptions,(err)=>{
        err ? console.log(err) : console.log("mail sended successfully");
    })
}
