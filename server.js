const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
var app = express();

app.use(cors());

const PORT = 3000;

const getTransport =()=>{
    return nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          type: 'Oauth2',
          user: "sabin@noveltytechnology.com",
          clientId: "973025605826-nh3sa7tno4uc8l3ejre87rd4i9go53n3.apps.googleusercontent.com",
          clientSecret: "5_zsUIaHAhARe4rb-bKpcccr",
          refreshToken: "1/wtzvdhvzCyBkW6wCoH1zhjS7AuzboPrs1Tb2z3HnzfQ"
        }
      });
}




app.post('/sendMail',( request, response )=>{
    console.log("mail")
    let transporter = getTransport();
    let mailOptions = {
      to:"saigal@noveltytechnology.com",
      from:"sabin@noveltytechnology.com",
      html:'<h1>sending email using oauth',
      subject:'test',
    };
 
      transporter.sendMail(mailOptions, function (error) {
        if (error) {
            console.log(error,"error");
            return true;
        }
        console.log("email send successfully")
      });
})

app.listen( PORT ,()=>console.log("server started at 3000"));